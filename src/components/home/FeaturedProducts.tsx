
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: 'Sodium Chloride (99.9%)',
    description: 'Ultra-pure sodium chloride for laboratory and research use.',
    category: 'Inorganic',
    purity: '99.9%',
    packaging: '500g vial',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Methylene Blue Solution',
    description: 'Standardized methylene blue solution for biological staining and indicators.',
    category: 'Organic',
    concentration: '1% w/v',
    packaging: '100ml bottle',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Silver Nitrate Crystals',
    description: 'Premium silver nitrate crystals for analytical reagents and specialized applications.',
    category: 'Inorganic',
    purity: '99.8%',
    packaging: '25g vial',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    name: 'Acetone (HPLC Grade)',
    description: 'High-purity acetone for chromatography and analytical applications.',
    category: 'Organic',
    purity: '≥99.9%',
    packaging: '1L bottle',
    image: '/placeholder.svg'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="mt-2 text-lg text-gray-600">
              Browse our selection of premium chemical products
            </p>
          </div>
          <Link to="/products">
            <Button variant="ghost" className="mt-4 md:mt-0">
              View All Products
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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
                <CardDescription className="line-clamp-2 h-10">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-4 pt-2">
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                  {product.purity && (
                    <div>
                      <span className="font-medium">Purity:</span> {product.purity}
                    </div>
                  )}
                  {product.concentration && (
                    <div>
                      <span className="font-medium">Conc:</span> {product.concentration}
                    </div>
                  )}
                  <div>
                    <span className="font-medium">Package:</span> {product.packaging}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Link to={`/products/${product.id}`} className="w-full">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
