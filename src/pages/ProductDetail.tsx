
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// This would normally come from an API
const products = [
  {
    id: '1',
    name: 'Sodium Chloride (99.9%)',
    description: 'Ultra-pure sodium chloride for laboratory and research use.',
    longDescription: 'Our premium grade sodium chloride is produced to meet the highest standards of purity for laboratory and research applications. Each batch undergoes rigorous quality control testing to ensure consistency and reliability. Ideal for preparing buffers, physiological solutions, and other laboratory applications requiring high-purity NaCl.',
    category: 'Inorganic',
    purity: '99.9%',
    packaging: '500g vial',
    casNumber: '7647-14-5',
    molecularFormula: 'NaCl',
    molecularWeight: '58.44 g/mol',
    hazards: ['Eye irritant', 'May cause respiratory irritation in large quantities'],
    storage: 'Store in a cool, dry place away from incompatible materials.',
    applications: [
      'Preparation of buffers and physiological solutions',
      'Biological research',
      'Food science studies',
      'Chemical standards and reference materials'
    ],
    image: '/placeholder.svg',
    relatedProducts: ['2', '3', '5']
  },
  {
    id: '2',
    name: 'Methylene Blue Solution',
    description: 'Standardized methylene blue solution for biological staining and indicators.',
    longDescription: 'Methylene Blue is a heterocyclic aromatic chemical compound with the molecular formula C16H18ClN3S. It has many uses in a range of different fields, such as biology and chemistry. At room temperature it appears as a solid, odorless, dark green powder, that yields a blue solution when dissolved in water. Our high-quality methylene blue solution is prepared to precise concentration standards for reliable results in laboratory applications.',
    category: 'Organic',
    concentration: '1% w/v',
    packaging: '100ml bottle',
    casNumber: '61-73-4',
    molecularFormula: 'C16H18ClN3S',
    molecularWeight: '319.85 g/mol',
    hazards: ['Harmful if swallowed', 'Causes skin irritation', 'Causes serious eye irritation'],
    storage: 'Store in a tightly closed container. Store in a cool, dry, well-ventilated area away from incompatible substances.',
    applications: [
      'Biological staining',
      'Redox indicators',
      'Medical diagnostics',
      'Fish tank treatments'
    ],
    image: '/placeholder.svg',
    relatedProducts: ['1', '5', '7']
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you'd fetch this data from your API
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button>Return to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  const relatedItems = products.filter(p => product.relatedProducts.includes(p.id));
  
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container">
          <nav className="text-sm text-gray-500 mb-2">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="hover:text-gray-700">Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <Link to="/products" className="hover:text-gray-700">Products</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="text-gray-700 font-medium">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-chembrand-100 text-chembrand-800">
                {product.category}
              </Badge>
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {product.purity && (
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-sm font-medium text-gray-500">Purity</h3>
                  <p className="text-gray-900">{product.purity}</p>
                </div>
              )}
              {product.concentration && (
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-sm font-medium text-gray-500">Concentration</h3>
                  <p className="text-gray-900">{product.concentration}</p>
                </div>
              )}
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-sm font-medium text-gray-500">Packaging</h3>
                <p className="text-gray-900">{product.packaging}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-sm font-medium text-gray-500">CAS Number</h3>
                <p className="text-gray-900">{product.casNumber}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={`/quote?product=${product.id}`} className="w-full sm:w-auto">
                <Button className="w-full" size="lg">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full" size="lg">
                  Ask a Question
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <Tabs defaultValue="specifications">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="safety">Safety & Storage</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="bg-white p-6 border rounded-lg">
              <div className="prose max-w-none">
                <p className="mb-6">{product.longDescription}</p>
                <h3 className="text-lg font-medium mb-2">Technical Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Molecular Formula</h4>
                    <p className="font-mono">{product.molecularFormula}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Molecular Weight</h4>
                    <p>{product.molecularWeight}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">CAS Number</h4>
                    <p>{product.casNumber}</p>
                  </div>
                  {product.purity && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Purity</h4>
                      <p>{product.purity}</p>
                    </div>
                  )}
                  {product.concentration && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Concentration</h4>
                      <p>{product.concentration}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Package Size</h4>
                    <p>{product.packaging}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  * Full certificate of analysis available upon request.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="applications" className="bg-white p-6 border rounded-lg">
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium mb-4">Recommended Applications</h3>
                <ul className="space-y-3">
                  {product.applications.map((app, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-chembrand-500">•</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-md">
                  <h4 className="text-sm font-medium text-chembrand-700 mb-2">Need a Custom Application?</h4>
                  <p className="text-sm text-chembrand-600 mb-3">
                    Our technical team can assist with specialized applications and custom formulations.
                  </p>
                  <Link to="/contact">
                    <Button size="sm" variant="outline" className="text-chembrand-700 border-chembrand-200 hover:bg-chembrand-50">
                      Contact Technical Support
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="safety" className="bg-white p-6 border rounded-lg">
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium mb-4">Safety Information</h3>
                <div className="mb-6">
                  <h4 className="text-base font-medium mb-2">Hazards</h4>
                  <ul className="space-y-1">
                    {product.hazards.map((hazard, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-amber-500">⚠️</span>
                        <span>{hazard}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-base font-medium mb-2">Storage Recommendations</h4>
                  <p>{product.storage}</p>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-md">
                  <h4 className="text-sm font-medium text-amber-700 mb-2">Important Notice</h4>
                  <p className="text-sm text-amber-600">
                    Always refer to the provided Safety Data Sheet (SDS) before handling this product. 
                    Follow all safety guidelines and wear appropriate protective equipment.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {relatedItems.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedItems.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-100 relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-full w-full object-cover object-center"
                    />
                    <Badge className="absolute top-3 right-3 bg-chembrand-100 text-chembrand-800 hover:bg-chembrand-200">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                  </CardHeader>
                  
                  <CardFooter className="p-4 pt-2">
                    <Link to={`/products/${product.id}`} className="w-full">
                      <Button variant="outline" className="w-full">View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
