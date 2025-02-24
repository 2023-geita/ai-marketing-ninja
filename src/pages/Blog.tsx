
import React from 'react';
import { CalendarIcon, UserIcon, ArrowRightIcon } from 'lucide-react';
import Layout from '@/components/Layout';

const Blog = () => {
  const posts = [
    {
      title: "The Future of AI in Digital Marketing",
      excerpt: "Explore how artificial intelligence is revolutionizing the digital marketing landscape and what it means for businesses.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "AI & Technology"
    },
    {
      title: "Maximizing ROI with AI-Driven Campaign Optimization",
      excerpt: "Learn how AI-powered campaign optimization can significantly improve your marketing ROI through real-time adjustments.",
      author: "Michael Chen",
      date: "March 12, 2024",
      category: "Marketing Strategy"
    },
    {
      title: "The Role of Natural Language Processing in Content Creation",
      excerpt: "Discover how NLP is transforming content creation and enabling more effective communication with target audiences.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "Content Marketing"
    },
    {
      title: "Data Privacy in the Age of AI Marketing",
      excerpt: "Understanding the importance of maintaining data privacy while leveraging AI for marketing insights and automation.",
      author: "David Kumar",
      date: "March 8, 2024",
      category: "Privacy & Security"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog</h1>
            <p className="text-xl text-gray-600">
              Insights and perspectives on AI-driven marketing strategies and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights on AI marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-lg border border-gray-300 w-full sm:w-96"
              />
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const BlogPostCard = ({ 
  title, 
  excerpt, 
  author, 
  date,
  category 
}: { 
  title: string; 
  excerpt: string; 
  author: string;
  date: string;
  category: string;
}) => (
  <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="text-sm text-gray-500 mb-4">{category}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-6">{excerpt}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <UserIcon className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500">{author}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </div>
      <ArrowRightIcon className="w-5 h-5 text-gray-400" />
    </div>
  </div>
);

export default Blog;
