import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BusinessConsultancyDigitalStrategy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto">
        <Link to="/services" className="inline-flex items-center mb-6 text-primary hover:text-primary-dark transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </Link>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">💼 Business Consultancy & Digital Strategy – AriciaLabs</h1>
            <p className="text-gray-700">At AriciaLabs, we specialize in business consultancy and digital strategy to help your business thrive in today’s dynamic digital landscape. Our strategies focus on growth, scalability, digital transformation, and competitive advantage, ensuring you have a roadmap for long-term success.</p>
          </div>

          <section className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📌 Business Consultancy Packages</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Starter Plan)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Growth Plan)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Transformation Plan)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Business Strategy & Planning
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Initial Business Assessment
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Strategic Growth Plan
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Comprehensive Business Strategy (3+ Months)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Market Research & Competitive Analysis
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      ❌
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Industry & Competitor Insights
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Full Market Research Report with Recommendations
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Financial & Budgeting Consultation
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      ❌
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Budgeting & Cash Flow Strategy
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Full Financial Management & Forecasting
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Business Process Optimization
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      ❌
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Process Improvement Plan
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Full Business Process Re-engineering
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Growth & Scaling Strategy
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      ❌
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Scaling Strategy Plan
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Full-scale Growth Strategy (Expansion & Automation)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📈 Digital Strategy Packages</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Digital Start)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Growth Digital Strategy)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Digital Strategy)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Digital Transformation Strategy
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      ❌
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Website & Mobile Optimization
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Full Digital Overhaul with AI Integration
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Digital Marketing Strategy
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Digital Marketing Plan (1 Channel)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Multi-Channel Strategy (SEO, PPC, Social Media)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Complete Digital Marketing Funnel & Strategy
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Content Strategy & Creation
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Basic Content Plan (Blogging)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Content Calendar & Creation Plan
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Full-Scale Content Strategy with Video, SEO, & Automation
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      E-Commerce Strategy
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      ❌
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Basic E-Commerce Funnel
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Full E-Commerce Strategy & Growth Plan (Multi-Platform)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Social Media Strategy
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Basic Social Strategy (1 Platform)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced Social Strategy (3 Platforms)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Full Social Media Ecosystem (Strategy, Analytics, and Growth)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Add-On Services (Custom Upgrades)</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Business Process Automation: रु24,999</li>
              <li>Advanced Analytics & Reporting: रु19,999</li>
              <li>Custom Financial Strategy: रु14,999</li>
              <li>Market Research & Insights Reports: रु19,999</li>
              <li>Brand Positioning & Niche Analysis: रु14,999</li>
            </ul>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">💡 Why Choose AriciaLabs for Business Consultancy & Digital Strategy?</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>✅ Strategic Growth Focus – We provide actionable insights and a path for accelerating growth and business development.</li>
              <li>✅ Expert Digital Solutions – With our expert digital strategies, we optimize every channel for sustainable growth and expansion.</li>
              <li>✅ Data-Driven & Analytical Approach – We utilize advanced analytics to monitor performance and optimize for maximum returns.</li>
              <li>✅ Tailored Solutions – Every strategy is customized to your business’s unique needs, ensuring relevance and long-term impact.</li>
              <li>✅ Comprehensive Business Consultancy – Full-spectrum solutions from market research to scaling, so your business can flourish.</li>
            </ul>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 Get in Touch for a Consultation!</h2>
            <p className="text-gray-700">📞 Let’s discuss how AriciaLabs can help your business achieve its goals through digital strategies and expert consultancy. Reach out today! 🌟</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessConsultancyDigitalStrategy;