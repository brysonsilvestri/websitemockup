
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About ChemSolutions</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Leading provider of high-quality chemical products for research, industry, and education.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At ChemSolutions, we're dedicated to advancing scientific discovery and industrial innovation
                through the provision of premium chemical compounds and solutions.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our team of experts combines decades of experience in chemistry, manufacturing, and quality control
                to deliver products that meet the highest standards of purity and reliability.
              </p>
              <p className="text-lg text-gray-600">
                We believe that quality chemicals are the foundation of breakthrough research and efficient
                industrial processes. That's why we maintain rigorous testing protocols and invest continuously
                in our manufacturing capabilities.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <div className="aspect-square relative bg-gradient-to-br from-chembrand-50 to-chembrand-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="inline-block w-24 h-24 bg-gradient-to-r from-chembrand-600 to-chembrand-500 rounded-full mb-6">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-chembrand-800">ChemSolutions</h3>
                    <p className="text-chembrand-700 mt-2">Est. 2010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="h-12 w-12 rounded-lg bg-chembrand-100 text-chembrand-700 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-sm bg-chembrand-500/40" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in every product we offer, with rigorous testing
                and quality control at every stage of production.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="h-12 w-12 rounded-lg bg-chembrand-100 text-chembrand-700 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-sm bg-chembrand-500/40" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scientific Integrity</h3>
              <p className="text-gray-600">
                Our decisions are guided by sound scientific principles and a commitment to
                accuracy and transparency in all our operations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="h-12 w-12 rounded-lg bg-chembrand-100 text-chembrand-700 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-sm bg-chembrand-500/40" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Partnership</h3>
              <p className="text-gray-600">
                We work closely with our customers to understand their needs and provide
                tailored solutions that help them achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gradient-to-br from-chembrand-500 to-chembrand-700 rounded-lg" />
                <div className="aspect-square bg-gradient-to-tr from-chembrand-100 to-white rounded-lg border border-chembrand-200" />
                <div className="aspect-square bg-gradient-to-br from-white to-chembrand-50 rounded-lg border border-chembrand-100" />
                <div className="aspect-square bg-gradient-to-tr from-chembrand-800 to-chembrand-600 rounded-lg" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2010 by a team of chemists with a vision to provide high-quality research chemicals,
                ChemSolutions has grown into a leading supplier for laboratories, educational institutions,
                and industrial clients worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Over the past 15 years, we've expanded our catalog to include over 2,000 chemical products,
                established state-of-the-art manufacturing facilities, and built a global distribution network
                that ensures prompt delivery to customers on six continents.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to innovate and grow, guided by our commitment to quality and scientific
                advancement. We're proud to be a trusted partner to researchers and industries making
                breakthroughs that shape our future.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-chembrand-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you need standard chemical products or custom formulations, our team is here to help.
              Contact us today to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-chembrand-700 hover:bg-gray-100">
                  Contact Us
                </Button>
              </Link>
              <Link to="/quote">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
