import React from 'react';
    import { Link } from 'react-router-dom';
    import { ArrowLeft, Zap } from 'lucide-react';

    const ContentCreationCopywriting = () => {
      return (
        <div className="min-h-screen bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto">
            <Link to="/services" className="inline-flex items-center mb-6 text-primary hover:text-primary-dark transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Services
            </Link>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">📝 Content Creation & Copywriting Services – AriciaLabs</h1>
                <p className="text-gray-700">We create high-quality, engaging, and conversion-focused content tailored to your brand’s needs. Whether it’s SEO-driven blog posts, social media content, sales copy, or AI-powered writing, we craft words that attract, engage, and convert your audience.</p>
              </div>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📌 Content Creation Packages</h2>
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
                          Premium (Full-Scale Plan)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Platforms Covered
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1 Platform (Blog, Website, Social Media)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          2 Platforms
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          3-5 Platforms
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          SEO-Optimized Blog Posts
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          4 per month (800-1000 words)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          8 per month (1000-1500 words)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          12+ per month (1500-2000 words)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Social Media Captions & Posts
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          12 per month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          20 per month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          30+ per month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Short-Form Content (Reels, TikTok, Shorts Scripts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1 per month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          4 per month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          8+ per month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Long-Form Articles & Guides
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ❌
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          2 per month (2000+ words)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          4+ per month (3000+ words)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Hashtag & SEO Optimization
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Basic research
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI-optimized SEO & keyword strategy
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Advanced SEO & analytics tracking
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Content Scheduling & Posting
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Manual posting
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Automated scheduling
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Full AI-driven scheduling
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Email Newsletters & Marketing Copy
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          2 per month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          6 per month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          12+ per month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Price (रु)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु24,999/month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999/month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999/month
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">✍️ Copywriting & Persuasive Writing Services</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Basic
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Standard
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Premium
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Website Copywriting (Home, About, Services, Contact, etc.)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999 (Up to 4 pages)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (Up to 7 pages)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (Up to 10+ pages)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Sales Page & Landing Page Copy
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999 (Basic)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु34,999 (Advanced)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु64,999 (Full-funnel conversion copy)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Product Descriptions (Ecommerce, Amazon, Shopify, Dropshipping)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999 (20 descriptions)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (50 descriptions)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (100 descriptions)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Ad Copywriting (Facebook, Google, TikTok Ads, etc.)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999/month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999/month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Email Sequences (Welcome, Nurture, Sales, Follow-up, etc.)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999 (3 emails)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु34,999 (7 emails)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Full automated sequence)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Brand Story & About Us Page
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु9,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु34,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Lead Magnets & Free eBooks (For email marketing)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु24,999 (5-10 pages)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु44,999 (10-20 pages)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (20-50 pages)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎥 Video Content Creation & Scriptwriting</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Basic
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Standard
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Premium
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Short-Form Video Scripts (Reels, TikTok, Shorts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु9,999 (5 scripts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999 (10 scripts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु34,999 (20+ scripts)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          YouTube Video Scriptwriting
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999 (5-7 min videos)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (10-15 min videos)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (Full series, 15+ min videos)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI-Powered Video Scriptwriting & Editing
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999 (Basic AI script & edits)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999 (AI-driven script & visuals)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु69,999 (Full AI-powered content)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📈 SEO Content Strategy & Blog Writing</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Basic
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Standard
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Premium
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          SEO Blog Writing (Keyword-rich, engaging blogs)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु24,999 (4 blogs/month)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (8 blogs/month)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (12+ blogs/month)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI-Driven SEO Content Strategy
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ❌
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु34,999/month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु64,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Content Research & Topic Ideation
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ❌
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999/month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Guest Blogging & Backlink Content
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ❌
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (3 guest posts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (7 guest posts)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎁 Add-On Services (Custom Upgrades)</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Price (रु)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Plagiarism-Free AI-Written Content
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु9,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Fact-Checking & Editing for AI-Generated Content
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Interactive & Visual Content Creation (Infographics, Data Stories)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु24,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          YouTube Video Descriptions & Tags Optimization
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु9,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          LinkedIn Ghostwriting & Personal Branding
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Full AI-Powered Social Media Automation
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु34,999/month
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Additional Details Section */}
              <div className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔥 Why Choose AriciaLabs for Content & Copywriting?</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>✅ <b>High-Quality, Engaging Content</b> – We create content that attracts, retains, and converts audiences.</li>
                  <li>✅ <b>SEO & AI-Powered Optimization</b> – Content that ranks, drives traffic, and boosts visibility.</li>
                  <li>✅ <b>Brand-Focused & Persuasive Writing</b> – Customized messaging for your target audience.</li>
                  <li>✅ <b>Scalable & Affordable Plans</b> – Premium content creation at competitive rates.</li>
                  <li>✅ <b>End-to-End Content Strategy</b> – From research to publishing, we handle everything!</li>
                </ul>
              </div>

              <div className="px-6 py-4">
                <p className="text-center text-gray-700">🚀 Let’s create content that drives real results! Contact AriciaLabs today! 🎯</p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default ContentCreationCopywriting;
