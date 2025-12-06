import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen
            ? 'bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="z-50">
              <span className={`text-2xl md:text-3xl font-display font-bold ${!scrolled && location.pathname === '/' && !isMenuOpen ? 'text-white' : 'text-primary'
                }`}>
                DG Braids
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${!scrolled && location.pathname === '/' ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
                    } ${location.pathname === link.path ? 'text-primary' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
              >
                Book Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className={`w-6 h-6 ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-gray-900 dark:text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-surface-light dark:bg-surface-dark z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden flex flex-col justify-center items-center space-y-8`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-display font-medium text-gray-900 dark:text-white hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Book Now
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>


    </div>
  );
};

export default Layout;
