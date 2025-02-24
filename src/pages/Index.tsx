
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, TargetIcon, RobotIcon, RocketIcon } from 'lucide-react';
import Layout from '@/components/Layout';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full mb-4 reveal opacity-0">
              AI-Powered Marketing Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 reveal opacity-0">
              Transform Your Marketing with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 reveal opacity-0">
              Leverage the power of artificial intelligence to create data-driven, personalized marketing campaigns that deliver results.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-200 reveal opacity-0">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 reveal opacity-0">
              Why Choose Our AI-Driven Approach
            </h2>
            <p className="text-gray-600 reveal opacity-0">
              Experience the future of marketing with our cutting-edge AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<ChartBarIcon className="w-8 h-8" />}
              title="Data-Driven Insights"
              description="Leverage deep analytics and AI-powered insights to make informed decisions."
            />
            <FeatureCard
              icon={<TargetIcon className="w-8 h-8" />}
              title="Targeted Campaigns"
              description="Reach your ideal audience with precision through AI-optimized targeting."
            />
            <FeatureCard
              icon={<RobotIcon className="w-8 h-8" />}
              title="Automated Content"
              description="Generate engaging content at scale with our AI content engine."
            />
            <FeatureCard
              icon={<RocketIcon className="w-8 h-8" />}
              title="Scalable Growth"
              description="Achieve sustainable growth with our AI-powered marketing strategies."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 reveal opacity-0">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-gray-600 mb-8 reveal opacity-0">
                Let's discuss how our AI-powered solutions can help you achieve your marketing goals.
              </p>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-200 reveal opacity-0">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 reveal opacity-0">
    <div className="text-gray-900 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;
