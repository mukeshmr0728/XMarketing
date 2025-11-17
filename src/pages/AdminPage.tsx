import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, Save, X, Users, Shield, FileText } from 'lucide-react';
import { supabase } from '../lib/supabase';
import RichTextEditor from '../components/RichTextEditor';
import ImageUpload from '../components/ImageUpload';
import BlogPreview from '../components/BlogPreview';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  author_name: string;
  published_at: string | null;
  created_at: string;
  meta_title?: string | null;
  meta_description?: string | null;
  keywords?: string[];
  reading_time?: number | null;
  view_count?: number;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'editor' | 'viewer';
  created_at: string;
}

interface AdminPageProps {
  onLogout: () => void;
}

export default function AdminPage({ onLogout }: AdminPageProps) {
  const [activeTab, setActiveTab] = useState<'posts' | 'users'>('posts');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentUserRole, setCurrentUserRole] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    category: '',
    tags: '',
    status: 'draft' as 'draft' | 'published',
    author_name: '',
    meta_title: '',
    meta_description: '',
    keywords: '',
    reading_time: '',
  });
  const [userFormData, setUserFormData] = useState({
    email: '',
    password: '',
    full_name: '',
    role: 'viewer' as 'admin' | 'editor' | 'viewer',
  });

  useEffect(() => {
    fetchCurrentUserRole();
    fetchPosts();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (activeTab === 'users' && currentUserRole === 'admin') {
      fetchUsers();
    }
  }, [activeTab, currentUserRole]);

  const fetchCurrentUserRole = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('id', user.id)
        .maybeSingle();

      if (error) throw error;
      setCurrentUserRole(data?.role || '');
    } catch (error) {
      console.error('Error fetching user role:', error);
    }
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const calculateReadingTime = (content: string) => {
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return minutes;
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featured_image: post.featured_image || '',
      category: post.category,
      tags: post.tags.join(', '),
      status: post.status,
      author_name: post.author_name,
      meta_title: post.meta_title || '',
      meta_description: post.meta_description || '',
      keywords: post.keywords?.join(', ') || '',
      reading_time: post.reading_time?.toString() || '',
    });
    setShowEditor(true);
  };

  const handleNew = () => {
    setEditingPost(null);
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      featured_image: '',
      category: '',
      tags: '',
      status: 'draft',
      author_name: '',
      meta_title: '',
      meta_description: '',
      keywords: '',
      reading_time: '',
    });
    setShowEditor(true);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleSave = async () => {
    try {
      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      const keywordsArray = formData.keywords.split(',').map(kw => kw.trim()).filter(kw => kw);
      const readingTime = formData.reading_time ? parseInt(formData.reading_time) : calculateReadingTime(formData.content);

      const postData = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        featured_image: formData.featured_image || null,
        category: formData.category,
        tags: tagsArray,
        status: formData.status,
        author_name: formData.author_name,
        published_at: formData.status === 'published' ? new Date().toISOString() : null,
        meta_title: formData.meta_title || null,
        meta_description: formData.meta_description || null,
        keywords: keywordsArray,
        reading_time: readingTime,
      };

      if (editingPost) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', editingPost.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);

        if (error) throw error;
      }

      setShowEditor(false);
      fetchPosts();
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    if (currentUserRole !== 'admin') {
      alert('Only admins can delete posts.');
      return;
    }

    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Error deleting post. Please try again.');
    }
  };

  const handleCreateUser = async () => {
    if (currentUserRole !== 'admin') {
      alert('Only admins can create users.');
      return;
    }

    try {
      const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email: userFormData.email,
        password: userFormData.password,
        email_confirm: true,
        user_metadata: {
          full_name: userFormData.full_name,
          role: userFormData.role,
        },
      });

      if (authError) throw authError;

      setShowUserForm(false);
      setUserFormData({
        email: '',
        password: '',
        full_name: '',
        role: 'viewer',
      });
      fetchUsers();
      alert('User created successfully!');
    } catch (error: any) {
      console.error('Error creating user:', error);
      alert(error.message || 'Error creating user. Please try again.');
    }
  };

  const handleUpdateUserRole = async (userId: string, newRole: 'admin' | 'editor' | 'viewer') => {
    if (currentUserRole !== 'admin') {
      alert('Only admins can update user roles.');
      return;
    }

    try {
      const { error } = await supabase
        .from('user_profiles')
        .update({ role: newRole })
        .eq('id', userId);

      if (error) throw error;
      fetchUsers();
      alert('User role updated successfully!');
    } catch (error) {
      console.error('Error updating user role:', error);
      alert('Error updating user role. Please try again.');
    }
  };

  const canEdit = currentUserRole === 'admin' || currentUserRole === 'editor';
  const canDelete = currentUserRole === 'admin';
  const canManageUsers = currentUserRole === 'admin';

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Role: <span className="font-semibold capitalize">{currentUserRole}</span>
            </p>
          </div>
          <button
            onClick={onLogout}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Logout
          </button>
        </div>

        <div className="mb-8 border-b-2 border-gray-200">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === 'posts'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Blog Posts
            </button>
            {canManageUsers && (
              <button
                onClick={() => setActiveTab('users')}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === 'users'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Users className="inline mr-2" size={20} />
                User Management
              </button>
            )}
          </div>
        </div>

        {activeTab === 'posts' && (
          <>
            <div className="mb-8 flex justify-end">
              {canEdit && (
                <button
                  onClick={handleNew}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2"
                >
                  <Plus size={20} />
                  <span>New Post</span>
                </button>
              )}
            </div>

            {showEditor ? (
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">
                    {editingPost ? 'Edit Post' : 'New Post'}
                  </h2>
                  <button
                    onClick={() => setShowEditor(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Title *</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Blog post title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Slug *</label>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="url-friendly-slug"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Category *</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Author Name *</label>
                      <input
                        type="text"
                        value={formData.author_name}
                        onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Author name"
                      />
                    </div>
                  </div>

                  <ImageUpload
                    value={formData.featured_image}
                    onChange={(url) => setFormData({ ...formData, featured_image: url })}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Tags (comma separated)</label>
                      <input
                        type="text"
                        value={formData.tags}
                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="marketing, tips, strategy"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Reading Time (minutes)</label>
                      <input
                        type="number"
                        value={formData.reading_time}
                        onChange={(e) => setFormData({ ...formData, reading_time: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Auto-calculated if empty"
                        min="1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Excerpt *</label>
                    <textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                      placeholder="Short summary for preview"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Content *</label>
                    <RichTextEditor
                      value={formData.content}
                      onChange={(value) => setFormData({ ...formData, content: value })}
                    />
                  </div>

                  <div className="border-t-2 border-gray-200 pt-6">
                    <h3 className="text-xl font-bold mb-4">SEO Settings</h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Meta Title</label>
                        <input
                          type="text"
                          value={formData.meta_title}
                          onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          placeholder="SEO title (defaults to post title)"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Meta Description</label>
                        <textarea
                          value={formData.meta_description}
                          onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                          rows={2}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                          placeholder="SEO description for search engines"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Keywords (comma separated)</label>
                        <input
                          type="text"
                          value={formData.keywords}
                          onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          placeholder="seo, marketing, digital strategy"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 border-t-2 border-gray-200 pt-6">
                    <label className="block text-sm font-semibold">Status:</label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        value="draft"
                        checked={formData.status === 'draft'}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
                        className="w-4 h-4"
                      />
                      <span>Draft</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        value="published"
                        checked={formData.status === 'published'}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
                        className="w-4 h-4"
                      />
                      <span>Published</span>
                    </label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={handleSave}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2"
                    >
                      <Save size={20} />
                      <span>Save Post</span>
                    </button>
                    <button
                      onClick={() => setShowPreview(true)}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2"
                    >
                      <FileText size={20} />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => setShowEditor(false)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                {showPreview && (
                  <BlogPreview
                    title={formData.title}
                    excerpt={formData.excerpt}
                    content={formData.content}
                    featuredImage={formData.featured_image}
                    category={formData.category}
                    tags={formData.tags.split(',').map(t => t.trim()).filter(t => t)}
                    authorName={formData.author_name}
                    readingTime={formData.reading_time ? parseInt(formData.reading_time) : calculateReadingTime(formData.content)}
                    onClose={() => setShowPreview(false)}
                  />
                )}
              </div>
            ) : loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold">Title</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Category</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Author</th>
                      <th className="px-6 py-4 text-right text-sm font-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {posts.map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="font-semibold">{post.title}</div>
                          <div className="text-sm text-gray-500">{post.slug}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {post.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            post.status === 'published'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {post.status === 'published' ? <Eye size={14} className="inline mr-1" /> : <EyeOff size={14} className="inline mr-1" />}
                            {post.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{post.author_name}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            {canEdit && (
                              <button
                                onClick={() => handleEdit(post)}
                                className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg transition-all"
                              >
                                <Edit size={18} />
                              </button>
                            )}
                            {canDelete && (
                              <button
                                onClick={() => handleDelete(post.id)}
                                className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-lg transition-all"
                              >
                                <Trash2 size={18} />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {posts.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    No blog posts yet. Create your first post!
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {activeTab === 'users' && canManageUsers && (
          <>
            <div className="mb-8 flex justify-end">
              <button
                onClick={() => setShowUserForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Add User</span>
              </button>
            </div>

            {showUserForm && (
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Create New User</h2>
                  <button
                    onClick={() => setShowUserForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      value={userFormData.email}
                      onChange={(e) => setUserFormData({ ...userFormData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="user@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Password *</label>
                    <input
                      type="password"
                      value={userFormData.password}
                      onChange={(e) => setUserFormData({ ...userFormData, password: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="Minimum 6 characters"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={userFormData.full_name}
                      onChange={(e) => setUserFormData({ ...userFormData, full_name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Role *</label>
                    <select
                      value={userFormData.role}
                      onChange={(e) => setUserFormData({ ...userFormData, role: e.target.value as 'admin' | 'editor' | 'viewer' })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                      <option value="viewer">Viewer (Read-only)</option>
                      <option value="editor">Editor (Can create/edit posts)</option>
                      <option value="admin">Admin (Full access)</option>
                    </select>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={handleCreateUser}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      Create User
                    </button>
                    <button
                      onClick={() => setShowUserForm(false)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Created</th>
                    <th className="px-6 py-4 text-right text-sm font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">{user.full_name}</td>
                      <td className="px-6 py-4 text-gray-600">{user.email}</td>
                      <td className="px-6 py-4">
                        <select
                          value={user.role}
                          onChange={(e) => handleUpdateUserRole(user.id, e.target.value as 'admin' | 'editor' | 'viewer')}
                          className="px-3 py-1 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none font-semibold"
                        >
                          <option value="viewer">Viewer</option>
                          <option value="editor">Editor</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(user.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Shield className={`inline ${
                          user.role === 'admin' ? 'text-red-600' :
                          user.role === 'editor' ? 'text-blue-600' :
                          'text-gray-400'
                        }`} size={20} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {users.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No users found.
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
