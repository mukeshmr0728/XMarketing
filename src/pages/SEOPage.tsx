import { TrendingUp, Search, FileText, Link, CheckCircle, ArrowRight, BarChart3 } from 'lucide-react';

interface SEOPageProps {
  onNavigate: (page: string) => void;
}

export default function SEOPage({ onNavigate }: SEOPageProps) {
  const services = [
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'In-depth analysis to find high-value keywords your customers are searching for'
    },
    {
      icon: BarChart3,
      title: 'Technical SEO',
      description: 'Fix technical issues, improve site speed, and ensure proper indexing'
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      description: 'Optimize content, meta tags, and internal linking for better rankings'
    },
    {
      icon: Link,
      title: 'Link Building',
      description: 'Acquire high-quality backlinks from authoritative websites'
    },
    {
      icon: TrendingUp,
      title: 'Content Strategy',
      description: 'Create SEO-optimized content that ranks and converts'
    },
    {
      icon: CheckCircle,
      title: 'Monthly Reporting',
      description: 'Track rankings, traffic, and conversions with detailed reports'
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹7,999/month',
      description: 'For new websites',
      features: [
        'Up to 10 target keywords',
        'Basic technical SEO audit',
        'On-page optimization',
        '2 blog posts per month',
        'Monthly reporting',
        'Email support',
      ]
    },
    {
      name: 'Growth',
      price: '₹12,999/month',
      description: 'For growing businesses',
      features: [
        'Up to 25 target keywords',
        'Complete technical SEO',
        'Advanced on-page optimization',
        'Link building (5 per month)',
        '4 blog posts per month',
        'Bi-weekly reporting',
        'Priority support',
      ],
      popular: true
    },
    {
      name: 'Authority',
      price: '₹19,999/month',
      description: 'For established brands',
      features: [
        'Unlimited keywords',
        'Enterprise technical SEO',
        'Comprehensive content strategy',
        'Aggressive link building',
        '8 blog posts per month',
        'Weekly reporting',
        'Dedicated SEO specialist',
      ]
    },
  ];

  const benefits = [
    {
      title: 'Long-Term Growth',
      description: 'SEO provides sustainable traffic that compounds over time'
    },
    {
      title: 'Cost-Effective',
      description: 'Lower cost per lead compared to paid advertising in the long run'
    },
    {
      title: 'Build Authority',
      description: 'Establish your brand as an industry leader in search results'
    },
    {
      title: 'Qualified Traffic',
      description: 'Attract visitors who are actively looking for your solutions'
    },
  ];

  const process = [
    {
      step: '1',
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your current SEO performance and opportunities'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Custom roadmap based on your goals, competition, and market'
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Execute technical fixes, content optimization, and link building'
    },
    {
      step: '4',
      title: 'Monitoring & Optimization',
      description: 'Track progress and continuously refine strategy for better results'
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="w-12 h-12" />
              <span className="text-xl font-semibold">SEO Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Rank Higher.<br />
              Grow Organically.<br />
              Build Long-Term Visibility.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Dominate search results and attract qualified customers with strategic SEO that delivers sustainable growth.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Improve My SEO</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Invest in SEO?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Organic search is the foundation of digital marketing success
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl border-2 border-blue-200"
              >
                <h3 className="text-2xl font-bold mb-3 text-blue-700">{benefit.title}</h3>
                <p className="text-lg text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our SEO Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive SEO solutions for every aspect of your online presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven approach to SEO success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Monthly SEO packages designed for results
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
                <div className="text-4xl font-bold mb-2">{pkg.price}</div>
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

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's build an SEO strategy that drives sustainable, long-term growth for your business
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Improve My SEO</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
