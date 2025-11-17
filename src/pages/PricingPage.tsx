import { CheckCircle, ArrowRight, Zap, Target, TrendingUp, Layout, Search } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export default function PricingPage({ onNavigate }: PricingPageProps) {
  const services = [
    {
      icon: Target,
      name: 'Meta Ads',
      setup: '₹4,999 - ₹7,999',
      monthly: '₹9,999 - ₹19,999+',
      path: 'meta-ads'
    },
    {
      icon: Search,
      name: 'Google Ads',
      setup: '₹6,999 - ₹9,999',
      monthly: '₹11,999 - ₹24,999',
      path: 'google-ads'
    },
    {
      icon: Zap,
      name: 'AI Automation',
      setup: '₹9,999 - ₹39,999+',
      monthly: '₹1,999 - ₹9,999 (maintenance)',
      path: 'ai-automation'
    },
    {
      icon: TrendingUp,
      name: 'SEO',
      setup: 'Included',
      monthly: '₹7,999 - ₹19,999',
      path: 'seo'
    },
    {
      icon: Layout,
      name: 'Website Design',
      setup: '₹9,999 - ₹59,999',
      monthly: 'Optional maintenance',
      path: 'website-design'
    },
  ];

  const packages = [
    {
      name: 'Starter Package',
      price: '₹19,999/month',
      description: 'Perfect for small businesses starting their digital journey',
      features: [
        'Meta Ads OR Google Ads management',
        'Basic campaign optimization',
        'Monthly reporting',
        'Email support',
        'Setup included',
      ],
      services: ['Ads Management']
    },
    {
      name: 'Growth Package',
      price: '₹29,999/month',
      description: 'For businesses ready to scale their marketing',
      features: [
        'Meta Ads + Google Ads',
        'Advanced targeting & optimization',
        'Bi-weekly reporting',
        'Priority support',
        'A/B testing',
        'Retargeting campaigns',
      ],
      services: ['Multi-Channel Ads'],
      popular: true
    },
    {
      name: 'Growth + Automation',
      price: '₹39,999/month',
      description: 'Complete growth stack with automation',
      features: [
        'Everything in Growth package',
        'AI automation workflows',
        'CRM integration',
        'Lead routing & qualification',
        'WhatsApp automation',
        'Dedicated account manager',
      ],
      services: ['Ads + Automation']
    },
    {
      name: 'Full Stack Marketing',
      price: '₹59,999+/month',
      description: 'Enterprise solution for maximum growth',
      features: [
        'All marketing channels',
        'Complete automation suite',
        'SEO services included',
        'Custom website features',
        'Weekly strategy calls',
        'Dedicated team',
        'Priority support 24/7',
      ],
      services: ['Everything']
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Flexible packages and individual services to fit your budget and goals. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Individual Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose specific services based on your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="bg-white border-2 border-gray-200 hover:border-blue-500 p-8 rounded-xl transition-all text-left group"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Setup:</span>
                    <span className="font-semibold">{service.setup}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly:</span>
                    <span className="font-semibold">{service.monthly}</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>View Details</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Marketing Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions that combine multiple services for maximum impact
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white ring-4 ring-blue-400'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-green-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                  <p className={`text-sm ${pkg.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {pkg.description}
                  </p>
                </div>
                <div className="mb-6">
                  <div className={`text-sm font-semibold mb-2 ${pkg.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                    INCLUDES:
                  </div>
                  {pkg.services.map((service, i) => (
                    <div
                      key={i}
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2 ${
                        pkg.popular ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {service}
                    </div>
                  ))}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle
                        className={`flex-shrink-0 mt-1 ${
                          pkg.popular ? 'text-green-400' : 'text-green-500'
                        }`}
                        size={20}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-4 rounded-lg text-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
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
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-2xl border-2 border-green-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure What You Need?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Book a free consultation and we'll help you choose the perfect solution for your business goals and budget.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold mb-2 text-xl">Do you require long-term contracts?</h3>
              <p className="text-gray-300">
                No, we work on a month-to-month basis. You can cancel anytime with 30 days notice.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold mb-2 text-xl">What's included in the setup fee?</h3>
              <p className="text-gray-300">
                Account audit, campaign structure, tracking setup, audience research, and initial optimization.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold mb-2 text-xl">Can I customize a package?</h3>
              <p className="text-gray-300">
                Absolutely! We can create a custom solution based on your specific needs and budget.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold mb-2 text-xl">What if I need additional services?</h3>
              <p className="text-gray-300">
                You can add any individual service to your existing package at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
