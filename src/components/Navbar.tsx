import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services', submenu: [
      { name: 'AI Automation', path: 'ai-automation' },
      { name: 'Meta Ads', path: 'meta-ads' },
      { name: 'Google Ads', path: 'google-ads' },
      { name: 'SEO Services', path: 'seo' },
      { name: 'Website Design', path: 'website-design' },
    ]},
    { name: 'Blog', path: 'blog' },
    { name: 'Pricing', path: 'pricing' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-black text-white z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavigate('home')}
            className="text-2xl font-bold hover:text-blue-400 transition-colors"
          >
            XMarketing
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.submenu ? (
                <div key={item.name} className="relative group">
                  <button className="hover:text-blue-400 transition-colors font-semibold">
                    {item.name}
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.path}
                        onClick={() => handleNavigate(subItem.path)}
                        className="block w-full text-left px-4 py-3 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`hover:text-blue-400 transition-colors font-semibold ${
                    currentPage === item.path ? 'text-blue-400' : ''
                  }`}
                >
                  {item.name}
                </button>
              )
            ))}
            <button
              onClick={() => handleNavigate('contact')}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Book a Call
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              item.submenu ? (
                <div key={item.name}>
                  <div className="font-semibold text-gray-400 mb-2">{item.name}</div>
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.path}
                      onClick={() => handleNavigate(subItem.path)}
                      className="block w-full text-left pl-4 py-2 hover:text-blue-400 transition-colors"
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              ) : (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors font-semibold"
                >
                  {item.name}
                </button>
              )
            ))}
            <button
              onClick={() => handleNavigate('contact')}
              className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition-colors mt-4"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
