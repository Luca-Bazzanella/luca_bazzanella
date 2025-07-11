
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-3xl sm:text-3xl font-serif font-semibold text-slate-900 mb-6 text-balance">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luca-blue-600 to-luca-earth-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto font-light leading-relaxed text-balance">
            Ready to transform your business? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-8">
              Let's Connect
            </h3>
            <p className="text-slate-600 font-light mb-8 leading-relaxed">
              Whether you need strategic consulting, want to organize a conference, or explore partnership opportunities, I'm here to help you achieve your goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-luca-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-luca-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p className="text-slate-600">luca@example.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-luca-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-luca-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Phone</p>
                  <p className="text-slate-600">+39 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-luca-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-luca-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Location</p>
                  <p className="text-slate-600">Trento, Italy</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="glass-effect border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-serif font-semibold text-slate-900">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
