import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Saas = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto">
        <Link to="/services" className="inline-flex items-center mb-6 text-primary hover:text-primary-dark transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </Link>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">SaaS Services Pricing – AriciaLabs</h1>
            <p className="text-gray-700">We provide cloud-based SaaS solutions designed to streamline operations, improve scalability, and drive business growth. Choose the package that best fits your business needs.</p>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 CRM Solutions (Customer Relationship Management)</h2>
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
                      Small Business CRM
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु39,999 (Lead management, contact storage, basic reports)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु59,999 (Automation, integrations, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु79,999 (Advanced reporting, AI insights, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Enterprise CRM
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु89,999 (Multi-user access, analytics, reporting)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु119,999 (Custom workflows, integrations, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु159,999 (Custom CRM design, AI-powered insights)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🛒 E-Commerce Solutions</h2>
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
                      Basic E-Commerce Platform
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु49,999 (Product management, basic checkout, payment gateway)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु74,999 (Discounts, product reviews, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु99,999 (Advanced product recommendations, analytics, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced E-Commerce Platform
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु89,999 (Subscription-based, advanced product management)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु119,999 (Multi-currency, multi-language, 3-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु149,999 (AI-powered marketing, integrations with third-party apps)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📅 Appointment & Scheduling Solutions</h2>
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
                      Appointment Scheduler (Small Business)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु34,999 (Calendar view, reminders, online booking)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु49,999 (Payment system, automated reminders, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु69,999 (Multi-provider support, group scheduling, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced Scheduling for Enterprises
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु79,999 (Advanced scheduling, team management)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु99,999 (Custom workflows, video conferencing integration)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु129,999 (AI scheduling assistant, multi-location support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 Learning Management Systems (LMS)</h2>
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
                      Basic LMS
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु59,999 (Course creation, quizzes, user management)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु89,999 (Live sessions, advanced reporting, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु119,999 (Custom course templates, gamification features)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Corporate LMS
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु119,999 (Employee training, certifications)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु159,999 (AI-powered learning paths, progress tracking)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु199,999 (Gamified learning, content personalization)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🧑‍💻 Collaboration & Project Management Tools</h2>
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
                      Task Management Tool
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु29,999 (Task creation, assignees, deadline tracking)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु49,999 (Collaborative boards, time tracking)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु69,999 (Advanced reporting, integrations, 2-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Project Management Tool
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु69,999 (Project timelines, team roles)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु99,999 (Budget tracking, milestone setting)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु129,999 (Advanced Gantt charts, resource management)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔐 Security & Authentication Solutions</h2>
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
                      Two-Factor Authentication (2FA)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु19,999 (SMS/email verification)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु29,999 (App-based authentication, reporting)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु39,999 (Biometric authentication, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced Security Suite
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु49,999 (Firewall, anti-malware)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु69,999 (Intrusion detection, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु89,999 (AI-based threat analysis, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">💼 HR & Payroll Systems</h2>
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
                      Employee Management System
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु39,999 (Employee database, attendance tracking)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु59,999 (Payroll processing, reporting)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु79,999 (HR analytics, advanced leave management)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Payroll & Benefits System
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु49,999 (Salary calculations, tax filing)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु79,999 (Benefits tracking, automated deductions)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु99,999 (Custom benefits, HR dashboard, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📊 Data Analytics Solutions</h2>
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
                      Basic Analytics Dashboard
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु39,999 (Basic KPIs, data visualization)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु59,999 (Advanced filters, custom reports)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु79,999 (Real-time analytics, predictive modeling)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced Data Analytics
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु79,999 (Big data processing, custom dashboards)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु99,999 (AI insights, deep learning algorithms)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु149,999 (Real-time streaming analytics, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🌐 Cloud Hosting Solutions</h2>
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
                      Cloud Storage Solution
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु19,999 (1 TB storage, basic security)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु29,999 (3 TB storage, backup features)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु49,999 (Unlimited storage, encryption)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Cloud Infrastructure Management
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु59,999 (Load balancing, firewall)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु89,999 (Auto-scaling, monitoring)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु129,999 (AI-driven optimizations, 24/7 support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📧 Email Marketing Automation</h2>
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
                      Email Campaigns
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु29,999 (Email templates, automation)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु49,999 (A/B testing, email segmentation)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु69,999 (Advanced analytics, personalization)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced Email Marketing Platform
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु69,999 (Drip campaigns, CRM integration)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु99,999 (Automated workflows, multi-channel support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु129,999 (AI-driven campaigns, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📱 Mobile App Backend as a Service (BaaS)</h2>
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
                      Basic BaaS
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु29,999 (Authentication, database)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु49,999 (Push notifications, storage)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु69,999 (Data analytics, AI insights)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced BaaS
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु69,999 (Custom APIs, advanced analytics)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु99,999 (Multi-platform support, 3-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु129,999 (AI-driven features, 6-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saas;
