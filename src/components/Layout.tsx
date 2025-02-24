
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Maui.ai
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/case-studies">Case Studies</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</MobileNavLink>
              <MobileNavLink to="/case-studies" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</MobileNavLink>
              <MobileNavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </nav>
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="text-xl font-bold text-gray-900">Maui.ai</Link>
              <p className="mt-4 text-gray-600">Revolutionizing marketing with AI-driven insights and automated campaigns.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2">
                <FooterLink to="/services#research">Market Research</FooterLink>
                <FooterLink to="/services#planning">Strategic Planning</FooterLink>
                <FooterLink to="/services#content">Content Generation</FooterLink>
                <FooterLink to="/services#campaigns">Campaign Management</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <FooterLink to="/about">About Us</FooterLink>
                <FooterLink to="/case-studies">Case Studies</FooterLink>
                <FooterLink to="/blog">Blog</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
                <FooterLink to="/terms">Terms of Service</FooterLink>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2024 Maui.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
  >
    {children}
  </Link>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link
      to={to}
      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

export default Layout;
