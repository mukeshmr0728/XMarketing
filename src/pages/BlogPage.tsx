import { BookOpen } from 'lucide-react';

export default function BlogPage() {

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Insights, tips, and strategies to help your business grow in the digital world
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <BookOpen className="w-24 h-24 mx-auto mb-6 text-gray-300" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-600">We're working on bringing you valuable insights and content. Check back soon!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
