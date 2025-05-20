
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-chembrand-800">
              <div className="rounded-md bg-gradient-to-r from-chembrand-600 to-chembrand-500 p-1.5 text-white">
                <div className="h-5 w-5 rounded-sm bg-white/20" />
              </div>
              ChemSolutions
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Providing high-quality chemical solutions for research, industry, and educational purposes.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/organic" className="text-gray-600 hover:text-chembrand-600 text-sm">Organic Compounds</Link></li>
              <li><Link to="/products/inorganic" className="text-gray-600 hover:text-chembrand-600 text-sm">Inorganic Compounds</Link></li>
              <li><Link to="/products/research" className="text-gray-600 hover:text-chembrand-600 text-sm">Research Chemicals</Link></li>
              <li><Link to="/products/catalog" className="text-gray-600 hover:text-chembrand-600 text-sm">Full Catalog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-chembrand-600 text-sm">About Us</Link></li>
              <li><Link to="/certifications" className="text-gray-600 hover:text-chembrand-600 text-sm">Certifications</Link></li>
              <li><Link to="/news" className="text-gray-600 hover:text-chembrand-600 text-sm">News</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-chembrand-600 text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 hover:text-chembrand-600 text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-chembrand-600 text-sm">Privacy Policy</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-chembrand-600 text-sm">Shipping Policy</Link></li>
              <li><Link to="/safety" className="text-gray-600 hover:text-chembrand-600 text-sm">Safety Data</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} ChemSolutions Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
