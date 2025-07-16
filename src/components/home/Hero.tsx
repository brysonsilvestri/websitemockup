import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200/80 to-gray-100/30" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gray-100 via-gray-100/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_60%,rgba(107,114,128,0.13),rgba(255,255,255,0))]" />
      </div>
      
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent">Premium Chemical</span>
              <br />
              <span className="text-gray-800">Solutions for Industry</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-700">
              High-purity compounds and specialized chemical formulations for research,
              manufacturing, and educational purposes. Each product rigorously tested
              and certified.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-gray-600 hover:bg-gray-700 text-white">
                  Browse Catalog
                </Button>
              </Link>
              <Link to="/quote">
                <Button size="lg" variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-200">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block relative h-[500px] w-full">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-xl bg-gradient-to-br from-gray-400/20 to-gray-200/20 animate-fade-in" style={{ animationDelay: '0.2s' }} />
            <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-tl from-gray-300/30 to-transparent animate-fade-in" style={{ animationDelay: '0.4s' }} />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-xl border border-gray-300 bg-gradient-to-br from-white to-gray-100/50 shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-32 rounded-full bg-gray-200" />
              <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-gray-400" />
              <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-gray-300" />
              <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-gray-500/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
