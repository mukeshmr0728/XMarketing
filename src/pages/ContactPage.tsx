import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    'AI Automation',
    'Meta Ads',
    'Google Ads',
    'SEO Services',
    'Website Design',
    'Full Marketing Package',
    'Other',
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Your Growth Strategy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Ready to take your business to the next level? Get in touch and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form and we'll get back to you within 24 hours. Or reach out directly through our contact information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:mukeshmr0728@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      mukeshmr0728@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a href="tel:+918778097615" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +91 8778097615
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-gray-600">Chennai, tamilnadu India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>We'll review your inquiry within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Schedule a free strategy call to discuss your goals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Receive a custom proposal tailored to your needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Start seeing results within weeks, not months</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

                {submitStatus === 'success' && (
                  <div className="mb-6 bg-green-50 border-2 border-green-500 text-green-700 p-4 rounded-lg flex items-center space-x-3">
                    <CheckCircle size={24} />
                    <div>
                      <p className="font-semibold">Success!</p>
                      <p className="text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 bg-red-50 border-2 border-red-500 text-red-700 p-4 rounded-lg">
                    <p className="font-semibold">Oops! Something went wrong.</p>
                    <p className="text-sm">Please try again or email us directly.</p>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your business and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
