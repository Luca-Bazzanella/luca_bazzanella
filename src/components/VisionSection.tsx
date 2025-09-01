import React from 'react';

const VisionSection = ({ content, locale }) => (
  <section id="vision" className="py-16 bg-white">
  <div className="lg:max-w-7xl md:max-w-2xl md:mx-auto sm:px-4 lg:ml-64 px-0 md:px-4 sm:px-6 text-left">
      <h2 className="text-3xl font-bold pl-4 text-slate-800 mb-10 pl-2 lg:pl-0">{content?.title?.[locale] || ''}</h2>
      <p className="text-2xl text-slate-700 p-4 pt-0 md:pl-0 leading-relaxed font-light text-justify">
        {content?.text?.[locale] || ''}
      </p>
      <img src="./signature.png" width="270px" alt="Signature" className="mt-8 mx-auto" />
    </div>
  </section>
);

export default VisionSection;
