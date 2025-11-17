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
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import { supabase } from './lib/supabase';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [blogSlug, setBlogSlug] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (path === '/admin' || hash === '#admin') {
      setCurrentPage('admin');
    } else if (path === '/login' || hash === '#login') {
      setCurrentPage('login');
    } else if (path === '/blog' || hash === '#blog') {
      setCurrentPage('blog');
    } else if (path === '/about' || hash === '#about') {
      setCurrentPage('about');
    } else if (path === '/contact' || hash === '#contact') {
      setCurrentPage('contact');
    } else if (path === '/pricing' || hash === '#pricing') {
      setCurrentPage('pricing');
    } else if (path.startsWith('/blog/') || hash.startsWith('#blog/')) {
      const slug = path.startsWith('/blog/') ? path.replace('/blog/', '') : hash.replace('#blog/', '');
      setBlogSlug(slug);
      setCurrentPage('blog-post');
    } else if (path.startsWith('/services/')) {
      const service = path.replace('/services/', '');
      setCurrentPage(service);
    } else {
      setCurrentPage('home');
    }

    const handlePopState = () => {
      const newPath = window.location.pathname;
      const newHash = window.location.hash;

      if (newPath === '/admin' || newHash === '#admin') {
        setCurrentPage('admin');
      } else if (newPath === '/login' || newHash === '#login') {
        setCurrentPage('login');
      } else if (newPath === '/blog' || newHash === '#blog') {
        setCurrentPage('blog');
      } else if (newPath.startsWith('/blog/') || newHash.startsWith('#blog/')) {
        const slug = newPath.startsWith('/blog/') ? newPath.replace('/blog/', '') : newHash.replace('#blog/', '');
        setBlogSlug(slug);
        setCurrentPage('blog-post');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string, slug?: string) => {
    setCurrentPage(page);
    if (slug) setBlogSlug(slug);

    if (page === 'admin') {
      window.history.pushState({}, '', '/admin');
    } else if (page === 'login') {
      window.history.pushState({}, '', '/login');
    } else if (page === 'blog') {
      window.history.pushState({}, '', '/blog');
    } else if (page === 'blog-post' && slug) {
      window.history.pushState({}, '', `/blog/${slug}`);
    } else if (page === 'home') {
      window.history.pushState({}, '', '/');
    } else {
      window.history.pushState({}, '', `/${page}`);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    handleNavigate('home');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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
        return <BlogPage onNavigate={handleNavigate} />;
      case 'blog-post':
        return <BlogPostPage slug={blogSlug} onNavigate={handleNavigate} />;
      case 'login':
        return <LoginPage onLogin={() => handleNavigate('admin')} />;
      case 'admin':
        return isAuthenticated ? (
          <AdminPage onLogout={handleLogout} />
        ) : (
          <LoginPage onLogin={() => handleNavigate('admin')} />
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const showNavAndFooter = currentPage !== 'login' && currentPage !== 'admin';

  return (
    <div className="min-h-screen bg-white">
      {showNavAndFooter && <Navbar currentPage={currentPage} onNavigate={handleNavigate} />}
      <main>
        {renderPage()}
      </main>
      {showNavAndFooter && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
