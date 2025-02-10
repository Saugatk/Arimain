import React from 'react';
    import { Code, Database, Layout, Smartphone, Cloud, Shield, ArrowRight, Zap } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const Services: React.FC = () => {
      const services: Array<{
        icon: JSX.Element;
        title: string;
        description: string;
        features: string[];
        link?: string;
      }> = [
        {
          icon: <Code className="h-8 w-8 text-primary" />,
          title: 'Web Development',
          description: 'Custom, high-performance websites built for speed, security, and an exceptional user experience tailored to business needs.',
          features: ['Corporate Websites', 'E-Commerce & Dropshipping Sites', 'Custom Web Solutions'],
          link: '/web-development'
        },
        {
          icon: <Smartphone className="h-8 w-8 text-primary" />,
          title: 'App Development (Coming Soon)',
          description: 'Future-ready mobile and web applications designed for seamless functionality and superior user experience.',
          features: ['iOS & Android App Development', 'Progressive Web Apps (PWAs)', 'Custom Business Applications'],
          link: '/app-development'
        },
        {
          icon: <Cloud className="h-8 w-8 text-primary" />,
          title: 'SaaS (Software as a Service)',
          description: 'Scalable, cloud-based software solutions that streamline business operations and enhance productivity.',
          features: ['Business Process Automation', 'Subscription-Based Platforms', 'AI-Powered SaaS Solutions'],
          link: '/saas'
        },
        {
          icon: <Zap className="h-8 w-8 text-primary" />,
          title: 'SEO & Digital Marketing Services',
          description: 'Comprehensive SEO and Digital Marketing strategies to enhance your online presence and drive traffic.',
          features: ['Search Engine Optimization', 'Social Media Marketing', 'PPC Campaigns', 'Email Marketing', 'Content Marketing'],
          link: '/seo-digital-marketing'
        },
        {
          icon: <Database className="h-8 w-8 text-primary" />,
          title: 'E-Commerce & Dropshipping',
          description: 'End-to-end online store development with AI-powered automation for seamless product management and sales.',
          features: ['Shopify, WooCommerce, & Custom Stores', 'AI-Powered Product Listing & Automation', 'Payment Gateway & Logistics Integration'],
          link: '/ecommerce-dropshipping'
        },
        {
          icon: <Shield className="h-8 w-8 text-primary" />,
          title: 'Automation & AI Integration',
          description: 'Transforming businesses with AI-driven automation tools to optimize workflows and reduce manual work.',
          features: ['AI Chatbots & Virtual Assistants', 'CRM & Business Automation', 'Data Analytics & AI Insights'],
          link: '/automation-ai-integration'
        },
        {
          icon: <Layout className="h-8 w-8 text-primary" />,
          title: 'Social Media Management',
          description: 'Strategic social media growth and engagement across Instagram, Facebook, TikTok, and LinkedIn.',
          features: ['Content Creation & Scheduling', 'Audience Growth & Engagement', 'Paid Ad Campaigns & Brand Awareness'],
          link: '/social-media-management'
        },
        {
          icon: <Code className="h-8 w-8 text-primary" />,
          title: 'Content Creation & Copywriting',
          description: 'Compelling content and copywriting services that attract, engage, and convert your audience.',
          features: ['Blog Writing & Website Content', 'Product Descriptions & Sales Copy', 'Email & Ad Copywriting'],
          link: '/content-creation-copywriting'
        },
        {
          icon: <Database className="h-8 w-8 text-primary" />,
          title: 'Branding & UI/UX Design',
          description: 'Professional branding and user interface design to create visually stunning, high-converting digital experiences.',
          features: ['Logo & Brand Identity Design', 'Website & Mobile App UI/UX', 'Graphic Design & Marketing Assets'],
          link: '/branding-uiux-design'
        },
        {
          icon: <Zap className="h-8 w-8 text-primary" />,
          title: 'Business Consultancy & Digital Strategy',
          description: 'Expert consulting on business automation, scaling, and online presence to drive long-term success.',
          features: ['Digital Transformation Strategies', 'Business Process Optimization', 'Market Research & Growth Planning'],
          link: '/business-consultancy-digital-strategy'
        }
      ];

      return (
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="hero-gradient text-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                <p className="text-xl text-gray-100">
                  Comprehensive technology solutions tailored to your business needs
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link || '#'}
                    className="bg-white rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-shadow"
                    style={{ display: 'block' }}
                  >
                    <div className="p-8">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <ArrowRight className="h-4 w-4 text-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Process</h2>
                <p className="text-xl text-gray-600">How we deliver exceptional results</p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: '01', title: 'Discovery', description: 'Understanding your needs and objectives' },
                  { number: '02', title: 'Strategy', description: 'Developing a comprehensive solution plan' },
                  { number: '03', title: 'Development', description: 'Building your solution with precision' },
                  { number: '04', title: 'Delivery', description: 'Launching and supporting your success' }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-primary rounded-2xl text-white p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="max-w-3xl mx-auto text-center">
                    <Zap className="h-16 w-16 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Ready to Start Your Project?
                    </h2>
                    <p className="text-xl mb-8">
                      Let's discuss how we can help you achieve your technology goals.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    };

    export default Services;
