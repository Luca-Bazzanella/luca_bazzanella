
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
  title: 'Header',
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
  title: 'Home Page Description, Links, Photo',
  fields: [
    { name: 'name', type: 'localeString', title: 'Name' },
    { name: 'images', type: 'array', title: 'Images', of: [
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
  title: 'Key Activities And Image Carousel',
  fields: [
    { name: 'title', type: 'localeString', title: 'Title' },
    { name: 'name', type: 'localeString', title: 'Name' },
    { name: 'keyActivities', type: 'localeString', title: 'Key Activities' },
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
    { name: 'role', type: 'localeString', title: 'Role' },
    { name: 'impact', type: 'localeString', title: 'Impact' },
    { name: 'content', type: 'object', title: 'Content', fields: [
      { name: 'intro', type: 'localeText', title: 'Intro' },
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
    { name: 'backToHome', type: 'localeString', title: 'Back To Home' },
    { name: 'heroDescription', type: 'localeText', title: 'Hero Description' },
    { name: 'impact', type: 'localeText', title: 'Impact' },
    { name: 'projects', type: 'array', title: 'Projects', of: [{ type: 'object', fields: [
      { name: 'link', type: 'url', title: 'Link' },
      { name: 'description', type: 'localeText', title: 'Description' }
    ] }] }
  ]
}

// All Conferences schema
export const allConferences = {
  name: 'allConferences',
  type: 'document',
  fields: [
    { name: 'backToHome', type: 'localeString', title: 'Back To Home' },
    { name: 'attendees', type: 'localeString', title: 'Attendees' },
    { name: 'learnMore', type: 'localeString', title: 'Learn More' },
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

export const contactForm = {
  name: 'contactForm',
  type: 'document',
  title: 'Contact Form',
  fields: [
    { name: 'contactBanner', type: 'localeString', title: 'Contact Banner' },
  { name: 'clickHere', type: 'localeString', title: 'Click Here Link' },
    { name: 'thankYou', type: 'localeString', title: 'Thank You Message' },
    { name: 'firstName', type: 'localeString', title: 'First Name' },
    { name: 'lastName', type: 'localeString', title: 'Last Name' },
    { name: 'email', type: 'localeString', title: 'Email' },
    { name: 'message', type: 'localeString', title: 'Message' },
    { name: 'submitting', type: 'localeString', title: 'Submitting' },
    { name: 'submit', type: 'localeString', title: 'Submit Button' }
  ]
};

export const schemaTypes = [
  navigation,
  hero,
  about,
  publicPolicy,
  outsourcedManagement,
  socialImpact,
  allConferences,
  footer,
  contactForm,
  localeString,
  localeText
];