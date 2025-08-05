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
  name: localizeSection('navigation', ['name']).name,
  baseUrl: en.navigation.baseUrl
};

// Prepare hero document (all keys)
async function buildHeroDoc() {
  const images = Array.isArray(en.hero.images)
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
    description1: localizeSection('about', ['description1']).description1,
    description2: localizeSection('about', ['description2']).description2,
    currentRoles: localizeSection('about', ['currentRoles']).currentRoles,
    roles: Array.isArray(en.about.roles) && Array.isArray(it.about.roles) ? (en.about.roles || []).map((role, i) => ({
      _key: `role_${i}_${Math.random().toString(36).substr(2, 6)}`,
      en: role,
      it: it.about.roles[i] || ''
    })) : undefined,
    skills: localizeSection('about', ['skills']).skills,
    skillsList: Array.isArray(en.about.skillsList) && Array.isArray(it.about.skillsList) ? (en.about.skillsList || []).map((skill, i) => ({
      _key: `skill_${i}_${Math.random().toString(36).substr(2, 6)}`,
      en: skill,
      it: it.about.skillsList[i] || ''
    })) : undefined,
    externalLinks: Array.isArray(en.about.externalLinks) ? (en.about.externalLinks || []).map((link, i) => ({
      _key: `extlink_${i}_${Math.random().toString(36).substr(2, 6)}`,
      name: link.name || '',
      url: link.url || ''
    })) : undefined,
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
    approach: localizeSection('publicPolicy', ['approach']).approach,
    backToHome: localizeSection('publicPolicy', ['backToHome']).backToHome,
    heroTitle: localizeSection('publicPolicy', ['heroTitle']).heroTitle,
    heroDescription: localizeSection('publicPolicy', ['heroDescription']).heroDescription,
    policyInnovation: localizeSection('publicPolicy', ['policyInnovation']).policyInnovation,
    ourServices: localizeSection('publicPolicy', ['ourServices']).ourServices,
    keyProjects: localizeSection('publicPolicy', ['keyProjects']).keyProjects,
    readyToTransform: localizeSection('publicPolicy', ['readyToTransform']).readyToTransform,
    readyToTransformDescription: localizeSection('publicPolicy', ['readyToTransformDescription']).readyToTransformDescription,
    visitEMI: localizeSection('publicPolicy', ['visitEMI']).visitEMI,
    learnMore: localizeSection('publicPolicy', ['learnMore']).learnMore,
    images,
    projects: Array.isArray(en.publicPolicy.projects) ? (en.publicPolicy.projects || []).map((p, i) => ({
      _key: `pproj_${i}_${Math.random().toString(36).substr(2, 6)}`,
      link: p.link || '',
      title: {
        en: p.title || '',
        it: it.publicPolicy.projects?.[i]?.title || ''
      },
      description: {
        en: p.description || '',
        it: it.publicPolicy.projects?.[i]?.description || ''
      }
    })) : undefined
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
    managementExcellence: localizeSection('outsourcedManagement', ['managementExcellence']).managementExcellence,
    ourServices: localizeSection('outsourcedManagement', ['ourServices']).ourServices,
    keyProjectsAchievements: localizeSection('outsourcedManagement', ['keyProjectsAchievements']).keyProjectsAchievements,
    professionalInsights: localizeSection('outsourcedManagement', ['professionalInsights']).professionalInsights,
    readyToTransform: localizeSection('outsourcedManagement', ['readyToTransform']).readyToTransform,
    readyToTransformDescription: localizeSection('outsourcedManagement', ['readyToTransformDescription']).readyToTransformDescription,
    visitEMI: localizeSection('outsourcedManagement', ['visitEMI']).visitEMI,
    outcomeBasedSolutions: localizeSection('outsourcedManagement', ['outcomeBasedSolutions']).outcomeBasedSolutions,
    dataDrivenApproach: localizeSection('outsourcedManagement', ['dataDrivenApproach']).dataDrivenApproach,
    executiveTraining: localizeSection('outsourcedManagement', ['executiveTraining']).executiveTraining,
    role: localizeSection('outsourcedManagement', ['role']).role,
    impact: localizeSection('outsourcedManagement', ['impact']).impact,
    learnMore: localizeSection('outsourcedManagement', ['learnMore']).learnMore,
    images,
    content: en.outsourcedManagement.content && it.outsourcedManagement.content ? {
      intro: en.outsourcedManagement.content?.intro && it.outsourcedManagement.content?.intro ? { en: en.outsourcedManagement.content.intro, it: it.outsourcedManagement.content.intro } : undefined,
      approach: en.outsourcedManagement.content?.approach && it.outsourcedManagement.content?.approach ? { en: en.outsourcedManagement.content.approach, it: it.outsourcedManagement.content.approach } : undefined,
      services: Array.isArray(en.outsourcedManagement.content?.services) && Array.isArray(it.outsourcedManagement.content?.services)
        ? (en.outsourcedManagement.content.services || []).map((s, i) => ({
            _key: `omservice_${i}_${Math.random().toString(36).substr(2, 6)}`,
            title: {
              en: s.title || '',
              it: it.outsourcedManagement.content.services[i]?.title || ''
            },
            description: {
              en: s.description || '',
              it: it.outsourcedManagement.content.services[i]?.description || ''
            }
          }))
        : [],
      projects: Array.isArray(en.outsourcedManagement.content?.projects) && Array.isArray(it.outsourcedManagement.content?.projects) ? (en.outsourcedManagement.content.projects || []).map((p, i) => ({
        _key: `omproj_${i}_${Math.random().toString(36).substr(2, 6)}`,
        en: {
          title: p.title || '',
          description: p.description || ''
        },
        it: {
          title: it.outsourcedManagement.content.projects[i]?.title || '',
          description: it.outsourcedManagement.content.projects[i]?.description || ''
        }
      })) : undefined
    } : undefined,
    projects: Array.isArray(en.outsourcedManagement.projects) ? (en.outsourcedManagement.projects || []).map((p, i) => ({
      _key: `omproj2_${i}_${Math.random().toString(36).substr(2, 6)}`,
      title: p.title || '',
      description: p.description || '',
      role: p.role || '',
      impact: p.impact || '',
      link: p.link || ''
    })) : undefined
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
    ourImpact: localizeSection('socialImpact', ['ourImpact']).ourImpact,
    organizations: localizeSection('socialImpact', ['organizations']).organizations,
    keyProjectsTitle: localizeSection('socialImpact', ['keyProjectsTitle']).keyProjectsTitle,
    images,
    keyProjects: Array.isArray(en.socialImpact.keyProjects) && Array.isArray(it.socialImpact.keyProjects) ? (en.socialImpact.keyProjects || []).map((kp, i) => ({
      _key: `siproj_${i}_${Math.random().toString(36).substr(2, 6)}`,
      title: {
        en: kp.title || '',
        it: it.socialImpact.keyProjects?.[i]?.title || ''
      },
      description: {
        en: kp.description || '',
        it: it.socialImpact.keyProjects?.[i]?.description || ''
      }
    })) : undefined,
    joinOurMission: localizeSection('socialImpact', ['joinOurMission']).joinOurMission,
    joinOurMissionDescription: localizeSection('socialImpact', ['joinOurMissionDescription']).joinOurMissionDescription,
    visitSEA: localizeSection('socialImpact', ['visitSEA']).visitSEA,
    environmentalSustainability: localizeSection('socialImpact', ['environmentalSustainability']).environmentalSustainability,
    internationalProjects: localizeSection('socialImpact', ['internationalProjects']).internationalProjects,
    communityDevelopment: localizeSection('socialImpact', ['communityDevelopment']).communityDevelopment,
    impact: localizeSection('socialImpact', ['impact']).impact,
    organizationsList: Array.isArray(en.socialImpact.organizationsList) ? (en.socialImpact.organizationsList || []).map((org, i) => ({
      _key: `orglist_${i}_${Math.random().toString(36).substr(2, 6)}`,
      description: { en: org.description, it: it.socialImpact.organizationsList?.[i]?.description || '' }
    })) : undefined,
    projects: Array.isArray(en.socialImpact.projects) ? (en.socialImpact.projects || []).map((p, i) => ({
      _key: `siproj2_${i}_${Math.random().toString(36).substr(2, 6)}`,
      title: { en: p.title || '', it: it.socialImpact.projects?.[i]?.title || '' },
      role: { en: p.role || '', it: it.socialImpact.projects?.[i]?.role || '' },
      impact: { en: p.impact || '', it: it.socialImpact.projects?.[i]?.impact || '' },
      link: p.link,
      description: { en: p.description || '', it: it.socialImpact.projects?.[i]?.description || '' }
    })) : undefined,
    learnMore: localizeSection('socialImpact', ['learnMore']).learnMore
  };
};


