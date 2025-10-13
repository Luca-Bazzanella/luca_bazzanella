// Script to import translated content from JSON files into Sanity using the Sanity API
// Usage: node importSanityContent.js

const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');

// Configure your Sanity project
const client = createClient({
  projectId: 'n2d0sl08',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-08-01' // Specify Sanity API version
});

// Helper to upload images from local files to Sanity and return asset references
async function uploadImages(imageList, baseDir) {
  const uploaded = [];
  for (const img of imageList) {
    let filename = img.src?.split('/').pop();
    // Decode URL-encoded filenames to match local files
    if (filename) {
      try {
        filename = decodeURIComponent(filename);
      } catch (e) {
        // fallback to original if decode fails
      }
    }
    const filePath = filename ? path.join(baseDir, filename) : null;
    let assetRef = null;
    if (filePath && fs.existsSync(filePath)) {
      try {
        // Only set label if not empty, otherwise omit
        const uploadOptions = { filename };
        if (img.alt && img.alt.trim() !== '') {
          uploadOptions.label = img.alt;
        }
        const asset = await client.assets.upload('image', fs.createReadStream(filePath), uploadOptions);
        assetRef = { _type: 'reference', _ref: asset._id };
      } catch (err) {
        console.error('Image upload failed:', img.src, err);
      }
    } else {
      console.warn('Image file not found for upload:', filePath, 'from src:', img.src);
    }
    // Always push image object, even if assetRef is missing, so metadata is preserved
    const imageObj = {
      _type: 'image',
      asset: assetRef,
      _key: img._key || undefined,
      alt: img.alt || '',
      title: img.title || '',
      subtitle: img.subtitle || '',
      src: img.src || ''
    };
    uploaded.push(imageObj);
  }
  return uploaded;
}

// Load JSON files
const en = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/content-en.json'), 'utf8'));
const it = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/content-it.json'), 'utf8'));

// Prepare vision document (all keys)
const visionDoc = {
  _id: 'vision-single',
  _type: 'vision',
  title: {
    en: en.vision?.title || '',
    it: it.vision?.title || ''
  },
  text: {
    en: en.vision?.text || '',
    it: it.vision?.text || ''
  }
};

// Prepare contactForm document
const contactFormDoc = {
  _id: 'contactForm-single',
  _type: 'contactForm',
  contactBanner: {
    en: en.contactForm?.contactBanner || '',
    it: it.contactForm?.contactBanner || ''
  },
  clickHere: {
    en: en.contactForm?.clickHere || '',
    it: it.contactForm?.clickHere || ''
  },
  thankYou: {
    en: en.contactForm?.thankYou || '',
    it: it.contactForm?.thankYou || ''
  },
  firstName: {
    en: en.contactForm?.firstName || '',
    it: it.contactForm?.firstName || ''
  },
  lastName: {
    en: en.contactForm?.lastName || '',
    it: it.contactForm?.lastName || ''
  },
  email: {
    en: en.contactForm?.email || '',
    it: it.contactForm?.email || ''
  },
  message: {
    en: en.contactForm?.message || '',
    it: it.contactForm?.message || ''
  },
  submitting: {
    en: en.contactForm?.submitting || '',
    it: it.contactForm?.submitting || ''
  },
  submit: {
    en: en.contactForm?.submit || '',
    it: it.contactForm?.submit || ''
  }
};

// Helper to localize a string field
function localizeString(key) {
  return {
    en: en[key] || '',
    it: it[key] || ''
  };
}

// Helper to localize a section
function localizeSection(sectionName, keys) {
  const result = {};
  for (const key of keys) {
    result[key] = {
      en: en[sectionName]?.[key] || '',
      it: it[sectionName]?.[key] || ''
    };
  }
  return result;
}

// Prepare navigation document (all keys)
const navigationDoc = {
  _id: 'navigation-single',
  _type: 'navigation',
  vision: localizeSection('navigation', ['vision']).vision,
  activity: localizeSection('navigation', ['activity']).activity,
  specialization: localizeSection('navigation', ['specialization']).specialization,
  conferences: localizeSection('navigation', ['conferences']).conferences,
  name: localizeSection('navigation', ['name']).name,
  baseUrl: en.navigation.baseUrl
};

// Prepare hero document (all keys)
async function buildHeroDoc() {
  const images = (en.hero && Array.isArray(en.hero.images))
    ? await uploadImages(en.hero.images, path.join(__dirname, '../public/lovable-uploads'))
    : [];
  return {
    _id: 'hero-single',
    _type: 'hero',
    name: localizeSection('hero', ['name']).name,
    images,
    description: localizeSection('hero', ['description']).description,
    contact: localizeSection('hero', ['contact']).contact,
    linkedin: localizeSection('hero', ['linkedin']).linkedin
  };
}

