import React from 'react';

const VisionSection = ({ content, locale }) => (
  <section id="vision" className="py-2 bg-white">
  <div className="lg:max-w-7xl md:max-w-2xl md:mx-auto sm:px-4 lg:ml-64 px-0 md:px-4 sm:px-6 text-left">
      <p className="text-2xl text-slate-700 px-4 md:pl-0 leading-relaxed font-medium text-center">
        {content?.text?.[locale] || ''}
      </p>
      <img src="./signature.png" width="270px" alt="Signature" className="mx-auto" />
    </div>
  </section>
);

export default VisionSection;
