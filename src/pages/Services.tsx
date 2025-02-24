
import React from 'react';
import { 
  SearchIcon, 
  BrainCircuitIcon, 
  PenToolIcon, 
  BarChart3Icon,
  CheckCircle2Icon
} from 'lucide-react';
import Layout from '@/components/Layout';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI-Powered Marketing Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Leverage advanced AI agents and deep analytics to transform your marketing strategy
              and achieve unprecedented growth.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {/* Market Research Service */}
            <ServiceSection
              id="research"
              icon={<SearchIcon className="w-12 h-12" />}
              title="AI-Driven Market Research & Profiling"
              description="Our advanced research agents collect and analyze data from multiple sources to provide comprehensive market insights."
              benefits={[
                "Real-time competitor analysis and tracking",
                "Deep consumer behavior insights",
                "Trend identification and prediction",
                "Sentiment analysis across social platforms"
              ]}
              details="Using Natural Language Processing and sentiment analysis, our AI agents process vast amounts of data to deliver actionable market intelligence. This enables you to understand your market position, identify opportunities, and stay ahead of trends."
            />

            {/* Strategic Planning Service */}
            <ServiceSection
              id="planning"
              icon={<BrainCircuitIcon className="w-12 h-12" />}
              title="Strategic Marketing Planning"
              description="Our Central Oracle Agent synthesizes market data to formulate comprehensive marketing strategies."
              benefits={[
                "Data-driven strategy development",
                "Risk assessment and mitigation",
                "Campaign performance forecasting",
                "Resource optimization recommendations"
              ]}
              details="The Central Oracle Agent combines market insights, historical data, and industry trends to create tailored marketing strategies. It continuously adapts plans based on real-time performance data and changing market conditions."
            />

            {/* Content Generation Service */}
            <ServiceSection
              id="content"
              icon={<PenToolIcon className="w-12 h-12" />}
              title="Automated Content Generation"
              description="Our network of AI blogger agents creates engaging, SEO-optimized content at scale."
              benefits={[
                "SEO-optimized content creation",
                "Multi-channel content adaptation",
                "Consistent brand voice maintenance",
                "Real-time content performance tracking"
              ]}
              details="Our AI agents generate high-quality, relevant content optimized for your target audience. From blog posts to social media content, we ensure consistent messaging while maintaining your brand's unique voice."
            />

            {/* Campaign Management Service */}
            <ServiceSection
              id="campaigns"
              icon={<BarChart3Icon className="w-12 h-12" />}
              title="Campaign Management & Optimization"
              description="Real-time campaign monitoring and optimization using advanced AI analytics."
              benefits={[
                "Automated performance tracking",
                "Real-time optimization",
                "Multi-channel campaign coordination",
                "ROI maximization"
              ]}
              details="Our AI system continuously monitors campaign performance across all channels, making real-time adjustments to optimize results. This ensures maximum ROI and consistent improvement in campaign effectiveness."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our AI-powered services can help you achieve your marketing goals.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ServiceSection = ({ 
  id,
  icon, 
  title, 
  description, 
  benefits,
  details 
}: { 
  id: string;
  icon: React.ReactNode; 
  title: string; 
  description: string;
  benefits: string[];
  details: string;
}) => (
  <div id={id} className="grid md:grid-cols-2 gap-12 items-start">
    <div>
      <div className="mb-6 text-gray-900">{icon}</div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-xl text-gray-600 mb-6">{description}</p>
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2Icon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
      <p className="text-gray-600 leading-relaxed">{details}</p>
    </div>
  </div>
);

export default Services;
