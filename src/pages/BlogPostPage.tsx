import { ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  slug: string;
}

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white pt-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
      <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
      <a href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
        <ArrowLeft size={20} />
        Back to Blog
      </a>
    </div>
  );
}
