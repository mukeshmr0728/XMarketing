import { Target, Lightbulb, Shield, Users, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'We embrace cutting-edge technology and creative solutions' },
    { icon: Shield, title: 'Transparency', description: 'Clear communication and honest reporting at every step' },
    { icon: Target, title: 'Efficiency', description: 'Streamlined processes that deliver results faster' },
    { icon: Users, title: 'Simplicity', description: 'Complex marketing made simple and accessible' },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We dive deep into your business, goals, and target audience to understand your unique needs'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Create a custom roadmap combining automation, advertising, and optimization tactics'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Launch campaigns, build systems, and implement solutions with precision and speed'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously test, analyze, and refine for maximum performance and ROI'
    },
    {
      step: '05',
      title: 'Scale',
      description: 'Expand successful strategies and grow your business sustainably'
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              XMarketing blends intelligent automation with high-performance digital marketing to help brands grow faster. We're not just another agency—we're your growth partner, combining strategy, technology, and execution under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                To empower businesses with smarter systems, automation, and modern marketing strategies that drive real growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that marketing should be measurable, scalable, and powered by technology. By combining AI automation with proven advertising strategies, we help businesses work smarter and achieve more with less effort.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-6">Why Choose XMarketing?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex-shrink-0 mt-1"></div>
                  <span className="text-lg">Full-stack marketing and automation expertise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex-shrink-0 mt-1"></div>
                  <span className="text-lg">Data-driven strategies with transparent reporting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex-shrink-0 mt-1"></div>
                  <span className="text-lg">Fast execution and dedicated support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex-shrink-0 mt-1"></div>
                  <span className="text-lg">Proven results across multiple industries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
              A proven methodology for delivering results
            </p>
          </div>
          <div className="space-y-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-blue-500 rounded-xl p-8 transition-all group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how we can help you achieve your business goals
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Get in Touch</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
