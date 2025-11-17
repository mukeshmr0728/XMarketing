import { Search, Target, BarChart3, CheckCircle, ArrowRight, Zap, TrendingUp } from 'lucide-react';

interface GoogleAdsPageProps {
  onNavigate: (page: string) => void;
}

export default function GoogleAdsPage({ onNavigate }: GoogleAdsPageProps) {
  const services = [
    {
      icon: Search,
      title: 'Search Ads',
      description: 'Capture high-intent customers actively searching for your products'
    },
    {
      icon: Target,
      title: 'Display Ads',
      description: 'Build brand awareness across Google\'s vast display network'
    },
    {
      icon: Zap,
      title: 'Performance Max',
      description: 'Automated campaigns across all Google channels for maximum reach'
    },
    {
      icon: BarChart3,
      title: 'Conversion Tracking',
      description: 'Comprehensive tracking setup to measure every conversion accurately'
    },
    {
      icon: TrendingUp,
      title: 'Weekly Optimization',
      description: 'Continuous bid adjustments and keyword refinement for better ROI'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Reporting',
      description: 'Detailed performance reports with actionable recommendations'
    },
  ];

  const packages = [
    {
      name: 'Setup Fee',
      price: '₹6,999 - ₹9,999',
      description: 'One-time campaign setup',
      features: [
        'Account audit & setup',
        'Conversion tracking setup',
        'Keyword research',
        'Initial campaign structure',
        'Landing page review',
      ]
    },
    {
      name: 'Starter',
      price: '₹11,999/month',
      description: 'For small businesses',
      features: [
        '1-2 campaigns',
        'Search ads focus',
        'Weekly optimization',
        'Monthly reporting',
        'Email support',
      ]
    },
    {
      name: 'Growth',
      price: '₹17,999/month',
      description: 'For growing brands',
      features: [
        '3-4 campaigns',
        'Search + Display ads',
        'Advanced targeting',
        'Bi-weekly reporting',
        'Performance Max setup',
        'Priority support',
      ],
      popular: true
    },
    {
      name: 'Scale',
      price: '₹24,999+/month',
      description: 'For established businesses',
      features: [
        'Unlimited campaigns',
        'Multi-channel strategy',
        'Shopping ads included',
        'Weekly reporting',
        'Advanced optimization',
        'Dedicated account manager',
      ]
    },
  ];

  const benefits = [
    {
      title: 'High-Intent Traffic',
      description: 'Reach customers who are actively searching for solutions you offer'
    },
    {
      title: 'Instant Results',
      description: 'Start generating leads and sales as soon as your campaigns go live'
    },
    {
      title: 'Full Funnel Coverage',
      description: 'From awareness to conversion, reach customers at every stage'
    },
    {
      title: 'Measurable ROI',
      description: 'Track every click, conversion, and rupee spent with precision'
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <Search className="w-12 h-12" />
              <span className="text-xl font-semibold">Google Ads Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              High-Intent Leads<br />
              Powered by Google
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Capture customers at the exact moment they're searching for what you offer with expertly managed Google Ads campaigns.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Start Google Ads</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Google Ads?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The most powerful platform for reaching customers with purchase intent
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border-2 border-green-200"
              >
                <h3 className="text-2xl font-bold mb-3 text-green-700">{benefit.title}</h3>
                <p className="text-lg text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete Google Ads management from setup to optimization
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group"
              >
                <service.icon className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional Google Ads management at every budget
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-green-600 to-green-800 text-white ring-4 ring-green-400 transform scale-105'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                <p className={`mb-6 ${pkg.popular ? 'text-green-100' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle
                        className={`flex-shrink-0 mt-1 ${
                          pkg.popular ? 'text-yellow-400' : 'text-green-500'
                        }`}
                        size={20}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-green-600 hover:bg-gray-100'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Makes Us Different?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We don't just run ads—we build strategic campaigns that align with your business goals and deliver measurable ROI.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Google Certified Experts</h3>
                    <p className="text-gray-300">Certified professionals managing your campaigns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Advanced Tracking Setup</h3>
                    <p className="text-gray-300">Comprehensive conversion tracking for accurate measurement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Continuous Optimization</h3>
                    <p className="text-gray-300">Weekly bid adjustments and performance improvements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Transparent Communication</h3>
                    <p className="text-gray-300">Regular updates and clear performance reports</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-800 p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-xl text-green-100 mb-8">
                Book a free consultation to discuss your Google Ads strategy and how we can help you capture more high-intent leads.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2 w-full justify-center"
              >
                <span>Start Google Ads</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
