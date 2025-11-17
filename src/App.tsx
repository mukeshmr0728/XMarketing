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

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (path === '/about' || hash === '#about') {
      setCurrentPage('about');
    } else if (path === '/contact' || hash === '#contact') {
      setCurrentPage('contact');
    } else if (path === '/pricing' || hash === '#pricing') {
      setCurrentPage('pricing');
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
