import React from 'react';
    import { Link } from 'react-router-dom';
    import { ArrowLeft, Zap } from 'lucide-react';

    const BrandingUIUXDesign = () => {
      return (
        <div className="min-h-screen bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto">
            <Link to="/services" className="inline-flex items-center mb-6 text-primary hover:text-primary-dark transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Services
            </Link>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">🎨 Branding & UI/UX Design Services – AriciaLabs</h1>
                <p className="text-gray-700">We craft visually stunning, conversion-optimized, and user-centric brand identities and digital experiences. From logo design to full-scale UI/UX solutions, we ensure strong branding, intuitive interfaces, and seamless user experiences for your business.</p>
              </div>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📌 Branding & Identity Design Packages</h2>
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
                          Logo Design
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          2 Initial Concepts
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          4 Initial Concepts
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          6 Initial Concepts + Full Branding Guide
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Brand Color Palette & Typography
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Basic Color Scheme
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Advanced Palette + Font Pairing
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Full Brand Identity System
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Business Card & Letterhead Design
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          N/A
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Business Card Only
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Full Stationery Set (Card, Letterhead, Email Signature, Invoice)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Social Media Branding Kit (Profile, Cover, Templates)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          N/A
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Basic Set (3 Templates)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Full Set (10+ Templates)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Brand Mood Board & Visual Guidelines
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          N/A
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Included
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Included + Mockups & Usage Scenarios
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Brand Strategy & Voice Development
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          N/A
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          N/A
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Full Brand Messaging Strategy
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Price (रु)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु69,999
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎭 Logo Design & Brand Identity</h2>
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
                          Logo Design (Minimalist, Abstract, or Typography)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु9,999 (2 concepts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999 (4 concepts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु34,999 (6 concepts + branding guide)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Business Card Design
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु4,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु9,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Letterhead & Envelope Design
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु7,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु24,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Full Brand Guidelines (Logo, Colors, Typography, Icons, Visuals)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          N/A
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Social Media Brand Kit (Templates, Covers, Profile Graphics)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          N/A
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🖥️ UI/UX Design Services</h2>
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
                          Website UI/UX Design (Figma/Adobe XD)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु24,999 (1-page)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (3-5 pages)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999 (Full Website, 10+ pages)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Mobile App UI/UX Design (iOS & Android)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु34,999 (Basic)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु64,999 (Standard)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु99,999 (Full App Design)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Dashboard & Web App UI Design
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (Basic)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999 (Advanced)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु89,999 (Enterprise-Level)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Wireframing & Prototyping
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999 (Lo-Fi)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (Hi-Fi)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (Fully Interactive)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          User Journey & UX Research
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          N/A
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु59,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Design System & Components Library
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          N/A
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु79,999
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 AI-Powered Branding & UI/UX Solutions</h2>
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
                          AI-Generated Brand Concepts
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999 (3 AI drafts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु29,999 (5 AI drafts)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999 (Full AI-assisted branding)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI-Driven UI Wireframes
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999 (3 screens)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु39,999 (7 screens)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु69,999 (15+ screens)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Automated UX Research & Heatmap Analysis
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          N/A
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु24,999
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु49,999
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Custom Branding Strategy & Consultation</h2>
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
                          Brand Strategy Consultation (1-Hour Session)
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु9,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          UI/UX Audit & Website Review
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु14,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Competitive Brand Analysis & Market Research
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Custom Branding & UX Design Workshop
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु34,999
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
                          Extra Logo Concepts & Revisions
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु4,999/concept
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Additional Social Media Graphics
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु9,999 (5 posts)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Figma to HTML Conversion
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु24,999
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          AI-Generated UI Components & Templates
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          रु19,999
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Additional Details Section */}
              <div className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔥 Why Choose AriciaLabs for Branding & UI/UX Design?</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>✅ <b>Professional, Aesthetic & Modern Designs</b> – Unique, high-quality branding & UI/UX solutions.</li>
                  <li>✅ <b>User-Centric & Conversion-Focused</b> – Designs that enhance engagement & drive results.</li>
                  <li>✅ <b>AI-Powered & Data-Driven</b> – Optimized with the latest tools & technologies.</li>
                  <li>✅ <b>Customizable & Scalable Packages</b> – Tailored to fit your business needs & budget.</li>
                  <li>✅ <b>Full Brand & UI/UX Consultation</b> – Ensuring a seamless and impactful digital presence.</li>
                </ul>
              </div>

              <div className="px-6 py-4">
                <p className="text-center text-gray-700">🚀 Let’s build a brand and user experience that stands out! Contact AriciaLabs today! 🎯</p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default BrandingUIUXDesign;
