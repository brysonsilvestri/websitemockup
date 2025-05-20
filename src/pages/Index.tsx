
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import NewsPreview from '@/components/home/NewsPreview';
import QuoteCTA from '@/components/home/QuoteCTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <FeaturedProducts />
      <NewsPreview />
      <QuoteCTA />
    </Layout>
  );
};

export default Index;
