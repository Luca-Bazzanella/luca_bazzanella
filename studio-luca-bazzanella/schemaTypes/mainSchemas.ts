
// LocaleText type (Sanity localization pattern)
export const localeText = {
  name: 'localeText',
  type: 'object',
  title: 'Localized Text',
  fields: [
    { name: 'en', type: 'text', title: 'English' },
    { name: 'it', type: 'text', title: 'Italian' }
  ]
}

// LocaleString type (Sanity localization pattern)
export const localeString = {
  name: 'localeString',
  type: 'object',
  title: 'Localized String',
  fields: [
    { name: 'en', type: 'string', title: 'English' },
    { name: 'it', type: 'string', title: 'Italian' }
  ]
}

// Navigation schema
export const navigation = {
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  fields: [
    { name: 'management', type: 'localeString', title: 'Management' },
    { name: 'policy', type: 'localeString', title: 'Policy' },
    { name: 'socialImpact', type: 'localeString', title: 'Social Impact' },
    { name: 'name', type: 'localeString', title: 'Name' },
    { name: 'baseUrl', type: 'url', title: 'Base URL' }
  ]
}

// Hero schema
export const hero = {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    { name: 'name', type: 'localeString', title: 'Name' },
    { name: 'images', type: 'array', title: 'Images', of: [
      {
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'alt', type: 'string', title: 'Alt' }
        ]
      }
    ] },
    { name: 'description', type: 'localeText', title: 'Description' },
    { name: 'cta', type: 'localeString', title: 'CTA' },
    { name: 'contact', type: 'localeString', title: 'Contact' },
    { name: 'linkedin', type: 'localeString', title: 'LinkedIn' }
  ]
}

// About schema
export const about = {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    { name: 'title', type: 'localeString', title: 'Title' },
    { name: 'name', type: 'localeString', title: 'Name' },
    { name: 'description1', type: 'localeText', title: 'Description 1' },
    { name: 'description2', type: 'localeText', title: 'Description 2' },
    { name: 'currentRoles', type: 'localeString', title: 'Current Roles' },
    { name: 'roles', type: 'array', title: 'Roles', of: [{ type: 'object', fields: [
      { name: 'en', type: 'string', title: 'English' },
      { name: 'it', type: 'string', title: 'Italian' }
    ] }] },
    { name: 'skills', type: 'localeString', title: 'Skills' },
    { name: 'skillsList', type: 'array', title: 'Skills List', of: [{ type: 'object', fields: [
      { name: 'en', type: 'string', title: 'English' },
      { name: 'it', type: 'string', title: 'Italian' }
    ] }] },
    { name: 'externalLinks', type: 'array', title: 'External Links', of: [{ type: 'object', fields: [
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'url', type: 'url', title: 'URL' }
    ] }] },
    { name: 'imageDescriptions', type: 'object', title: 'Image Descriptions', fields: [
      { name: 'europeanManagement', type: 'object', title: 'European Management', fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'subtitle', type: 'string', title: 'Subtitle' }
      ] },
      { name: 'sustainableEconomy', type: 'object', title: 'Sustainable Economy', fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'subtitle', type: 'string', title: 'Subtitle' }
      ] },
      { name: 'ermetes', type: 'object', title: 'Ermetes', fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'subtitle', type: 'string', title: 'Subtitle' }
      ] }
    ] },
    { name: 'carouselImages', type: 'array', title: 'Carousel Images', of: [
      {
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'alt', type: 'string', title: 'Alt' },
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'subtitle', type: 'string', title: 'Subtitle' }
        ]
      }
    ] },
    { name: 'organizations', type: 'array', title: 'Organizations', of: [{ type: 'object', fields: [
      { name: 'id', type: 'string', title: 'ID' },
      { name: 'title', type: 'string', title: 'Title' },
      { name: 'role', type: 'string', title: 'Role' },
      { name: 'link', type: 'url', title: 'Link' }
    ] }] }
  ]
}

