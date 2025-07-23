import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-chembrand-50/80 to-white/30" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white via-white/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_60%,rgba(56,189,248,0.13),rgba(255,255,255,0))]" />
      </div>
      
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="heading-gradient">Stable Isotopes</span>
              <br />
              <span className="text-gray-900">For Science, Medicine & Industry</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600"></p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-chembrand-600 hover:bg-chembrand-700">
                  Browse Catalog
                </Button>
              </Link>
              <Link to="/quote">
                <Button size="lg" variant="outline">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block relative h-[500px] w-full">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-xl bg-gradient-to-br from-chembrand-500/20 to-chembrand-100/20 animate-fade-in" style={{
            animationDelay: '0.2s'
          }} />
            <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-tl from-chembrand-200/30 to-transparent animate-fade-in" style={{
            animationDelay: '0.4s'
          }} />
            
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;