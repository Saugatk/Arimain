import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto">
        <Link to="/services" className="inline-flex items-center mb-6 text-primary hover:text-primary-dark transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </Link>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">App Development Pricing – AriciaLabs</h1>
            <p className="text-gray-700">We build high-quality, scalable, and user-friendly apps for businesses, startups, and individuals. Choose the right package based on your needs.</p>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 Standard Mobile Apps (For Personal Use, Small Businesses & Startups)</h2>
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
                      Personal App (For Portfolio, Blogs, Social Media Management, etc.)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू39,999 (Basic UI, 4-5 pages, contact form, social media links, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू54,999 (8 pages, animations, notifications, analytics, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू69,999 (10+ pages, custom UI/UX, offline mode, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Business App (For Showcasing Services, Appointments, and Branding)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू54,999 (Basic UI, 5 pages, contact form, Google Maps, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू74,999 (8 pages, user login, service booking, payments, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू94,999 (10+ pages, CRM integration, automation, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Social Networking App (For Community Building & Engagement)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू69,999 (User profiles, messaging, post-sharing, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू94,999 (Media uploads, likes/comments, group chats, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू129,999 (Live streaming, AI recommendations, end-to-end encryption, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🛒 E-commerce & Marketplace Apps (For Selling Products & Online Stores)</h2>
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
                      E-commerce App (For Selling Products Online – Shopify Alternative)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू74,999 (10 products, cart system, payment gateway, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू99,999 (30 products, categories, wishlist, order tracking, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू129,999 (Unlimited products, AI recommendations, push notifications, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Food Delivery App (Like Foodmandu, Uber Eats, Zomato, etc.)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू84,999 (Basic UI, restaurant listing, order system, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू119,999 (GPS tracking, user accounts, multiple vendors, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू149,999 (Real-time tracking, AI suggestions, driver dashboard, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Service Marketplace App (Like Fiverr, Upwork, UrbanClap, etc.)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू89,999 (Basic UI, service listings, contact forms, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू129,999 (User profiles, reviews, online payments, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू169,999 (Booking system, live chat, advanced analytics, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📅 Booking & Service-Based Apps (For Hospitals, Salons, Events, etc.)</h2>
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
                      Appointment Booking App (For Doctors, Salons, Clinics, etc.)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू69,999 (Simple booking system, calendar, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू94,999 (Automated reminders, payment system, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू124,999 (Video consultation, multi-provider support, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Event & Ticketing App (For Concerts, Conferences, Webinars, etc.)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू74,999 (Event listings, RSVP system, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू104,999 (Ticket purchase, QR code scanning, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू139,999 (Live streaming, real-time engagement, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Real Estate App (For Property Listings & Rentals)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू79,999 (Basic listings, search filters, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू109,999 (User accounts, virtual tours, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू139,999 (AI-powered recommendations, chatbots, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 Educational & Learning Apps (For Online Courses & E-Learning)</h2>
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
                      E-Learning App (Like Udemy, Coursera, etc.)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू84,999 (Course pages, quizzes, payment system, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू119,999 (Live classes, student progress tracking, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू159,999 (Full LMS system, AI tutoring, multi-instructor support, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Kids Learning App (For Fun & Interactive Learning)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू69,999 (Basic lessons, interactive quizzes, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू99,999 (Animated lessons, voice commands, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू139,999 (Augmented reality (AR) features, AI voice assistant, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">💡 AI-Powered & High-End Apps (For Advanced Use Cases)</h2>
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
                      AI Chatbot App (For Automated Customer Service & Assistance)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू89,999 (Basic chatbot, FAQ automation, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू124,999 (AI-powered chatbot, voice assistance, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू169,999 (Natural language processing, multi-channel support, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Healthcare & Fitness App (For Tracking Health & Workouts)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू79,999 (Basic health tracking, diet plans, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू109,999 (Workout programs, progress tracking, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू149,999 (AI health recommendations, wearables integration, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      FinTech & Banking App (For Payments, Crypto, Stock Trading, etc.)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू99,999 (Basic transactions, account management, 1-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू139,999 (Advanced security, multi-currency support, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रू199,999 (AI investment insights, blockchain integration, 3-month support)
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
              <li>🔹 <b>Bulk Order Discounts:</b> 10% off for clients ordering multiple apps or services.</li>
              <li>🔹 <b>Loyalty Discounts:</b> Returning clients get 5-15% off on future projects.</li>
              <li>🔹 <b>Maintenance Packages:</b> रू3,999/month for ongoing updates, security patches, and bug fixes.</li>
              <li>🔹 <b>Premium Hosting & Cloud Services:</b> Available for an additional fee based on client needs.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">💡 Why Choose AriciaLabs?</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>✅ <b>Modern & Scalable Apps:</b> Designed with the latest technologies.</li>
              <li>✅ <b>Secure & High-Performance:</b> Best security practices & fast load times.</li>
              <li>✅ <b>Affordable Yet Powerful:</b> Get premium features even in basic packages.</li>
              <li>✅ <b>Long-Term Support:</b> Free technical support for 1-3 months, based on package.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
