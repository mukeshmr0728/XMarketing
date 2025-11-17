import { Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">XMarketing</h3>
            <p className="text-gray-400 mb-4">Automate. Market. Scale.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => onNavigate('ai-automation')} className="hover:text-white transition-colors">
                  AI Automation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('meta-ads')} className="hover:text-white transition-colors">
                  Meta Ads
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('google-ads')} className="hover:text-white transition-colors">
                  Google Ads
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('seo')} className="hover:text-white transition-colors">
                  SEO Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('website-design')} className="hover:text-white transition-colors">
                  Website Design
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:hello@xmarketing.com" className="hover:text-white transition-colors">
                  hello@xmarketing.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 XMarketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
