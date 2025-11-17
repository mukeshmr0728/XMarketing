import { Target, Users, BarChart3, CheckCircle, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

interface MetaAdsPageProps {
  onNavigate: (page: string) => void;
}

export default function MetaAdsPage({ onNavigate }: MetaAdsPageProps) {
  const services = [
    {
      icon: Sparkles,
      title: 'Campaign Setup',
      description: 'Complete account structure with pixel installation and conversion tracking'
    },
    {
      icon: Target,
      title: 'Creative Strategy',
      description: 'High-converting ad copy and creative recommendations'
    },
    {
      icon: Users,
      title: 'Audience Research',
      description: 'Deep targeting analysis to reach your ideal customers'
    },
    {
      icon: TrendingUp,
      title: 'Retargeting',
      description: 'Strategic retargeting campaigns to maximize conversions'
    },
    {
      icon: BarChart3,
      title: 'A/B Testing',
      description: 'Continuous testing to optimize performance and lower costs'
    },
    {
      icon: CheckCircle,
      title: 'Weekly Reporting',
      description: 'Transparent reporting with actionable insights and recommendations'
    },
  ];

  const packages = [
    {
      name: 'Setup Fee',
      price: '₹4,999 - ₹7,999',
      description: 'One-time campaign setup',
      features: [
        'Account audit & setup',
        'Pixel installation',
        'Conversion tracking',
        'Initial campaign structure',
        'Audience research',
      ]
    },
    {
      name: 'Starter',
      price: '₹9,999/month',
      description: 'For small businesses',
      features: [
        '1-2 campaigns',
        'Basic targeting',
        'Weekly optimization',
        'Monthly reporting',
        'Email support',
      ]
    },
    {
      name: 'Growth',
      price: '₹14,999/month',
      description: 'For growing brands',
      features: [
        '3-4 campaigns',
        'Advanced targeting',
        'Retargeting campaigns',
        'Bi-weekly reporting',
        'Creative recommendations',
        'Priority support',
      ],
      popular: true
    },
    {
      name: 'Scale',
      price: '₹19,999+/month',
      description: 'For established businesses',
      features: [
        'Unlimited campaigns',
        'Full funnel strategy',
        'Advanced retargeting',
        'Weekly reporting',
        'Custom creatives',
        'Dedicated account manager',
      ]
    },
  ];

  const results = [
    { metric: '4.2x', label: 'Average ROAS' },
    { metric: '40%', label: 'Lower Cost Per Lead' },
    { metric: '3x', label: 'Higher Conversion Rate' },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-12 h-12" />
              <span className="text-xl font-semibold">Meta Ads Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Drive High-Quality Traffic<br />
              & Conversions with Meta Ads
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Reach your ideal customers on Facebook and Instagram with data-driven campaigns that deliver real results.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Launch My Campaign</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-gray-300">Real metrics from our Meta Ads campaigns</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">{result.metric}</div>
                <div className="text-xl text-gray-300">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete Meta Ads management from setup to optimization
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-blue-500 p-8 rounded-xl transition-all group"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible packages for every business size and budget
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white ring-4 ring-blue-400 transform scale-105'
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
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                <p className={`mb-6 ${pkg.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle
                        className={`flex-shrink-0 mt-1 ${
                          pkg.popular ? 'text-green-400' : 'text-green-500'
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

      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Our Meta Ads Service?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-gray-900 p-4 rounded-lg">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Certified Experts</h3>
                    <p className="text-gray-300">Meta Blueprint certified professionals managing your campaigns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-gray-900 p-4 rounded-lg">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Data-Driven Decisions</h3>
                    <p className="text-gray-300">Every optimization backed by real performance data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-gray-900 p-4 rounded-lg">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Transparent Reporting</h3>
                    <p className="text-gray-300">Clear metrics and insights you can understand</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-gray-900 p-4 rounded-lg">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Continuous Optimization</h3>
                    <p className="text-gray-300">Constant testing and refinement for better results</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6">Ready to Scale?</h3>
              <p className="text-xl text-blue-100 mb-8">
                Book a free strategy call to discuss your goals and how we can help you achieve them with Meta Ads.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2 w-full justify-center"
              >
                <span>Launch My Campaign</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
