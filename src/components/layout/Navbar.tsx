
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-chembrand-800">
            <div className="rounded-md bg-gradient-to-r from-chembrand-600 to-chembrand-500 p-1.5 text-white">
              <span className="sr-only">ChemSolutions</span>
              <div className="h-5 w-5 rounded-sm bg-white/20" />
            </div>
            ChemSolutions
          </Link>
          
          <nav className="hidden md:flex gap-5">
            <Link to="/" className="text-sm font-medium hover:text-chembrand-600 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-chembrand-600 transition-colors">
              Products
            </Link>
            <Link to="/quote" className="text-sm font-medium hover:text-chembrand-600 transition-colors">
              Request Quote
            </Link>
            <Link to="/news" className="text-sm font-medium hover:text-chembrand-600 transition-colors">
              News
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-chembrand-600 transition-colors">
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Link to="/quote">
            <Button className="hidden md:flex">Request a Quote</Button>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