const conferencesDoc = {
  _id: 'conferences-single',
  _type: 'conferences',
  title: localizeSection('conferences', ['title']).title,
  subtitle: localizeSection('conferences', ['subtitle']).subtitle,
  viewAllText: localizeSection('conferences', ['viewAllText']).viewAllText,
  featuredConferences: Array.isArray(en.conferences.featuredConferences) && Array.isArray(it.conferences.featuredConferences) ? (en.conferences.featuredConferences || []).map((fc, i) => ({
    _key: `conf_${i}_${Math.random().toString(36).substr(2, 6)}`,
    title: { en: fc.title || '', it: it.conferences.featuredConferences?.[i]?.title || '' },
    subtitle: { en: fc.subtitle || '', it: it.conferences.featuredConferences?.[i]?.subtitle || '' },
    date: { en: fc.date || '', it: it.conferences.featuredConferences?.[i]?.date || '' },
    location: { en: fc.location || '', it: it.conferences.featuredConferences?.[i]?.location || '' },
    attendees: { en: fc.attendees || '', it: it.conferences.featuredConferences?.[i]?.attendees || '' },
    topic: { en: fc.topic || '', it: it.conferences.featuredConferences?.[i]?.topic || '' },
    videoId: { en: fc.videoId || '', it: it.conferences.featuredConferences?.[i]?.videoId || '' },
    description: { en: fc.description || '', it: it.conferences.featuredConferences?.[i]?.description || '' },
    links: Array.isArray(fc.links) ? fc.links.map((link, linkIdx) => ({
      _key: `link_${linkIdx}_${Math.random().toString(36).substr(2, 6)}`,
      name: link.name || '',
      url: link.url || ''
    })) : []
  })) : undefined,
  allConferencesLink: localizeSection('conferences', ['allConferencesLink']).allConferencesLink
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
  featuredConferences: Array.isArray(en.allConferences.featuredConferences) && Array.isArray(it.allConferences.featuredConferences) ? (en.allConferences.featuredConferences || []).map((fc, i) => ({
    _key: `allconf_${i}_${Math.random().toString(36).substr(2, 6)}`,
    title: { en: fc.title || '', it: it.allConferences.featuredConferences?.[i]?.title || '' },
    subtitle: { en: fc.subtitle || '', it: it.allConferences.featuredConferences?.[i]?.subtitle || '' },
    date: { en: fc.date || '', it: it.allConferences.featuredConferences?.[i]?.date || '' },
    location: { en: fc.location || '', it: it.allConferences.featuredConferences?.[i]?.location || '' },
    attendees: { en: fc.attendees || '', it: it.allConferences.featuredConferences?.[i]?.attendees || '' },
    topic: { en: fc.topic || '', it: it.allConferences.featuredConferences?.[i]?.topic || '' },
    videoId: { en: fc.videoId || '', it: it.allConferences.featuredConferences?.[i]?.videoId || '' },
    description: { en: fc.description || '', it: it.allConferences.featuredConferences?.[i]?.description || '' },
    links: Array.isArray(fc.links) ? fc.links.map((link, linkIdx) => ({
      _key: `link_${linkIdx}_${Math.random().toString(36).substr(2, 6)}`,
      name: link.name || '',
      url: link.url || ''
    })) : []
  })) : undefined,
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
    // Sustainability import removed
    await client.createOrReplace(conferencesDoc);
    await client.createOrReplace(allConferencesDoc);
    await client.createOrReplace(footerDoc);
    console.log('Documents imported successfully!');
  } catch (err) {
    console.error('Error importing documents:', err);
  }
}

uploadDocs();
