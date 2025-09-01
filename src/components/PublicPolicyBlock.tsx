import ContactForm from '@/components/ContactForm';

const PublicPolicyBlock = ({ content, locale, contact }) => (
  <div className="p-0 md:p-8 flex flex-col h-full w-full justify-start">
    <h3 className="text-2xl font-bold text-slate-900 mb-4">
      {content?.heroTitle?.[locale] || content?.heroTitle || 'Public Policy'}
    </h3>
    <p className="text-lg text-slate-700 leading-relaxed text-justify mb-6">
      {content?.heroDescription?.[locale] || content?.heroDescription || ''}
    </p>
      <ContactForm locale={locale} buttonLabel="click here" formStrings={contact} className="w-full text-left" />
  </div>
);

export default PublicPolicyBlock;