// Public Policy schema
export const publicPolicy = {
  name: 'publicPolicy',
  type: 'document',
  title: 'Public Policy',
  fields: [
    { name: 'images', type: 'array', title: 'Images', of: [
      {
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'alt', type: 'string', title: 'Alt' }
        ]
      }
    ] },
    { name: 'title', type: 'localeString', title: 'Title' },
    { name: 'description', type: 'localeText', title: 'Description' },
    { name: 'intro', type: 'localeText', title: 'Intro' },
    { name: 'approach', type: 'localeText', title: 'Approach' },
    { name: 'backToHome', type: 'localeString', title: 'Back To Home' },
    { name: 'heroTitle', type: 'localeString', title: 'Hero Title' },
    { name: 'heroDescription', type: 'localeText', title: 'Hero Description' },
    { name: 'policyInnovation', type: 'localeString', title: 'Policy Innovation' },
    { name: 'ourServices', type: 'localeString', title: 'Our Services' },
    { name: 'keyProjects', type: 'localeString', title: 'Key Projects' },
    { name: 'readyToTransform', type: 'localeString', title: 'Ready To Transform' },
    { name: 'readyToTransformDescription', type: 'localeText', title: 'Ready To Transform Description' },
    { name: 'visitEMI', type: 'localeString', title: 'Visit EMI' },
    { name: 'learnMore', type: 'localeString', title: 'Learn More' },
    { name: 'projects', type: 'array', title: 'Projects', of: [{ type: 'object', fields: [
      { name: 'link', type: 'url', title: 'Link' }
    ] }] }
  ]
}

// Outsourced Management schema
export const outsourcedManagement = {
  name: 'outsourcedManagement',
  type: 'document',
  title: 'Outsourced Management',
  fields: [
    { name: 'images', type: 'array', title: 'Images', of: [
      {
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'alt', type: 'string', title: 'Alt' }
        ]
      }
    ] },
    { name: 'title', type: 'localeString', title: 'Title' },
    { name: 'description', type: 'localeText', title: 'Description' },
    { name: 'backToHome', type: 'localeString', title: 'Back To Home' },
    { name: 'heroDescription', type: 'localeText', title: 'Hero Description' },
    { name: 'managementExcellence', type: 'localeString', title: 'Management Excellence' },
    { name: 'ourServices', type: 'localeString', title: 'Our Services' },
    { name: 'keyProjectsAchievements', type: 'localeString', title: 'Key Projects Achievements' },
    { name: 'professionalInsights', type: 'localeString', title: 'Professional Insights' },
    { name: 'readyToTransform', type: 'localeString', title: 'Ready To Transform' },
    { name: 'readyToTransformDescription', type: 'localeText', title: 'Ready To Transform Description' },
    { name: 'visitEMI', type: 'localeString', title: 'Visit EMI' },
    { name: 'outcomeBasedSolutions', type: 'localeString', title: 'Outcome Based Solutions' },
    { name: 'dataDrivenApproach', type: 'localeString', title: 'Data Driven Approach' },
    { name: 'executiveTraining', type: 'localeString', title: 'Executive Training' },
    { name: 'role', type: 'localeString', title: 'Role' },
    { name: 'impact', type: 'localeString', title: 'Impact' },
    { name: 'learnMore', type: 'localeString', title: 'Learn More' },
    { name: 'content', type: 'object', title: 'Content', fields: [
      { name: 'intro', type: 'localeText', title: 'Intro' },
      { name: 'approach', type: 'localeText', title: 'Approach' },
      { name: 'services', type: 'array', title: 'Services', of: [{ type: 'localeString' }] },
      { name: 'projects', type: 'array', title: 'Projects', of: [{ type: 'object', fields: [
        {
          name: 'en',
          type: 'object',
          title: 'English',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'link', type: 'url', title: 'Link' }
          ]
        },
        {
          name: 'it',
          type: 'object',
          title: 'Italian',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'link', type: 'url', title: 'Link' }
          ]
        }
      ] }] }
    ] },
    { name: 'projects', type: 'array', title: 'Projects', of: [{ type: 'object', fields: [
      { name: 'link', type: 'url', title: 'Link' }
    ] }] }
  ]
}

