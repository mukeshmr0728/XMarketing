import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AIAutomationPage from './pages/AIAutomationPage';
import MetaAdsPage from './pages/MetaAdsPage';
import GoogleAdsPage from './pages/GoogleAdsPage';
import SEOPage from './pages/SEOPage';
import WebsiteDesignPage from './pages/WebsiteDesignPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import BlogEditor from './pages/BlogEditor';
import { supabase, BlogPost } from './lib/supabase';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [blogSlug, setBlogSlug] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
  };

  useEffect(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (path === '/about' || hash === '#about') {
      setCurrentPage('about');
    } else if (path === '/contact' || hash === '#contact') {
      setCurrentPage('contact');
    } else if (path === '/pricing' || hash === '#pricing') {
      setCurrentPage('pricing');
    } else if (path === '/blog' || hash === '#blog') {
      setCurrentPage('blog');
    } else if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      setBlogSlug(slug);
      setCurrentPage('blog-post');
    } else if (path === '/admin/login' || path === '/admin') {
      setCurrentPage('admin-login');
    } else if (path === '/admin/dashboard') {
      setCurrentPage('admin-dashboard');
    } else if (path === '/admin/editor') {
      setCurrentPage('admin-editor');
    } else if (path.startsWith('/services/')) {
      const service = path.replace('/services/', '');
      setCurrentPage(service);
    } else {
      setCurrentPage('home');
    }

    const handlePopState = () => {
      const newPath = window.location.pathname;
      const newHash = window.location.hash;

      if (newPath === '/about' || newHash === '#about') {
        setCurrentPage('about');
      } else if (newPath === '/contact' || newHash === '#contact') {
        setCurrentPage('contact');
      } else if (newPath === '/pricing' || newHash === '#pricing') {
        setCurrentPage('pricing');
      } else if (newPath === '/blog' || newHash === '#blog') {
        setCurrentPage('blog');
      } else if (newPath.startsWith('/blog/')) {
        const slug = newPath.replace('/blog/', '');
        setBlogSlug(slug);
        setCurrentPage('blog-post');
      } else if (newPath === '/admin/login' || newPath === '/admin') {
        setCurrentPage('admin-login');
      } else if (newPath === '/admin/dashboard') {
        setCurrentPage('admin-dashboard');
      } else if (newPath === '/admin/editor') {
        setCurrentPage('admin-editor');
      } else if (newPath.startsWith('/services/')) {
        const service = newPath.replace('/services/', '');
        setCurrentPage(service);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);

    if (page === 'home') {
      window.history.pushState({}, '', '/');
    } else {
      window.history.pushState({}, '', `/${page}`);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('admin-dashboard');
    window.history.pushState({}, '', '/admin/dashboard');
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setCurrentPage('home');
    window.history.pushState({}, '', '/');
  };

  const handleEditPost = (post: BlogPost | null) => {
    setEditingPost(post);
    setCurrentPage('admin-editor');
    window.history.pushState({}, '', '/admin/editor');
  };

  const handleBackToDashboard = () => {
    setEditingPost(null);
    setCurrentPage('admin-dashboard');
    window.history.pushState({}, '', '/admin/dashboard');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'ai-automation':
        return <AIAutomationPage onNavigate={handleNavigate} />;
      case 'meta-ads':
        return <MetaAdsPage onNavigate={handleNavigate} />;
      case 'google-ads':
        return <GoogleAdsPage onNavigate={handleNavigate} />;
      case 'seo':
        return <SEOPage onNavigate={handleNavigate} />;
      case 'website-design':
        return <WebsiteDesignPage onNavigate={handleNavigate} />;
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'blog':
        return <BlogPage />;
      case 'blog-post':
        return <BlogPostPage slug={blogSlug} />;
      case 'admin-login':
        return isAuthenticated ? (
          <AdminDashboard onEditPost={handleEditPost} />
        ) : (
          <AdminLogin onLogin={handleLogin} />
        );
      case 'admin-dashboard':
        return isAuthenticated ? (
          <AdminDashboard onEditPost={handleEditPost} />
        ) : (
          <AdminLogin onLogin={handleLogin} />
        );
      case 'admin-editor':
        return isAuthenticated ? (
          <BlogEditor
            post={editingPost}
            onBack={handleBackToDashboard}
            onSave={handleBackToDashboard}
          />
        ) : (
          <AdminLogin onLogin={handleLogin} />
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
