import contentEN from '@/data/content-en.json';
import contentIT from '@/data/content-it.json';
import { useState } from 'react';

interface ContactFormProps {
  buttonLabel?: string;
  locale?: string;
  formStrings?: any;
  hideBanner?: boolean;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ buttonLabel = 'click here', locale = 'it', formStrings, hideBanner }) => {
  const [showForm, setShowForm] = useState(hideBanner ? true : false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // If formStrings is provided from Sanity, use it, otherwise fallback to local JSON
  let strings = formStrings;
  if (!strings) {
    const content = locale === 'en' ? contentEN : contentIT;
    strings = content?.contactForm || {};
  }
  
  // Helper to get localized string from Sanity schema
  const getString = (key: string) => {
    if (strings && typeof strings[key] === 'object' && strings[key] !== null) {
      return strings[key][locale] || strings[key]['en'] || '';
    }
    return strings[key] || '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      description: formData.description,
    };
    const params = Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbwibloiiXA0A0u434xauW5JycyAO7FRgXK1mqr2_y0n4SUE3-jOyQaDVcIAVZy-D2KR/exec'); // Replace with your Google Script URL
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        setLoading(false);
        if (xhr.status === 200) {
          setSubmitted(true);
        } else {
          setError('Submission failed. Please try again.');
        }
      }
    };
    xhr.send(params);
  };

  return (
    <div className={hideBanner ? "" : "mt-6 p-3 border border-gray-200 rounded-2xl shadow-lg text-center bg-white flex flex-col justify-center items-center h-full"}>
      {!hideBanner && (
        <div className="text-lg font-medium text-gray-900">
          {getString('contactBanner') || 'To get in touch to know more about'}{' '}
          <button
            type="button"
            className="inline-block underline text-black hover:text-gray-700 font-semibold"
            onClick={() => setShowForm(!showForm)}
          >
            {buttonLabel}
          </button>
        </div>
      )}
      {showForm && (
        <div className={submitted ? `` : 'mx-auto max-w-md bg-white rounded-lg shadow-lg p-6 mt-6'}>
          {submitted ? (
            <div>{getString('thankYou') || 'Thank you for your submission!'}</div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 text-left">{getString('firstName') || 'First Name'}</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 text-left">{getString('lastName') || 'Last Name'}</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 text-left">{getString('email') || 'Email'}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-900 text-left">{getString('message') || 'Message'}</label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData?.description}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                ></textarea>
              </div>
              {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
              <button
                type="submit"
                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                disabled={loading}
              >
                {loading ? (getString('submitting') || 'Submitting...') : (getString('submit') || 'Submit')}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
