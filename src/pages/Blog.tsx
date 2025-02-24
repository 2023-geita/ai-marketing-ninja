
import React from 'react';
import Layout from '@/components/Layout';

const Blog = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Coming soon: Read our latest insights about AI-driven marketing strategies and industry trends.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
