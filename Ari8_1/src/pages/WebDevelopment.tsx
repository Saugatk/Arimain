import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto">
        <Link to="/services" className="inline-flex items-center mb-6 text-primary hover:text-primary-dark transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </Link>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Web Development Pricing – AriciaLabs</h1>
            <p className="text-gray-700">Choose the right package based on your needs. All websites include modern design, mobile responsiveness, SEO optimization, and basic support.</p>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 Standard Websites (For Personal Use, Blogs & Small Businesses)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Blog/Personal Website
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू18,999 (Simple blog, 3 pages, basic SEO, responsive design, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू24,999 (5 pages, advanced SEO, contact form, social media links, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू28,999 (7 pages, premium design, fast loading, security features, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Portfolio Website
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू24,999 (Showcase skills/work, 5 pages, contact form, social media integration, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू32,999 (8 pages, animations, testimonials, project gallery, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू38,999 (10+ pages, custom design, CMS integration, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Business Website
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू28,999 (Up to 5 pages, services showcase, Google Maps, contact form, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू39,999 (8 pages, blog section, lead capture, SEO optimization, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू49,999 (10+ pages, live chat, advanced analytics, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🛒 E-commerce & Advanced Websites (For Businesses & Selling Products Online)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      E-commerce Website
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू39,999 (Up to 10 products, cart system, payment integration, basic SEO, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू59,999 (Up to 30 products, advanced filtering, email marketing, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू84,999 (Unlimited products, AI recommendations, loyalty program, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Dynamic Website
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू44,999 (Basic user interactions, database integration, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू59,999 (User profiles, dashboards, admin panel, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू74,999 (Advanced automation, AI chatbots, custom solutions, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Educational Website
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू59,999 (Course pages, student login, quizzes, payment system, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू79,999 (Live classes, certification, assignments, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू104,999 (Full LMS system, instructor panels, subscriptions, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📅 Booking & Service-Based Websites (For Appointments & Events)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Event/Booking Website
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू39,999 (Event details, RSVP form, contact page, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू49,999 (Booking system, ticket purchase, email confirmations, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू64,999 (Custom calendar, automated reminders, SMS notifications, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Real Estate Website
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू44,999 (Property listings, contact forms, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू59,999 (Property search filters, agent profiles, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू79,999 (Virtual tours, mortgage calculator, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Job Portal Website
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू49,999 (Job listings, application forms, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू64,999 (User accounts, resume uploads, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू84,999 (AI job matching, employer dashboards, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Specialized & High-Value Websites (For Niche Businesses & Custom Needs)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Custom Web Application
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू49,999 (Basic functions, database integration, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू69,999 (User dashboards, automation, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू89,999 (AI features, high-performance APIs, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Multi-Language Website
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू39,999 (Two languages, basic translation, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू49,999 (Three languages, automatic translation, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू64,999 (Five+ languages, AI-powered translation, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Forum/Community Website
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू39,999 (User discussions, moderation tools, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू49,999 (Private groups, notifications, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू64,999 (Gamification, paid memberships, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📌 Marketing & Lead Generation (For Businesses Looking to Grow Online)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Social Media Integration
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू18,999 (Basic links, share buttons, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू22,999 (Live feeds, auto-posting, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू28,999 (Custom social campaigns, tracking, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Landing Page for Campaigns
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू14,999 (Single page, contact form, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू18,999 (A/B testing, lead capture, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू22,999 (SEO optimized, automated emails, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Mobile App Landing Page
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू18,999 (Simple design, app links, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू21,999 (Animations, testimonials, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू24,999 (Video integration, advanced tracking, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Details Section */}
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎁 Discounts & Upsells</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>🔹 <b>Bulk Order Discounts:</b> 10% off for clients ordering multiple websites or services.</li>
              <li>🔹 <b>Loyalty Discounts:</b> Returning clients get 5-15% off on future projects.</li>
              <li>🔹 <b>Maintenance Packages:</b> रू2,999/month for ongoing support, updates, and security.</li>
              <li>🔹 <b>Premium Hosting & Domain:</b> Available for an additional fee based on client needs.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📌 Why Choose AriciaLabs?</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>✅ <b>Transparent Pricing:</b> No hidden costs, you get exactly what you pay for.</li>
              <li>✅ <b>Premium Features at Every Level:</b> Even basic packages come with high-quality design.</li>
              <li>✅ <b>Flexible Payment Plans:</b> Split payments available for higher-tier packages.</li>
              <li>✅ <b>Dedicated Support:</b> Free technical support for the first 1-3 months, depending on the package.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
