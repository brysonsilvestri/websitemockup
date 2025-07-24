import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const QuoteCTA = () => {
  return <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 blue-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_55%_40%,rgba(255,255,255,0.3),rgba(255,255,255,0))]" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need Specialized Chemical Solutions?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Whether you need standard compounds or custom formulations, our team of experts is ready to
            help you find the right chemical solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-chembrand-700 hover:bg-gray-100">
                Request a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white hover:bg-white/10 text-slate-50">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default QuoteCTA;