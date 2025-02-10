import React from 'react';
    import { Link } from 'react-router-dom';
    import { ArrowLeft, Zap } from 'lucide-react';

    const EcommerceDropshipping = () => {
      return (
        <div className="min-h-screen bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto">
            <Link to="/services" className="inline-flex items-center mb-6 text-primary hover:text-primary-dark transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Services
            </Link>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">E-commerce & Dropshipping Solutions – AriciaLabs</h1>
                <p className="text-gray-700">💡 We build high-converting, fully automated, and scalable e-commerce and dropshipping businesses. Our solutions are tailored to help businesses launch, optimize, and scale sales globally.</p>
              </div>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 E-commerce Website Development (For Selling Physical & Digital Products)</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Basic (Starter Store)
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Standard (Best Value)
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Premium (Advanced Store)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Single-Product Store (Ideal for branded products, courses, or digital downloads)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू39,999 (1 product, landing page, payment gateway, 1-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू59,999 (Custom design, upsells, analytics, 2-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू89,999 (AI-powered sales funnel, automation, 3-month support)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Multi-Product Store (Small Business E-commerce)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू54,999 (10 products, cart system, secure checkout, 1-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू79,999 (30 products, categories, discount system, 2-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू119,999 (Unlimited products, AI recommendations, subscriptions, 3-month support)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Custom E-commerce Marketplace (Like Amazon, Etsy, etc.)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू99,999 (Basic UI, vendor accounts, commission system, 1-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू149,999 (Multi-vendor support, real-time tracking, 2-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू199,999 (AI-driven marketplace, automation, 3-month support)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📦 Dropshipping Business Setup (100% Automated & Scalable)</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Basic (Essential Setup)
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Standard (Best Value)
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Premium (Full Automation)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Shopify Dropshipping Store (Quick & easy launch for beginners)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू44,999 (10 products, branded design, payment setup, 1-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू69,999 (30 products, premium theme, sales automation, 2-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू99,999 (Full automation, AI-powered product research, 3-month support)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          WooCommerce Dropshipping Store (For WordPress users – More customization)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू39,999 (10 products, payment setup, 1-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू64,999 (30 products, conversion optimization, 2-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू94,999 (Full automation, upsells, email marketing, 3-month support)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Custom Dropshipping Store (For Any Niche – Full Control)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू74,999 (Basic store, 20 products, supplier setup, 1-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू99,999 (50 products, AI recommendations, analytics, 2-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू139,999 (100+ products, smart automation, scaling strategy, 3-month support)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 E-commerce & Dropshipping Growth Services (For Scaling Sales & Profits)</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Basic (Essential Growth)
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Standard (Best Value)
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Premium (Full Scaling)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Product Research & Niche Selection (Find winning products with data-driven research)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू9,999 (3 product recommendations, basic market analysis)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू19,999 (5+ products, competitor research, pricing strategy)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू29,999 (10+ products, AI-powered market prediction, demand forecast)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Conversion Rate Optimization (CRO) (Increase sales with optimized funnels & strategies)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू19,999 (Checkout optimization, abandoned cart recovery)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू39,999 (Landing page redesign, upsells, trust-building elements)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू69,999 (AI-driven heatmaps, dynamic pricing, A/B testing)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Automated Order Fulfillment Setup (Seamless backend automation for scaling)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू14,999 (Basic fulfillment integration)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू29,999 (Auto-ordering, tracking updates, supplier sync)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू49,999 (Full automation, AI-based order processing)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📊 E-commerce Advertising & Marketing (Paid Ads + Organic Growth)</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Basic (Starter Ads)
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Standard (High-ROI Strategy)
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Premium (Full Funnel Growth)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Facebook & Instagram Ads (For Dropshipping & E-commerce)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू24,999 (1 ad campaign, audience targeting, 1-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू44,999 (Retargeting, lookalike audiences, ad creatives, 2-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू74,999 (Multi-platform scaling, AI optimization, 3-month support)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Google Shopping Ads (For E-commerce Sales Boosting)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू29,999 (Basic setup, 1-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू54,999 (Conversion tracking, bid strategy, 2-month support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू89,999 (Advanced analytics, automation, 3-month support)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Influencer Marketing (For Niche Authority & Sales Boosting)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू19,999 (Micro-influencers, brand partnerships)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू39,999 (Influencer campaigns, affiliate marketing setup)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू69,999 (Viral influencer collaborations, TikTok growth strategy)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Additional Details Section */}
              <div className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎁 Exclusive Add-Ons & Upsells</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>🔹 <b>Bulk Order Discounts:</b> 10% off for clients ordering multiple services</li>
                  <li>🔹 <b>Ongoing Store Management:</b> रू9,999/month for updates, security, and optimizations</li>
                  <li>🔹 <b>Full Branding Package:</b> Logo, colors, brand identity, and marketing strategy (रू14,999)</li>
                  <li>🔹 <b>Private Label Dropshipping Setup:</b> रू49,999 (Branding, supplier connections, bulk inventory)</li>
                  <li>🔹 <b>AI-Powered Chatbot for Customer Support:</b> रू19,999 (Automated responses, 24/7 support)</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔥 Why Choose AriciaLabs?</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>✅ <b>Proven E-commerce & Dropshipping Experts</b> – Data-driven solutions for high sales</li>
                  <li>✅ <b>Scalable & Automated Solutions</b> – Reduce manual work, increase profits</li>
                  <li>✅ <b>High-Conversion Strategies</b> – Designed for maximum revenue</li>
                  <li>✅ <b>Affordable Yet Powerful Packages</b> – Best ROI for every budget</li>
                  <li>✅ <b>Long-Term Support & Growth Plans</b> – We help you scale beyond the launch</li>
                </ul>
              </div>

              <div className="px-6 py-4">
                <p className="text-center text-gray-700">🚀 Start & Scale Your E-commerce or Dropshipping Business Today!</p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default EcommerceDropshipping;
