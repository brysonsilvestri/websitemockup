
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'New Research Grade Compounds Now Available',
    excerpt: 'We are pleased to announce the addition of 15 new research-grade compounds to our catalog, including rare earth elements and specialized organic catalysts.',
    content: 'ChemSolutions is proud to announce a significant expansion of our research-grade chemical catalog with the addition of 15 new high-purity compounds. This expansion includes a series of rare earth elements and specialized organic catalysts that have been in high demand among our research customers.\n\nThe new compounds have been sourced from trusted manufacturers and undergo our rigorous quality control process to ensure they meet the exacting standards required for research applications. Each product is accompanied by a comprehensive certificate of analysis and detailed safety documentation.\n\n"This expansion represents our commitment to serving the evolving needs of the research community," said Dr. Emily Chen, Chief Scientific Officer at ChemSolutions. "We've carefully selected these compounds based on customer requests and emerging trends in chemical research."\n\nThe new additions include lanthanide series compounds, novel heterocyclic catalysts, and specialized chiral auxiliaries that are becoming increasingly important in asymmetric synthesis applications.',
    date: '2025-05-15',
    category: 'Products',
    image: '/placeholder.svg',
    author: 'Dr. Emily Chen'
  },
  {
    id: 2,
    title: 'ChemSolutions Receives ISO 9001:2025 Certification',
    excerpt: 'Our commitment to quality has been recognized with the renewal of our ISO 9001 certification, highlighting our dedication to maintaining the highest standards.',
    content: 'ChemSolutions is proud to announce that we have successfully achieved ISO 9001:2025 certification, demonstrating our ongoing commitment to quality management systems and customer satisfaction.\n\nThe certification process involved a comprehensive audit of our operations, quality control procedures, and management systems by an independent certification body. This achievement reflects our team\'s dedication to continuous improvement and excellence in all aspects of our business.\n\n"Quality is at the heart of everything we do at ChemSolutions," said Michael Rodriguez, CEO. "This certification validates our rigorous processes and gives our customers additional confidence in our products and services."\n\nThe ISO 9001:2025 standard is based on several quality management principles including a strong customer focus, the involvement of high-level company management, a process approach to organization and continual improvement. Using ISO 9001:2025 helps ensure that customers get consistent, good-quality products and services.',
    date: '2025-05-10',
    category: 'Company',
    image: '/placeholder.svg',
    author: 'Michael Rodriguez'
  },
  {
    id: 3,
    title: 'The Growing Importance of Green Chemistry in Research',
    excerpt: 'Our latest white paper explores sustainable practices in chemical research and manufacturing, with insights from industry experts.',
    content: 'ChemSolutions has released a comprehensive white paper titled "Green Chemistry: Sustainable Practices for the Future of Chemical Research and Manufacturing." This timely publication addresses the growing importance of environmentally responsible approaches in the chemical industry.\n\nThe white paper explores key principles of green chemistry, including waste prevention, atom economy, and the design of safer chemicals and processes. It also highlights case studies of successful implementation of green chemistry principles in both academic research and industrial settings.\n\n"As an industry, we have a responsibility to minimize environmental impact while continuing to innovate," explained Dr. Sarah Johnson, Head of Sustainable Chemistry at ChemSolutions and lead author of the white paper. "This publication aims to provide practical guidance for organizations looking to adopt greener practices."\n\nThe document includes contributions from leading researchers in sustainable chemistry as well as representatives from regulatory bodies. It outlines current best practices and emerging trends, offering a roadmap for chemical professionals seeking to incorporate sustainability into their work.',
    date: '2025-05-03',
    category: 'Research',
    image: '/placeholder.svg',
    author: 'Dr. Sarah Johnson'
  },
  {
    id: 4,
    title: 'ChemSolutions Expands European Distribution Network',
    excerpt: 'New partnerships with key European distributors will enable faster delivery times and better service for our European customers.',
    content: 'ChemSolutions is pleased to announce a significant expansion of our European distribution network, establishing new partnerships with leading chemical distributors across the continent. This strategic expansion will reduce delivery times, lower shipping costs, and improve overall service for our growing European customer base.\n\nThe new distribution agreements include partnerships with established chemical suppliers in Germany, France, Italy, and Spain, with additional agreements expected to be finalized in the coming months for Eastern European markets.\n\n"Europe represents a significant growth market for ChemSolutions," noted Elena Petrova, Director of International Business Development. "These new partnerships allow us to better serve research institutions, manufacturing facilities, and educational organizations across the region with locally stocked inventory and technical support."\n\nThe company has also established a new European operations center in Frankfurt, Germany, which will coordinate logistics, regulatory compliance, and customer service for the region. The facility includes temperature-controlled storage capabilities for sensitive compounds and will serve as a hub for ChemSolutions\' European operations.',
    date: '2025-04-28',
    category: 'Business',
    image: '/placeholder.svg',
    author: 'Elena Petrova'
  },
  {
    id: 5,
    title: 'New Educational Resources for Chemistry Teachers',
    excerpt: 'ChemSolutions launches free online resources for high school and college chemistry educators, including experiment guides and safety protocols.',
    content: 'ChemSolutions has launched a comprehensive suite of free educational resources designed specifically for high school and college chemistry educators. The new online portal includes experiment guides, safety protocols, instructional videos, and interactive learning tools.\n\n"We recognize the critical role that educators play in inspiring the next generation of scientists," said Dr. Robert Lee, Director of Educational Outreach at ChemSolutions. "These resources are designed to support teachers in creating engaging, safe, and effective learning experiences."\n\nThe educational materials cover a wide range of topics from basic chemical principles to advanced analytical techniques. Each experiment guide includes detailed instructions, safety information, discussion questions, and connections to real-world applications.\n\nIn addition to the online resources, ChemSolutions is launching a grant program to provide chemical supplies to schools in underserved communities. The program aims to ensure that all students have access to high-quality laboratory experiences regardless of their school\'s budget constraints.',
    date: '2025-04-15',
    category: 'Education',
    image: '/placeholder.svg',
    author: 'Dr. Robert Lee'
  },
  {
    id: 6,
    title: 'ChemSolutions to Present at International Chemistry Symposium',
    excerpt: 'Our research team will present new findings on catalytic efficiency improvements at the upcoming International Chemistry Symposium in Zurich.',
    content: 'ChemSolutions is proud to announce that our research team will be presenting significant new findings on catalytic efficiency improvements at the prestigious International Chemistry Symposium in Zurich, Switzerland next month.\n\nThe presentation, titled "Novel Approaches to Enhancing Catalytic Efficiency Through Surface Modification," will detail the company\'s recent breakthroughs in improving the performance and longevity of industrial catalysts. This research has potential applications across multiple industries, including pharmaceutical manufacturing, petrochemicals, and environmental remediation.\n\n"This symposium represents an excellent opportunity to share our innovations with the global scientific community," said Dr. James Wilson, Head of Research at ChemSolutions. "Our findings suggest that these modified catalysts could reduce energy requirements and waste production in several key industrial processes."\n\nThe International Chemistry Symposium is one of the most respected gatherings in the field, bringing together thousands of researchers, industry professionals, and academic leaders from around the world. ChemSolutions\' participation highlights the company\'s growing role in advancing chemical research and development.',
    date: '2025-04-08',
    category: 'Research',
    image: '/placeholder.svg',
    author: 'Dr. James Wilson'
  },
];

const categories = [
  { name: 'All Categories', value: 'all' },
  { name: 'Products', value: 'Products' },
  { name: 'Company', value: 'Company' },
  { name: 'Research', value: 'Research' },
  { name: 'Business', value: 'Business' },
  { name: 'Education', value: 'Education' },
];

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Chemical Industry News</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Stay informed about the latest developments in the chemical industry, company updates, 
            and innovative research in the field of chemistry.
          </p>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
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
                <p className="text-sm text-gray-500 mt-2">
                  By {item.author}
                </p>
              </CardContent>
              
              <CardFooter>
                <Link to={`/news/${item.id}`} className="w-full">
                  <Button variant="outline" className="w-full">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No news found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default News;
