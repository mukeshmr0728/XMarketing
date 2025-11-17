import { X, Calendar, User, Tag, Clock } from 'lucide-react';

interface BlogPreviewProps {
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  authorName: string;
  readingTime?: number;
  onClose: () => void;
}

export default function BlogPreview({
  title,
  excerpt,
  content,
  featuredImage,
  category,
  tags,
  authorName,
  readingTime,
  onClose
}: BlogPreviewProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full my-8">
        <div className="sticky top-0 bg-white border-b-2 border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-xl">
          <h2 className="text-2xl font-bold">Preview</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          {featuredImage && (
            <img
              src={featuredImage}
              alt={title}
              className="w-full h-96 object-cover rounded-xl mb-6"
            />
          )}

          <div className="mb-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {category}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4">{title || 'Untitled Post'}</h1>

          <div className="flex flex-wrap gap-4 text-gray-600 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{authorName || 'Anonymous'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            {readingTime && (
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{readingTime} min read</span>
              </div>
            )}
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {excerpt && (
            <div className="text-xl text-gray-700 mb-6 font-medium italic border-l-4 border-blue-600 pl-4">
              {excerpt}
            </div>
          )}

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content || '<p class="text-gray-400">No content yet...</p>' }}
          />
        </div>

        <div className="border-t-2 border-gray-200 px-6 py-4 bg-gray-50 rounded-b-xl">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
