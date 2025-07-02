
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const ContactSection = () => {
  const { content } = useLanguage();

  const contactIcons = [Mail, Mail, Phone, MapPin];

  const contactInfo = content.contact.contactInfo.map((info, index) => ({
    ...info,
    icon: contactIcons[index],
    link: index < 2 ? `mailto:${info.value}` : index === 2 ? `tel:${info.value.replace(/\s/g, '')}` : null
  }));

  const handleBookMeeting = () => {
    const subject = encodeURIComponent('Meeting Request - Business Consultation');
    const body = encodeURIComponent(`Dear Luca,

I would like to schedule a business consultation meeting with you.

Please let me know your availability for the following options:
- Video call (Zoom/Teams/Meet)
- In-person meeting
- Phone call

I look forward to hearing from you.

Best regards`);
    
    const mailtoLink = `mailto:lucabazzanella.tn@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-luca-blue-900 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            {content.contact.title} <span className="bg-gradient-to-r from-luca-blue-400 to-luca-earth-400 bg-clip-text text-transparent">{content.contact.subtitle}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luca-blue-400 to-luca-earth-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {content.contact.description}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-white mb-8 text-center">
              {content.contact.info}
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-luca-blue-600 to-luca-earth-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400">{info.label}</div>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-white hover:text-luca-blue-400 transition-colors duration-200 break-words"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white break-words">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Card className="mt-8 bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {content.contact.bookConsultation}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">
                  {content.contact.consultationDescription}
                </p>
                <Button 
                  onClick={handleBookMeeting}
                  className="bg-luca-blue-600 hover:bg-luca-blue-700 text-white"
                >
                  {content.contact.bookMeeting}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
