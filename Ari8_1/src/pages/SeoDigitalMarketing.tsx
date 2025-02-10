import React from 'react';
    import { Link } from 'react-router-dom';
    import { ArrowLeft, Zap } from 'lucide-react';

    const SeoDigitalMarketing = () => {
      return (
        <div className="min-h-screen bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto">
            <Link to="/services" className="inline-flex items-center mb-6 text-primary hover:text-primary-dark transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Services
            </Link>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">SEO and Digital Marketing Services – AriciaLabs</h1>
                <p className="text-gray-700">We offer a comprehensive suite of SEO and digital marketing services designed to elevate your online presence and drive sustainable growth. Choose the package that aligns with your business objectives.</p>
              </div>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 Search Engine Optimization (SEO)</h2>
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
                          On-Page SEO
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999 (Keyword optimization, meta tags, basic content improvement)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999 (Content structure optimization, advanced keyword research, internal linking)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Complete on-page audit, advanced SEO techniques, content optimization, 3-month reporting)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Off-Page SEO (Backlink Building)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (Quality backlinks, guest posts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (High DA backlinks, content marketing, outreach)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (Authority-building backlinks, influencer outreach, guest blogging, 3-month follow-up)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Local SEO
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु24,999 (Google My Business setup, local keyword optimization)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999 (Local citations, advanced geo-targeting, reviews optimization)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Advanced local link building, GMB management, local content strategy)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Technical SEO
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999 (Website speed optimization, mobile-friendliness check)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Crawlability, site architecture improvements, indexation fixes)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु89,999 (Advanced technical audit, schema markup, 3-month progress tracking)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          E-commerce SEO
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (Product page optimization, keyword research)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (Conversion rate optimization, product reviews, site structure)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु109,999 (Advanced site audits, product schema, multi-platform optimization)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🏆 Digital Marketing Services</h2>
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
                          Social Media Marketing
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (Account setup, basic posts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Content strategy, daily posts, engagement management)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु89,999 (Paid ads campaigns, analytics, influencer partnerships)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          PPC Campaigns (Pay-Per-Click)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999 (Google Ads, Bing Ads setup)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Keyword research, ad creation, bid management)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु89,999 (Advanced targeting, retargeting, A/B testing, 3-month optimization)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Email Marketing
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999 (Email campaign setup, basic templates)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999 (A/B testing, automation, segmentation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Personalized emails, advanced analytics, drip campaigns)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Content Marketing
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (Blog posts, article writing, content strategy)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (Guest blogging, backlink strategy, infographics)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु109,999 (Video content, interactive content, influencer content strategy)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Affiliate Marketing
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999 (Affiliate setup, basic tracking)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Commission structures, affiliate management, promotions)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (Advanced partnerships, multi-channel affiliate marketing, 3-month reporting)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Online Reputation Management
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (Monitoring brand mentions, responding to reviews)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (Social listening, review generation, crisis management)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु109,999 (Comprehensive reputation strategy, advanced crisis management)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📈 Analytics & Reporting</h2>
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
                          SEO & Marketing Analytics
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999 (Basic Google Analytics setup, keyword tracking)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999 (Advanced reporting, monthly traffic analysis)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Custom dashboards, goal tracking, competitor analysis)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Conversion Rate Optimization
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999 (Basic audit, CTA improvements)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Landing page optimization, A/B testing)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु89,999 (Advanced CRO, heatmaps, funnel optimization, 3-month follow-up)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Social Media Advertising (Paid Ads)</h2>
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
                          Facebook & Instagram Ads
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (Ad campaign setup, basic targeting)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (Advanced targeting, creative optimization)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (Full funnel ads, retargeting, monthly reporting)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Google Ads (Search & Display)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999 (Keyword research, ad copy creation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Advanced targeting, negative keywords, bid management)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु89,999 (Display network ads, YouTube ads, performance tracking)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          LinkedIn Ads
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (Ad setup, audience targeting)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु69,999 (Content & ad design, lead generation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु99,999 (Advanced targeting, lead nurturing, 3-month analytics)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📝 Content Creation & Branding</h2>
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
                          Brand Strategy
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (Logo design, color schemes, brand positioning)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (Brand voice, visual identity, brand guidelines)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (Full rebranding, marketing collateral, brand story development)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Creative Content Development
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999 (Graphics design, social media posts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999 (Video content, blog posts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Animated videos, custom illustrations, interactive content)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Video Marketing
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (Short videos for social media)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (YouTube ads, explainer videos)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु109,999 (Full-length videos, brand documentaries, 3-month analytics)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">💡 Influencer Marketing</h2>
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
                          Influencer Outreach
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (Identifying micro-influencers)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (Campaign management, content creation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु69,999 (End-to-end management, performance tracking, influencer collaborations)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Additional Details Section */}
              <div className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎁 Discounts & Upsells</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>🔹 <b>Bulk Order Discounts:</b> 10% off for clients ordering multiple services.</li>
                  <li>🔹 <b>Loyalty Discounts:</b> Returning clients get 5-15% off on future projects.</li>
                  <li>🔹 <b>Maintenance Packages:</b> रू4,999/month for ongoing support, updates, and reporting.</li>
                  <li>🔹 <b>Premium Analytics & Reporting:</b> Available for an additional fee based on client needs.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">💡 Why Choose AriciaLabs?</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>✅ <b>Data-Driven Strategies:</b> We leverage analytics to drive results.</li>
                  <li>✅ <b>Customized Solutions:</b> Tailored strategies to meet your unique business goals.</li>
                  <li>✅ <b>Transparent Reporting:</b> Clear and concise reports to track progress.</li>
                  <li>✅ <b>Dedicated Support:</b> Expert support to guide you every step of the way.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default SeoDigitalMarketing;
