
import React from 'react';
import { ArrowRightIcon, ChartBarIcon, UsersIcon, RocketIcon } from 'lucide-react';
import Layout from '@/components/Layout';

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Case Studies</h1>
            <p className="text-xl text-gray-600">
              Discover how our AI-driven marketing solutions have helped businesses achieve 
              remarkable growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <CaseStudyCard
              icon={<ChartBarIcon />}
              title="E-commerce Revenue Growth"
              industry="Retail"
              results={[
                "300% increase in conversion rate",
                "150% boost in organic traffic",
                "2.5x ROI improvement"
              ]}
            />
            <CaseStudyCard
              icon={<UsersIcon />}
              title="B2B Lead Generation"
              industry="Technology"
              results={[
                "200% increase in qualified leads",
                "45% reduction in cost per lead",
                "85% improvement in lead quality"
              ]}
            />
            <CaseStudyCard
              icon={<RocketIcon />}
              title="SaaS Market Expansion"
              industry="Software"
              results={[
                "400% growth in market reach",
                "65% increase in trial signups",
                "3x customer retention rate"
              ]}
            />
            <CaseStudyCard
              icon={<ChartBarIcon />}
              title="Brand Awareness Campaign"
              industry="Consumer Goods"
              results={[
                "250% increase in brand mentions",
                "180% growth in social engagement",
                "4x increase in organic reach"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our AI-powered marketing solutions can help transform your business.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const CaseStudyCard = ({ 
  icon, 
  title, 
  industry, 
  results 
}: { 
  icon: React.ReactNode; 
  title: string; 
  industry: string;
  results: string[];
}) => (
  <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="text-gray-900 mb-4">{icon}</div>
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">Industry: {industry}</p>
    </div>
    <div className="space-y-3">
      {results.map((result, index) => (
        <div key={index} className="flex items-start gap-3">
          <ArrowRightIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
          <p className="text-gray-700">{result}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CaseStudies;
