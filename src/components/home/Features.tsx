import React from 'react';
const features = [{
  title: 'High-Purity Products',
  description: 'All chemicals undergo rigorous quality control ensuring 99%+ purity for research and industrial use.'
}, {
  title: 'Detailed Documentation',
  description: 'Each product ships with comprehensive certificates of analysis, safety data sheets, and usage guidelines.'
}, {
  title: 'Custom Formulations',
  description: 'Our team can create custom chemical solutions for your specific research or industrial needs.'
}, {
  title: 'Fast & Secure Shipping',
  description: 'Specialized packaging and handling protocols ensure safe delivery of all hazardous materials.'
}];
const Features = () => {
  return <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose ISOFLEX?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We have been in business since 1996 and are a premiere manufacturer and global supplier of stable isotopes and select radioisotopes for science, medicine, and industry. We ship worldwide. Assuming we have your isotope in inventory, we can arrange same-day shipment. </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-chembrand-100 text-chembrand-700 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-sm bg-chembrand-500/40" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Features;