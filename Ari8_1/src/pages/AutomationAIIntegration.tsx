import React from 'react';
    import { Link } from 'react-router-dom';
    import { ArrowLeft, Zap } from 'lucide-react';

    const AutomationAIIntegration = () => {
      return (
        <div className="min-h-screen bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto">
            <Link to="/services" className="inline-flex items-center mb-6 text-primary hover:text-primary-dark transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Services
            </Link>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">🔥 Automation & AI Integration – AriciaLabs</h1>
                <p className="text-gray-700">We provide cutting-edge automation and AI-powered solutions to help businesses streamline operations, boost efficiency, and maximize profitability. Our services cover everything from workflow automation to AI-driven decision-making.</p>
              </div>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 Business Process Automation (BPA)</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Basic (Starter Automation)
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
                          CRM & Sales Automation (Lead tracking, automated follow-ups, AI-driven insights)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू39,999 (Basic CRM setup, email automation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू69,999 (Lead scoring, AI follow-ups, reporting)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू99,999 (Fully automated sales pipeline, AI-driven decisions)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Workflow Automation (Zapier, Make, Custom API) (Automate repetitive tasks and increase efficiency)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू29,999 (Basic workflows, 5+ automated tasks)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू54,999 (Advanced workflows, multi-step automation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू89,999 (Enterprise automation, custom API integrations)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          HR & Recruitment Automation (AI-powered resume screening, chatbot interviews, candidate tracking)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू34,999 (Basic AI resume filtering)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू59,999 (Automated interviews, email sequences)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू94,999 (Full HR automation, onboarding AI, performance tracking)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Customer Support Automation (AI Chatbots & Live Chat Integration)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू24,999 (Basic chatbot, FAQ automation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू49,999 (AI-powered chatbot, NLP processing, 24/7 support)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू79,999 (Full AI-driven customer support, sentiment analysis, real-time escalation)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🤖 AI-Powered Business Solutions</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Basic AI Integration
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Advanced AI Integration
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Enterprise AI Solutions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI Chatbots & Virtual Assistants (For customer support, booking systems, lead generation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू39,999 (Simple AI chatbot, rule-based)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू69,999 (Advanced NLP, multi-channel integration)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू99,999 (Full AI assistant, voice support, analytics)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI-Powered Analytics & Insights (Predictive analytics, sales forecasting, data automation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू49,999 (Basic AI reports, trend analysis)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू79,999 (Machine learning insights, custom dashboards)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू129,999 (Enterprise-level AI analytics, predictive modeling)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI-Powered Product Recommendations (For e-commerce & dropshipping businesses)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू34,999 (Basic recommendations, manual setup)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू64,999 (AI-based recommendations, A/B testing)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू99,999 (Real-time AI learning, behavioral tracking, dynamic pricing)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI Email Marketing & Lead Nurturing (Automated email personalization, AI copywriting, audience segmentation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू29,999 (Basic automation, drip campaigns)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू59,999 (AI content generation, behavior-based emails)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू89,999 (Full AI personalization, predictive engagement scoring)
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
                          रू24,999 (Scheduled posts, auto-comments)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू49,999 (AI-generated captions, DM automation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू79,999 (Full AI-powered engagement, audience targeting)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI Content Generation (For Blogs, Ads, Social Media) (SEO-optimized AI-generated content)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू34,999 (Basic AI content, 10 posts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू64,999 (Advanced AI content, 20+ posts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू99,999 (Full AI-powered content marketing, auto-updates)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI Video Creation & Editing (Automated AI-driven short-form video generation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू29,999 (Basic AI editing, captions)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू54,999 (AI-generated TikTok & Reels content)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू79,999 (Full AI-powered video marketing strategy)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">💰 Finance & Accounting Automation</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Basic Automation
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Advanced Automation
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Enterprise Automation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Automated Invoice & Billing System (AI-based invoice tracking, reminders, fraud detection)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू24,999 (Basic invoicing, reminders)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू49,999 (Full automation, tax calculations)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू79,999 (AI fraud detection, predictive financial analysis)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Payroll & Expense Automation (AI-powered payroll management, auto-expense tracking)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू34,999 (Basic payroll automation)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू64,999 (AI-driven tracking, real-time expense insights)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू99,999 (Full AI-driven financial automation, forecasting)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Stock & Inventory Automation (For e-commerce & dropshipping businesses)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू29,999 (Basic inventory tracking)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू54,999 (AI-powered demand prediction)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रू79,999 (Real-time stock updates, dynamic pricing)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Custom AI & Automation Solutions</h2>
                <p className="text-gray-700">💡 Need a custom AI-powered automation solution? We offer custom AI model development, API integrations, and full-scale business automation to fit your needs.</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>📌 Custom AI Development Starts at: रू149,999+</li>
                  <li>📌 API & Custom Integration Starts at: रू49,999+</li>
                  <li>📌 Enterprise AI Solutions (LLM, Custom Chatbots, Predictive Models): रू199,999+</li>
                </ul>
              </section>

              {/* Additional Details Section */}
              <div className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔥 Why Choose AriciaLabs for AI & Automation?</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>✅ <b>AI-Powered Efficiency</b> – Work smarter, not harder</li>
                  <li>✅ <b>Automation Experts</b> – Save time, reduce costs, and scale faster</li>
                  <li>✅ <b>Custom Solutions</b> – Tailored AI & automation to fit your business</li>
                  <li>✅ <b>High ROI</b> – Maximize revenue with AI-driven strategies</li>
                  <li>✅ <b>Full Support</b> – From setup to scaling, we handle everything</li>
                </ul>
              </div>

              <div className="px-6 py-4">
                <p className="text-center text-gray-700">🚀 Let’s Automate & Scale Your Business Today!</p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default AutomationAIIntegration;
