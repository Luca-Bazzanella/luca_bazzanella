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
    const filename = img.src?.split('/').pop();
    const filePath = filename ? path.join(baseDir, filename) : null;
    let assetRef = null;
    if (filePath && fs.existsSync(filePath)) {
      try {
        const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
          filename,
          label: img.alt || ''
        });
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
  management: localizeSection('navigation', ['management']).management,
  policy: localizeSection('navigation', ['policy']).policy,
  socialImpact: localizeSection('navigation', ['socialImpact']).socialImpact,
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
    cta: localizeSection('hero', ['cta']).cta,
    contact: localizeSection('hero', ['contact']).contact,
    linkedin: localizeSection('hero', ['linkedin']).linkedin
  };
}

// Prepare about document (all keys)
async function buildAboutDoc() {
  // Use carouselImages directly from JSON
  // Add _key to all carouselImages
  let carouselImagesArr = Array.isArray(en.about.carouselImages)
    ? en.about.carouselImages.map((img, i) => ({
        // Always preserve all fields, even if src is missing
        alt: img.alt || '',
        title: img.title || '',
        subtitle: img.subtitle || '',
        src: img.src || '',
        _key: img._key || `carousel_${i}_${Math.random().toString(36).substr(2, 6)}`
      }))
    : [];
  // Always call uploadImages, even if some entries have missing src
  const carouselImages = await uploadImages(carouselImagesArr, path.join(__dirname, '../public/lovable-uploads'));
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
          role: org.role || '',
          description: {
            en: org.description || '',
            it: it.about.organizations?.[i]?.description || ''
          },
          approach: {
            en: org.approach || '',
            it: it.about.organizations?.[i]?.approach || ''
          },
          link: org.link || ''
        }))
      : undefined
  };
}

// Prepare publicPolicy document (all keys)
async function buildPublicPolicyDoc() {
  const policyImages = Array.isArray(en.publicPolicy.images)
    ? en.publicPolicy.images.map((img, i) => ({ ...img, _key: `ppimg_${i}_${Math.random().toString(36).substr(2, 6)}` }))
    : [];
  const images = policyImages.length > 0
    ? await uploadImages(policyImages, path.join(__dirname, '../public/lovable-uploads'))
    : [];
  return {
    _id: 'publicPolicy-single',
    _type: 'publicPolicy',
    title: localizeSection('publicPolicy', ['title']).title,
    description: localizeSection('publicPolicy', ['description']).description,
    intro: localizeSection('publicPolicy', ['intro']).intro,
    backToHome: localizeSection('publicPolicy', ['backToHome']).backToHome,
    heroTitle: localizeSection('publicPolicy', ['heroTitle']).heroTitle,
    heroDescription: localizeSection('publicPolicy', ['heroDescription']).heroDescription,
    learnMore: localizeSection('publicPolicy', ['learnMore']).learnMore,
    images
  };
}

// Prepare outsourcedManagement document (all keys)
async function buildOutsourcedManagementDoc() {
  const omImages = Array.isArray(en.outsourcedManagement.images)
    ? en.outsourcedManagement.images.map((img, i) => ({ ...img, _key: `omimg_${i}_${Math.random().toString(36).substr(2, 6)}` }))
    : [];
  const images = omImages.length > 0
    ? await uploadImages(omImages, path.join(__dirname, '../public/lovable-uploads'))
    : [];
  return {
    _id: 'outsourcedManagement-single',
    _type: 'outsourcedManagement',
    title: localizeSection('outsourcedManagement', ['title']).title,
    description: localizeSection('outsourcedManagement', ['description']).description,
    backToHome: localizeSection('outsourcedManagement', ['backToHome']).backToHome,
    heroDescription: localizeSection('outsourcedManagement', ['heroDescription']).heroDescription,
    role: localizeSection('outsourcedManagement', ['role']).role,
    impact: localizeSection('outsourcedManagement', ['impact']).impact,
    learnMore: localizeSection('outsourcedManagement', ['learnMore']).learnMore,
    images
  };
}

// Prepare socialImpact document (all keys)
async function buildSocialImpactDoc() {
  const siImages = Array.isArray(en.socialImpact.images)
    ? en.socialImpact.images.map((img, i) => ({ ...img, _key: `siimg_${i}_${Math.random().toString(36).substr(2, 6)}` }))
    : [];
  const images = siImages.length > 0
    ? await uploadImages(siImages, path.join(__dirname, '../public/lovable-uploads'))
    : [];
  return {
    _id: 'socialImpact-single',
    _type: 'socialImpact',
    title: localizeSection('socialImpact', ['title']).title,
    description: localizeSection('socialImpact', ['description']).description,
    backToHome: localizeSection('socialImpact', ['backToHome']).backToHome,
    heroDescription: localizeSection('socialImpact', ['heroDescription']).heroDescription,
    images,
    impact: localizeSection('socialImpact', ['impact']).impact,
    // Removed unused 'projects' field as it is not present in the JSON files
    learnMore: localizeSection('socialImpact', ['learnMore']).learnMore
  };
};

const allConferencesDoc = {
  _id: 'allConferences-single',
  _type: 'allConferences',
  title: localizeSection('allConferences', ['title']).title,
  subtitle: localizeSection('allConferences', ['subtitle']).subtitle,
  backToHome: localizeSection('allConferences', ['backToHome']).backToHome,
  featuredTitle: localizeSection('allConferences', ['featuredTitle']).featuredTitle,
  allTitle: localizeSection('allConferences', ['allTitle']).allTitle,
  attendees: localizeSection('allConferences', ['attendees']).attendees,
  learnMore: localizeSection('allConferences', ['learnMore']).learnMore,
  // Removed unused 'featuredConferences' field as it is not present in the JSON files
  allConferences: Array.isArray(en.allConferences.allConferences) && Array.isArray(it.allConferences.allConferences) ? (en.allConferences.allConferences || []).map((ac, i) => ({
    _key: `allconfitem_${i}_${Math.random().toString(36).substr(2, 6)}`,
    title: { en: ac.title || '', it: it.allConferences.allConferences?.[i]?.title || '' },
    subtitle: { en: ac.subtitle || '', it: it.allConferences.allConferences?.[i]?.subtitle || '' },
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
  services: localizeSection('footer', ['services']).services,
  servicesList: Array.isArray(en.footer.servicesList) && Array.isArray(it.footer.servicesList)
    ? (en.footer.servicesList || []).map((s, i) => ({
        _key: `service_${i}_${Math.random().toString(36).substr(2, 6)}`,
        en: s.en || '',
        it: s.it || ''
      }))
    : undefined,
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
    const publicPolicyDoc = await buildPublicPolicyDoc();
    await client.createOrReplace(publicPolicyDoc);
    const outsourcedManagementDoc = await buildOutsourcedManagementDoc();
    await client.createOrReplace(outsourcedManagementDoc);
    const socialImpactDoc = await buildSocialImpactDoc();
    await client.createOrReplace(socialImpactDoc);
    await client.createOrReplace(allConferencesDoc);
    await client.createOrReplace(footerDoc);
    console.log('Documents imported successfully!');
  } catch (err) {
    console.error('Error importing documents:', err);
  }
}

uploadDocs();
