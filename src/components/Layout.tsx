
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            AI Marketing
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <button className="md:hidden p-2">
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </nav>
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-500">
            © 2024 AI Marketing. All rights reserved.
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

export default Layout;
