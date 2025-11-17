import { Zap, Clock, TrendingUp, CheckCircle, ArrowRight, MessageCircle, Database, Workflow } from 'lucide-react';

interface AIAutomationPageProps {
  onNavigate: (page: string) => void;
}

export default function AIAutomationPage({ onNavigate }: AIAutomationPageProps) {
  const painPoints = [
    'Too much manual work eating up your time',
    'Slow or inconsistent follow-up with leads',
    'No CRM or centralized system',
    'Repetitive tasks slowing down growth',
  ];

  const solutions = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Automation',
      description: 'Auto-respond to inquiries, send updates, and nurture leads on WhatsApp'
    },
    {
      icon: Database,
      title: 'CRM Integrations',
      description: 'Connect all your tools: Google Sheets, HubSpot, Salesforce, and more'
    },
    {
      icon: Workflow,
      title: 'Lead Routing',
      description: 'Automatically assign leads to the right team members instantly'
    },
    {
      icon: Zap,
      title: 'AI Chatbots',
      description: 'Intelligent bots that qualify leads and answer customer questions 24/7'
    },
    {
      icon: Clock,
      title: 'Task Automation',
      description: 'Automate data entry, scheduling, reporting, and more with n8n & Zapier'
    },
    {
      icon: TrendingUp,
      title: 'Custom Workflows',
      description: 'Build tailored automation systems for your unique business needs'
    },
  ];

  const deliverables = [
    'Complete workflow mapping and analysis',
    'Full automation system setup and configuration',
    'Comprehensive testing and quality assurance',
    'Detailed documentation and training',
    '30 days of dedicated support and optimization',
  ];

  const packages = [
    {
      name: 'Basic Automation',
      price: '₹9,999',
      description: 'Perfect for simple workflows',
      features: [
        'Up to 3 automation workflows',
        'Basic integrations',
        'WhatsApp or Email automation',
        'Setup & testing',
        '15 days support',
      ]
    },
    {
      name: 'Advanced Automation',
      price: '₹19,999',
      description: 'For growing businesses',
      features: [
        'Up to 8 automation workflows',
        'CRM integrations',
        'Multi-channel automation',
        'AI chatbot setup',
        'Custom workflows',
        '30 days support',
      ],
      popular: true
    },
    {
      name: 'Full Business Automation',
      price: '₹39,999+',
      description: 'Complete automation suite',
      features: [
        'Unlimited workflows',
        'Advanced CRM & tool integrations',
        'Custom AI solutions',
        'Priority support',
        'Dedicated automation strategist',
        '60 days support',
      ]
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="w-12 h-12" />
              <span className="text-xl font-semibold">AI Automation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build Smart Workflows.<br />
              Save Time. Scale Faster.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Stop doing repetitive tasks manually. Automate your business operations with intelligent systems that work 24/7.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Book Automation Blueprint Call</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Are These Problems Slowing You Down?</h2>
              <div className="space-y-4">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-red-50 p-4 rounded-lg">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-lg text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6 text-green-700">We Have the Solution</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our AI automation systems eliminate bottlenecks, streamline your operations, and free up your team to focus on growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-lg font-semibold">Save 10+ hours per week</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-lg font-semibold">Faster lead response times</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-lg font-semibold">Zero manual errors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Automate</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive automation solutions for modern businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <solution.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What You Get</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete automation implementation from start to finish
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white border-2 border-blue-200 rounded-2xl p-8">
            <div className="space-y-4">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              One-time setup with optional monthly maintenance
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
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Monthly Maintenance Available: ₹1,999 - ₹9,999</p>
            <p className="text-sm text-gray-400">Keep your automations running smoothly with updates and support</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a free consultation to discuss your automation needs
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Book Automation Blueprint Call</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
