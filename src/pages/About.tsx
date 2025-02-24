
import React from 'react';
import { BrainCircuitIcon, BuildingIcon, ShieldCheckIcon, UsersIcon } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Maui.ai</h1>
            <p className="text-xl text-gray-600">
              Revolutionizing marketing through advanced AI-driven insights, strategic planning, 
              and automated content creation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To revolutionize marketing by harnessing the power of artificial intelligence, 
                enabling businesses to make data-driven decisions and achieve unprecedented growth 
                through automated, intelligent marketing solutions.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To become the leading AI marketing agency, setting new standards for data-driven 
                marketing strategies and automated campaign optimization, while fostering innovation 
                in the marketing technology landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI-Driven Marketing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why AI-Driven Marketing?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<BrainCircuitIcon className="w-8 h-8" />}
                title="Advanced Analytics"
                description="Leverage deep learning algorithms for superior market analysis and insights."
              />
              <FeatureCard
                icon={<BuildingIcon className="w-8 h-8" />}
                title="Scalable Solutions"
                description="Grow your marketing efforts efficiently with automated systems."
              />
              <FeatureCard
                icon={<ShieldCheckIcon className="w-8 h-8" />}
                title="Data Security"
                description="Enterprise-grade security for all your marketing data and campaigns."
              />
              <FeatureCard
                icon={<UsersIcon className="w-8 h-8" />}
                title="Expert Support"
                description="Backed by a team of AI and marketing specialists."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ethical AI Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Our Ethical Commitment
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              We're committed to responsible AI development and ethical data practices, 
              ensuring transparency and privacy in all our operations.
            </p>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">GDPR and CCPA compliant data handling practices</p>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Transparent AI decision-making processes</p>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Regular security audits and updates</p>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Commitment to data privacy and protection</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    <div className="text-gray-900 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