// Prepare about document (all keys)
async function buildAboutDoc() {
  // Use new carouselImages object structure: { image, link, topic, title }
  let carouselImagesArr = Array.isArray(en.about.carouselImages)
    ? en.about.carouselImages.map((img, i) => ({
        image: img.image || null, // This should be the image object or src
        link: img.link || '',
        topic: (typeof img.topic === 'object' && (img.topic.en || img.topic.it))
          ? img.topic
          : { en: img.topic || '', it: (it.about.carouselImages?.[i]?.topic || '') },
        title: (typeof img.title === 'object' && (img.title.en || img.title.it))
          ? img.title
          : { en: img.title || '', it: (it.about.carouselImages?.[i]?.title || '') },
        _key: img._key || `carousel_${i}_${Math.random().toString(36).substr(2, 6)}`
      }))
    : [];

  // Upload images and replace the image field with the uploaded asset reference
  const uploadedImages = await uploadImages(
    carouselImagesArr.map(img => ({
      src: typeof img.image === 'string' ? img.image : img.image?.src || '',
      alt: img.title?.en || '',
      _key: img._key
    })),
    path.join(__dirname, '../public/lovable-uploads')
  );

  // Merge uploaded image asset refs back into carouselImagesArr
  const carouselImages = carouselImagesArr.map((img, i) => ({
    image: uploadedImages[i] || null,
    link: img.link,
    topic: img.topic,
    title: img.title,
    _key: img._key
  }));

  return {
    _id: 'about-single',
    _type: 'about',
    title: localizeSection('about', ['title']).title,
    name: localizeSection('about', ['name']).name,
    carouselImages,
    organizations: Array.isArray(en.about.organizations) && Array.isArray(it.about.organizations)
      ? (en.about.organizations || []).map((org, i) => ({
          _key: `org_${i}_${Math.random().toString(36).substr(2, 6)}`,
          id: org.id || '',
          title: org.title || '',
          role: {
            en: org.role || '',
            it: it.about.organizations?.[i]?.role || ''
          },
          description: {
            en: org.description || '',
            it: it.about.organizations?.[i]?.description || ''
          },
          link: org.link || ''
        }))
      : undefined
  };
}

// Prepare publicPolicy document (all keys)
async function buildPublicPolicyDoc() {
  return {
    _id: 'publicPolicy-single',
    _type: 'publicPolicy',
    title: localizeSection('publicPolicy', ['title']).title,
    heroDescription: localizeSection('publicPolicy', ['heroDescription']).heroDescription
  };
}

// Prepare outsourcedManagement document (all keys)
async function buildOutsourcedManagementDoc() {
  return {
    _id: 'outsourcedManagement-single',
    _type: 'outsourcedManagement',
    title: localizeSection('outsourcedManagement', ['title']).title,
    content: {
      intro: {
        en: en.outsourcedManagement?.content?.intro || '',
        it: it.outsourcedManagement?.content?.intro || ''
      }
    }
  };
}

const allConferencesDoc = {
  _id: 'allConferences-single',
  _type: 'allConferences',
  title: localizeSection('allConferences', ['title']).title,
  attendees: localizeSection('allConferences', ['attendees']).attendees,
  learnMore: localizeSection('allConferences', ['learnMore']).learnMore,
  allConferences: Array.isArray(en.allConferences.allConferences) && Array.isArray(it.allConferences.allConferences) ? (en.allConferences.allConferences || []).map((ac, i) => ({
    _key: `allconfitem_${i}_${Math.random().toString(36).substr(2, 6)}`,
    title: { en: ac.title || '', it: it.allConferences.allConferences?.[i]?.title || '' },
    date: { en: ac.date || '', it: it.allConferences.allConferences?.[i]?.date || '' },
    location: { en: ac.location || '', it: it.allConferences.allConferences?.[i]?.location || '' },
    attendees: { en: ac.attendees || '', it: it.allConferences.allConferences?.[i]?.attendees || '' },
    topic: { en: ac.topic || '', it: it.allConferences.allConferences?.[i]?.topic || '' },
    videoId: { en: ac.videoId || '', it: it.allConferences.allConferences?.[i]?.videoId || '' },
    description: { en: ac.description || '', it: it.allConferences.allConferences?.[i]?.description || '' },
    link: ac.link || '',
    links: Array.isArray(ac.links) ? ac.links.map((link, linkIdx) => ({
      _key: `link_${linkIdx}_${Math.random().toString(36).substr(2, 6)}`,
      name: link.name || '',
      url: link.url || ''
    })) : []
  })) : undefined,
};

const footerDoc = {
  _id: 'footer-single',
  _type: 'footer',
  description: localizeSection('footer', ['description']).description,
  contacts: localizeSection('footer', ['contacts']).contacts,
  location: localizeSection('footer', ['location']).location,
  copyright: localizeSection('footer', ['copyright']).copyright
};

// Upload documents to Sanity
async function uploadDocs() {
  try {
  await client.createOrReplace(navigationDoc);
  const heroDoc = await buildHeroDoc();
  await client.createOrReplace(heroDoc);
  const aboutDoc = await buildAboutDoc();
  await client.createOrReplace(aboutDoc);
  await client.createOrReplace(visionDoc);
  const publicPolicyDoc = await buildPublicPolicyDoc();
  await client.createOrReplace(publicPolicyDoc);
  const outsourcedManagementDoc = await buildOutsourcedManagementDoc();
  await client.createOrReplace(outsourcedManagementDoc);
  await client.createOrReplace(allConferencesDoc);
  await client.createOrReplace(footerDoc);
  await client.createOrReplace(contactFormDoc);
    console.log('Documents imported successfully!');
  } catch (err) {
    console.error('Error importing documents:', err);
  }
}

uploadDocs();
