
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// This would normally come from an API
const newsItems = [
  {
    id: '1',
    title: 'New Research Grade Compounds Now Available',
    excerpt: 'We are pleased to announce the addition of 15 new research-grade compounds to our catalog, including rare earth elements and specialized organic catalysts.',
    content: 'ChemSolutions is proud to announce a significant expansion of our research-grade chemical catalog with the addition of 15 new high-purity compounds. This expansion includes a series of rare earth elements and specialized organic catalysts that have been in high demand among our research customers.\n\nThe new compounds have been sourced from trusted manufacturers and undergo our rigorous quality control process to ensure they meet the exacting standards required for research applications. Each product is accompanied by a comprehensive certificate of analysis and detailed safety documentation.\n\n"This expansion represents our commitment to serving the evolving needs of the research community," said Dr. Emily Chen, Chief Scientific Officer at ChemSolutions. "We\'ve carefully selected these compounds based on customer requests and emerging trends in chemical research."\n\nThe new additions include lanthanide series compounds, novel heterocyclic catalysts, and specialized chiral auxiliaries that are becoming increasingly important in asymmetric synthesis applications.',
    date: '2025-05-15',
    category: 'Products',
    image: '/placeholder.svg',
    author: 'Dr. Emily Chen',
    relatedNews: ['2', '3']
  },
  {
    id: '2',
    title: 'ChemSolutions Receives ISO 9001:2025 Certification',
    excerpt: 'Our commitment to quality has been recognized with the renewal of our ISO 9001 certification, highlighting our dedication to maintaining the highest standards.',
    content: 'ChemSolutions is proud to announce that we have successfully achieved ISO 9001:2025 certification, demonstrating our ongoing commitment to quality management systems and customer satisfaction.\n\nThe certification process involved a comprehensive audit of our operations, quality control procedures, and management systems by an independent certification body. This achievement reflects our team\'s dedication to continuous improvement and excellence in all aspects of our business.\n\n"Quality is at the heart of everything we do at ChemSolutions," said Michael Rodriguez, CEO. "This certification validates our rigorous processes and gives our customers additional confidence in our products and services."\n\nThe ISO 9001:2025 standard is based on several quality management principles including a strong customer focus, the involvement of high-level company management, a process approach to organization and continual improvement. Using ISO 9001:2025 helps ensure that customers get consistent, good-quality products and services.',
    date: '2025-05-10',
    category: 'Company',
    image: '/placeholder.svg',
    author: 'Michael Rodriguez',
    relatedNews: ['1', '4']
  },
  {
    id: '3',
    title: 'The Growing Importance of Green Chemistry in Research',
    excerpt: 'Our latest white paper explores sustainable practices in chemical research and manufacturing, with insights from industry experts.',
    content: 'ChemSolutions has released a comprehensive white paper titled "Green Chemistry: Sustainable Practices for the Future of Chemical Research and Manufacturing." This timely publication addresses the growing importance of environmentally responsible approaches in the chemical industry.\n\nThe white paper explores key principles of green chemistry, including waste prevention, atom economy, and the design of safer chemicals and processes. It also highlights case studies of successful implementation of green chemistry principles in both academic research and industrial settings.\n\n"As an industry, we have a responsibility to minimize environmental impact while continuing to innovate," explained Dr. Sarah Johnson, Head of Sustainable Chemistry at ChemSolutions and lead author of the white paper. "This publication aims to provide practical guidance for organizations looking to adopt greener practices."\n\nThe document includes contributions from leading researchers in sustainable chemistry as well as representatives from regulatory bodies. It outlines current best practices and emerging trends, offering a roadmap for chemical professionals seeking to incorporate sustainability into their work.',
    date: '2025-05-03',
    category: 'Research',
    image: '/placeholder.svg',
    author: 'Dr. Sarah Johnson',
    relatedNews: ['1', '6']
  },
];

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you'd fetch this data from your API
  const newsItem = newsItems.find(item => item.id === id);
  
  if (!newsItem) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/news">
            <Button>Return to News</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  const relatedItems = newsItems.filter(item => newsItem.relatedNews.includes(item.id));
  
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
                <Link to="/news" className="hover:text-gray-700">News</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="text-gray-700 font-medium">
                Article
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      <article className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-chembrand-100 text-chembrand-800 px-3 py-1 rounded-full text-sm font-medium">
              {newsItem.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {newsItem.title}
          </h1>
          
          <div className="flex items-center text-gray-500 mb-8">
            <span className="text-sm">By {newsItem.author}</span>
            <span className="mx-2">•</span>
            <time className="text-sm">
              {new Date(newsItem.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          
          <div className="aspect-video bg-gray-100 mb-8 rounded-lg overflow-hidden">
            <img 
              src={newsItem.image} 
              alt={newsItem.title} 
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="prose max-w-none">
            {newsItem.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex items-center justify-between">
              <div>
                <Link to="/news" className="text-chembrand-600 hover:text-chembrand-700 font-medium">
                  ← Back to News
                </Link>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(newsItem.title)}`} target="_blank" rel="noopener noreferrer">
                    Share on Twitter
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                    Share on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {relatedItems.length > 0 && (
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedItems.map((item) => (
                <Card key={item.id} className="h-full flex flex-col">
                  <div className="aspect-video bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <CardHeader className="flex-grow">
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
                  
                  <CardContent className="pt-0">
                    <Link to={`/news/${item.id}`}>
                      <Button variant="outline" className="w-full">Read Article</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default NewsDetail;
