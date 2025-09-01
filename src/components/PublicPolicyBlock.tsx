import ContactForm from '@/components/ContactForm';

const PublicPolicyBlock = ({ content, locale, contact }) => (
  <div className="p-0 md:pt-8 flex flex-col h-full w-full justify-start">
    <h3 className="text-xl font-bold text-slate-800 mb-4">
      {content?.heroTitle?.[locale] || content?.heroTitle || 'Public Policy'}
    </h3>
    <p className="text-lg text-slate-700 leading-relaxed font-light text-justify mb-6">
      {content?.heroDescription?.[locale] || content?.heroDescription || ''}
    </p>
      <ContactForm locale={locale} buttonLabel="click here" formStrings={contact} className="w-full text-left" />
  </div>
);

export default PublicPolicyBlock;
