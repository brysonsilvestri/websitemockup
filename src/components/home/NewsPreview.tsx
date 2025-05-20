
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const newsItems = [
  {
    id: 1,
    title: 'New Research Grade Compounds Now Available',
    excerpt: 'We are pleased to announce the addition of 15 new research-grade compounds to our catalog, including rare earth elements and specialized organic catalysts.',
    date: '2025-05-15',
    category: 'Products',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'ChemSolutions Receives ISO 9001:2025 Certification',
    excerpt: 'Our commitment to quality has been recognized with the renewal of our ISO 9001 certification, highlighting our dedication to maintaining the highest standards.',
    date: '2025-05-10',
    category: 'Company',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'The Growing Importance of Green Chemistry in Research',
    excerpt: 'Our latest white paper explores sustainable practices in chemical research and manufacturing, with insights from industry experts.',
    date: '2025-05-03',
    category: 'Research',
    image: '/placeholder.svg'
  }
];

const NewsPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Latest Industry News</h2>
            <p className="mt-2 text-lg text-gray-600">
              Stay informed about chemical industry trends and company updates
            </p>
          </div>
          <Link to="/news">
            <Button variant="ghost" className="mt-4 md:mt-0">
              View All News
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="h-full flex flex-col">
              <div className="aspect-video bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover"
                />
              </div>
              
              <CardHeader className="pb-0">
                <div className="mb-2 flex items-center">
                  <span className="text-sm font-medium text-chembrand-600">{item.category}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <time className="text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="py-2 flex-grow">
                <CardDescription className="line-clamp-3">
                  {item.excerpt}
                </CardDescription>
              </CardContent>
              
              <CardFooter>
                <Link to={`/news/${item.id}`}>
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
