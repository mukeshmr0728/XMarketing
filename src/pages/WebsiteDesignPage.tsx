import { Layout, Smartphone, Zap, CheckCircle, ArrowRight, Palette, Code } from 'lucide-react';

interface WebsiteDesignPageProps {
  onNavigate: (page: string) => void;
}

export default function WebsiteDesignPage({ onNavigate }: WebsiteDesignPageProps) {
  const features = [
    {
      icon: Palette,
      title: 'Modern UI/UX Design',
      description: 'Beautiful, intuitive interfaces that engage visitors and drive conversions'
    },
    {
      icon: Zap,
      title: 'Speed Optimized',
      description: 'Lightning-fast load times for better user experience and SEO'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Perfect experience on every device, from mobile to desktop'
    },
    {
      icon: CheckCircle,
      title: 'SEO Ready',
      description: 'Built with search engine optimization best practices from day one'
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Maintainable, scalable code that stands the test of time'
    },
    {
      icon: Layout,
      title: 'CRM Integration',
      description: 'Connect with your automation tools and CRM systems seamlessly'
    },
  ];

  const packages = [
    {
      name: 'Landing Page',
      price: '₹9,999 - ₹14,999',
      description: 'Single high-converting page',
      features: [
        '1 custom landing page',
        'Mobile responsive design',
        'Speed optimization',
        'Contact form integration',
        'Basic SEO setup',
        '2 rounds of revisions',
        '7-day delivery',
      ]
    },
    {
      name: 'Business Website',
      price: '₹19,999 - ₹29,999',
      description: 'Complete business presence',
      features: [
        'Up to 7 pages',
        'Custom design',
        'CMS integration',
        'Advanced SEO',
        'Contact forms',
        'WhatsApp integration',
        '3 rounds of revisions',
        '14-day delivery',
      ],
      popular: true
    },
    {
      name: 'Advanced Website',
      price: '₹39,999 - ₹59,999',
      description: 'Full-featured platform',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'E-commerce capabilities',
        'Advanced integrations',
        'CRM & automation setup',
        'Blog/Content system',
        'Unlimited revisions',
        '21-day delivery',
      ]
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'Understand your goals, audience, and brand to create the perfect strategy'
    },
    {
      step: '2',
      title: 'Design & Prototype',
      description: 'Create stunning mockups and interactive prototypes for your approval'
    },
    {
      step: '3',
      title: 'Development',
      description: 'Build your website with clean code and best practices'
    },
    {
      step: '4',
      title: 'Testing & Launch',
      description: 'Thorough QA testing before launching your site to the world'
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <Layout className="w-12 h-12" />
              <span className="text-xl font-semibold">Website Design & Development</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Modern, Responsive &<br />
              Conversion-Driven<br />
              Websites
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Beautiful websites that not only look great but also drive results. Built for speed, optimized for conversions.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Build My Website</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What You Get</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Production-ready websites built with modern technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-blue-500 p-8 rounded-xl transition-all group"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to launch in 4 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Packages</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect package for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 ring-4 ring-blue-400 transform scale-105'
                    : 'bg-gray-900'
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-green-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                <p className="text-gray-300 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Our Web Design Service?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Conversion-Focused</h3>
                    <p className="text-gray-600">Every element designed to turn visitors into customers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Future-Proof Technology</h3>
                    <p className="text-gray-600">Built with modern frameworks that scale with your business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Ongoing Support</h3>
                    <p className="text-gray-600">We're here to help even after your site launches</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Marketing Integration</h3>
                    <p className="text-gray-600">Seamlessly connect with your CRM and automation tools</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Launch Your Site?</h3>
              <p className="text-xl text-blue-100 mb-8">
                Let's create a website that represents your brand and drives real business results.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2 w-full justify-center"
              >
                <span>Build My Website</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
