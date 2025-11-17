import { Zap, Target, TrendingUp, Users, Clock, Shield, ArrowRight, CheckCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    { name: 'AI Automation', icon: Zap, path: 'ai-automation', description: 'Smart workflows that save time and scale your business' },
    { name: 'Meta Ads', icon: Target, path: 'meta-ads', description: 'High-quality traffic and conversions from Facebook & Instagram' },
    { name: 'Google Ads', icon: TrendingUp, path: 'google-ads', description: 'Capture high-intent leads with search and display campaigns' },
    { name: 'SEO Services', icon: Users, path: 'seo', description: 'Rank higher and build long-term organic visibility' },
    { name: 'Website Design', icon: Clock, path: 'website-design', description: 'Modern, responsive, and conversion-optimized websites' },
  ];

  const benefits = [
    { icon: Target, title: 'Data-Driven Strategy', description: 'Every decision backed by analytics and insights' },
    { icon: Zap, title: 'AI-Powered Systems', description: 'Leverage automation to work smarter, not harder' },
    { icon: Shield, title: 'Transparent Reporting', description: 'Clear metrics and regular performance updates' },
    { icon: Users, title: 'Dedicated Support', description: 'Your own account manager for seamless execution' },
    { icon: Clock, title: 'Fast Execution', description: 'Launch campaigns and systems in days, not months' },
    { icon: CheckCircle, title: 'Full-Stack Marketing', description: 'Automation, marketing, and tech under one roof' },
  ];

  const caseStudies = [
    {
      industry: 'E-Commerce',
      result: '4.2x ROAS',
      description: 'Scaled an online store from ₹50K to ₹2L+ monthly revenue',
      metric: 'Return on Ad Spend'
    },
    {
      industry: 'Real Estate',
      result: '40% Higher Conversions',
      description: 'Optimized landing pages and ad campaigns for property leads',
      metric: 'Conversion Rate Increase'
    },
    {
      industry: 'Coaching Brand',
      result: '200+ Leads/Month',
      description: 'Built automated funnel with WhatsApp integration',
      metric: 'Monthly Lead Generation'
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-green-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Smart Marketing<br />
              <span className="text-blue-400">Powered by AI</span><br />
              <span className="text-green-400">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              We help modern businesses scale with high-performance ads, AI automation systems, and conversion-driven websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Book Strategy Call</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to grow your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 text-left group"
              >
                <service.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-blue-500 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technology, marketing, and automation to deliver real results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all group"
              >
                <benefit.icon className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105"
              >
                <div className="text-sm text-blue-400 font-semibold mb-2">{study.industry}</div>
                <h3 className="text-3xl font-bold mb-4 text-green-400">{study.result}</h3>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <div className="text-sm text-gray-400">{study.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's build a custom growth strategy for your brand
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Book a Call</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
