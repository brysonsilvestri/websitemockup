
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

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
  },
  {
    id: 5,
    name: 'Copper Sulfate Pentahydrate',
    description: 'Blue crystalline compound used in agriculture, pool treatment, and as a reagent.',
    category: 'Inorganic',
    purity: '98%',
    packaging: '250g container',
    image: '/placeholder.svg'
  },
  {
    id: 6,
    name: 'Ethanol (Absolute)',
    description: 'Pure ethanol for laboratory use, solvent applications, and chemical synthesis.',
    category: 'Organic',
    purity: '≥99.5%',
    packaging: '500ml bottle',
    image: '/placeholder.svg'
  },
  {
    id: 7,
    name: 'Potassium Permanganate',
    description: 'Powerful oxidizing agent used in analytical chemistry and water treatment.',
    category: 'Inorganic',
    purity: '99%',
    packaging: '100g container',
    image: '/placeholder.svg'
  },
  {
    id: 8,
    name: 'Hexane (Analytical Grade)',
    description: 'High-quality hexane solvent for chromatography and extraction procedures.',
    category: 'Organic',
    purity: '≥99%',
    packaging: '1L bottle',
    image: '/placeholder.svg'
  }
];

const categories = [
  { name: 'All Categories', value: 'all' },
  { name: 'Organic', value: 'Organic' },
  { name: 'Inorganic', value: 'Inorganic' }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Catalog
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Browse our comprehensive catalog of high-quality chemical products for research, 
            education, and industrial applications.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <div className="sticky top-24 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <h2 className="font-medium text-lg mb-4">Filter Products</h2>
              
              <div className="mb-6">
                <label htmlFor="search" className="text-sm font-medium text-gray-700 mb-2 block">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    id="search"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Categories
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.value}
                      variant={selectedCategory === category.value ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setSelectedCategory(category.value)}
                      className="mr-2 mb-2"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/4">
            <div className="mb-6">
              <p className="text-sm text-gray-500">Showing {filteredProducts.length} products</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