// Social Impact schema
export const socialImpact = {
  name: 'socialImpact',
  type: 'document',
  title: 'Social Impact',
  fields: [
    { name: 'images', type: 'array', title: 'Images', of: [
      {
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'alt', type: 'string', title: 'Alt' }
        ]
      }
    ] },
    { name: 'title', type: 'localeString', title: 'Title' },
    { name: 'description', type: 'localeText', title: 'Description' },
    { name: 'backToHome', type: 'localeString', title: 'Back To Home' },
    { name: 'heroDescription', type: 'localeText', title: 'Hero Description' },
    { name: 'ourImpact', type: 'localeString', title: 'Our Impact' },
    { name: 'organizations', type: 'localeString', title: 'Organizations' },
    { name: 'keyProjectsTitle', type: 'localeString', title: 'Key Projects Title' },
    { name: 'keyProjects', type: 'array', title: 'Key Projects', of: [{ type: 'object', fields: [
      { name: 'description', type: 'localeText', title: 'Description' }
    ] }] },
    { name: 'joinOurMission', type: 'localeString', title: 'Join Our Mission' },
    { name: 'joinOurMissionDescription', type: 'localeText', title: 'Join Our Mission Description' },
    { name: 'visitSEA', type: 'localeString', title: 'Visit SEA' },
    { name: 'environmentalSustainability', type: 'localeString', title: 'Environmental Sustainability' },
    { name: 'internationalProjects', type: 'localeString', title: 'International Projects' },
    { name: 'communityDevelopment', type: 'localeString', title: 'Community Development' },
    { name: 'impact', type: 'localeText', title: 'Impact' },
    { name: 'organizationsList', type: 'array', title: 'Organizations List', of: [{ type: 'object', fields: [
      { name: 'description', type: 'localeText', title: 'Description' }
    ] }] },
    { name: 'projects', type: 'array', title: 'Projects', of: [{ type: 'object', fields: [
      { name: 'link', type: 'url', title: 'Link' },
      { name: 'description', type: 'localeText', title: 'Description' }
    ] }] },
    { name: 'learnMore', type: 'localeString', title: 'Learn More' }
  ]
}

// Conferences schema
export const conferences = {
  name: 'conferences',
  type: 'document',
  title: 'Conferences',
  fields: [
    { name: 'title', type: 'localeString', title: 'Title' },
    { name: 'subtitle', type: 'localeString', title: 'Subtitle' },
    { name: 'viewAllText', type: 'localeString', title: 'View All Text' },
    { name: 'featuredConferences', type: 'array', title: 'Featured Conferences', of: [{ type: 'object', fields: [
      { name: 'title', type: 'localeString', title: 'Title' },
      { name: 'date', type: 'localeString', title: 'Date' },
      { name: 'location', type: 'localeString', title: 'Location' },
      { name: 'description', type: 'localeText', title: 'Description' }
    ] }] },
    { name: 'allConferencesLink', type: 'localeString', title: 'All Conferences Link' }
  ]
}

// All Conferences schema
export const allConferences = {
  name: 'allConferences',
  type: 'document',
  title: 'All Conferences',
  fields: [
    { name: 'title', type: 'localeString', title: 'Title' },
    { name: 'subtitle', type: 'localeString', title: 'Subtitle' },
    { name: 'backToHome', type: 'localeString', title: 'Back To Home' },
    { name: 'featuredTitle', type: 'localeString', title: 'Featured Title' },
    { name: 'allTitle', type: 'localeString', title: 'All Title' },
    { name: 'attendees', type: 'localeString', title: 'Attendees' },
    { name: 'learnMore', type: 'localeString', title: 'Learn More' },
    { name: 'featuredConferences', type: 'array', title: 'Featured Conferences', of: [{ type: 'object', fields: [
      { name: 'title', type: 'localeString', title: 'Title' },
      { name: 'date', type: 'localeString', title: 'Date' },
      { name: 'location', type: 'localeString', title: 'Location' },
      { name: 'description', type: 'localeText', title: 'Description' }
    ] }] },
    { name: 'allConferences', type: 'array', title: 'All Conferences', of: [{ type: 'object', fields: [
      { name: 'title', type: 'localeString', title: 'Title' },
      { name: 'date', type: 'localeString', title: 'Date' },
      { name: 'location', type: 'localeString', title: 'Location' },
      { name: 'description', type: 'localeText', title: 'Description' }
    ] }] }
  ]
}

// Footer schema
export const footer = {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    { name: 'description', type: 'localeText', title: 'Description' },
    { name: 'services', type: 'localeString', title: 'Services' },
    { name: 'servicesList', type: 'array', title: 'Services List', of: [{ type: 'object', fields: [
      { name: 'en', type: 'string', title: 'English' },
      { name: 'it', type: 'string', title: 'Italian' }
    ] }] },
    { name: 'contacts', type: 'localeString', title: 'Contacts' },
    { name: 'location', type: 'localeString', title: 'Location' },
    { name: 'copyright', type: 'localeString', title: 'Copyright' }
  ]
}

export const schemaTypes = [
  navigation,
  hero,
  about,
  publicPolicy,
  outsourcedManagement,
  socialImpact,
  conferences,
  allConferences,
  footer,
  localeString,
  localeText
];