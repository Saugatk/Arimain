import React from 'react';
    import { Link } from 'react-router-dom';
    import { ArrowLeft, Zap } from 'lucide-react';

    const SocialMediaManagement = () => {
      return (
        <div className="min-h-screen bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto">
            <Link to="/services" className="inline-flex items-center mb-6 text-primary hover:text-primary-dark transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Services
            </Link>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">🔥 Social Media Management Services – AriciaLabs</h1>
                <p className="text-gray-700">We help businesses and influencers scale their brand, boost engagement, and generate revenue through expert social media management, AI automation, and content creation.</p>
              </div>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📌 Social Media Management Packages</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Basic (Starter Growth)
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Standard (Best Value)
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Premium (Full-Scale Management)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Platforms Managed
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1 Platform (FB, IG, TikTok, etc.)
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
                          Content Strategy & Planning
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Standard
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI-powered analytics
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Full data-driven strategy
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Content Creation
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          12 posts, 8 stories per month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          20 posts, 15 stories per month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          30+ posts, 25+ stories per month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Short-Form Videos (Reels, TikToks, Shorts)
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
                          Graphics & Carousel Posts
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          3 per month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          6 per month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          10 per month
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
                          AI-optimized SEO & hashtag strategy
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Advanced SEO-driven content optimization
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
                          Community Engagement & Management
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Basic engagement (comments, basic DMs)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Active engagement (DMs, replies, audience growth)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Full engagement (DMs, proactive interactions, engagement strategy)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Analytics & Growth Reports
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Monthly report
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Bi-weekly insights & strategy adjustment
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Weekly performance & full growth tracking
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Paid Ad Campaign Setup & Management
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ❌
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Basic ad setup & optimization
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Full ad management (Meta, Google, TikTok)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Influencer & UGC Management
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ❌
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ❌
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ✅ Full outreach & collaboration
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
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔗 Social Media & Marketing Automation</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Basic (Essential Automation)
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Standard (High Engagement)
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Premium (Full AI Control)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Instagram & TikTok Automation (AI-driven posting, engagement, DMs, auto-replies)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु24,999 (Scheduled posts, auto-comments)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (AI-generated captions, DM automation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (Full AI-powered engagement, audience targeting)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI Content Generation (For Blogs, Ads, Social Media)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु34,999 (Basic AI content, 10 posts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु64,999 (Advanced AI content, 20+ posts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु99,999 (Full AI-powered content marketing, auto-updates)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI Video Creation & Editing (Automated AI-driven short-form video generation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (Basic AI editing, captions)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु54,999 (AI-generated TikTok & Reels content)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (Full AI-powered video marketing strategy)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI-Driven Hashtag & Trend Analysis
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
                          Social Listening & Competitor Monitoring
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ❌
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999/month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI-Generated Social Media Captions & Scripts
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
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📈 Advanced Growth & Advertising Solutions</h2>
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
                          Facebook & Instagram Ads
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999/month
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
                          TikTok & YouTube Ads
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु24,999/month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु44,999/month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Google Ads & PPC Campaigns
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999/month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999/month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु89,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Retargeting & Conversion Optimization
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ❌
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999/month
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु74,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Influencer Outreach & Partnership Deals
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ❌
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ❌
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु99,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Affiliate & Referral Program Setup
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          ❌
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु44,999 (one-time setup)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु74,999 (ongoing management)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Custom Social Media Strategies & Consulting</h2>
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
                          1-on-1 Social Media Growth Consultation
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999 per session
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Full Brand & Social Media Strategy Development
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Social Media Content Calendar Planning (3-month plan)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Viral Growth Hacking Strategy Development
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु34,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Personal Branding Consultation (LinkedIn, Instagram)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु24,999
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🛠️ Add-On Services (Custom Upgrades)</h2>
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
                          Paid Ad Campaigns (Meta, Google, TikTok, LinkedIn)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Starting at रु19,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI-Powered Chatbots for Social Media
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Reputation Management & Crisis Handling
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु9,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Short-Form Video Editing (Reels, TikToks, Shorts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु12,999/month
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          LinkedIn Lead Generation & Personal Branding
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु17,999/month
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
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔥 Why Choose AriciaLabs for Social Media Growth?</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>✅ <b>AI & Data-Driven Strategies</b> – We use automation tools for faster and smarter growth.</li>
                  <li>✅ <b>Engagement That Converts</b> – We don’t just post; we interact and build loyal followers.</li>
                  <li>✅ <b>High-Quality Content</b> – From reels to carousel posts, we make your brand stand out.</li>
                  <li>✅ <b>Affordable & Scalable</b> – Get agency-level social media management at competitive rates.</li>
                  <li>✅ <b>End-to-End Management</b> – Strategy, execution, automation, and growth – all in one place!</li>
                </ul>
              </div>

              <div className="px-6 py-4">
                <p className="text-center text-gray-700">🚀 Ready to level up your social media? Let’s grow your brand today! 🎯</p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default SocialMediaManagement;
