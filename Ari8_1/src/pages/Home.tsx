import React from 'react';
    import { ArrowRight, Zap, Shield, Users, Award, Lock, Globe, Cpu, Server, Code, Database } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const Home = () => {
      const techPartners = [
        { name: 'AWS Advanced Partner', logo: 'https://images.unsplash.com/photo-1702661768284-ea096e1dc6a3?auto=format&fit=crop&q=80&w=200' },
        { name: 'Microsoft Gold Partner', logo: 'https://images.unsplash.com/photo-1702661768259-3c6a3?auto=format&fit=crop&q=80&w=200' },
        { name: 'Google Cloud Partner', logo: 'https://images.unsplash.com/photo-1702661768312-ea096e1dc6a3?auto=format&fit=crop&q=80&w=200' },
        { name: 'Salesforce Partner', logo: 'https://images.unsplash.com/photo-1702661768334-ea096e1dc6a3?auto=format&fit=crop&q=80&w=200' }
      ];

      const certifications = [
        { icon: <Shield className="h-8 w-8" />, name: 'ISO 27001 Certified', description: 'Information Security Management' },
        { icon: <Lock className="h-8 w-8" />, name: 'SOC 2 Type II', description: 'Security & Privacy Controls' },
        { icon: <Globe className="h-8 w-8" />, name: 'GDPR Compliant', description: 'Data Protection Standards' },
        { icon: <Shield className="h-8 w-8" />, name: 'HIPAA Compliant', description: 'Healthcare Data Security' }
      ];

      const technologies = [
        { icon: <Cpu className="h-6 w-6" />, name: 'AI & Machine Learning' },
        { icon: <Server className="h-6 w-6" />, name: 'Cloud Infrastructure' },
        { icon: <Code className="h-6 w-6" />, name: 'Modern Web Tech' },
        { icon: <Database className="h-6 w-6" />, name: 'Big Data Analytics' },
        { icon: <Shield className="h-6 w-6" />, name: 'Cybersecurity' },
        { icon: <Globe className="h-6 w-6" />, name: 'IoT Solutions' }
      ];

      const features = [
        {
          icon: <Zap className="h-8 w-8 text-primary" />,
          title: 'Innovative Solutions',
          description: 'We leverage the latest AI, automation, and digital transformation strategies to create cutting-edge solutions that drive efficiency, scalability, and long-term success for your business.'
        },
        {
          icon: <Shield className="h-8 w-8 text-primary" />,
          title: 'Proven Expertise',
          description: 'With years of experience in web development, SaaS, e-commerce, branding, and automation, we have successfully delivered high-impact solutions for businesses across multiple industries.'
        },
        {
          icon: <Users className="h-8 w-8 text-primary" />,
          title: 'Client-Focused',
          description: 'Your success is our top priority. We offer personalized strategies, dedicated support, and long-term partnership to ensure your business thrives in the digital landscape.'
        },
        {
          icon: <Award className="h-8 w-8 text-primary" />,
          title: 'Results-Driven Strategies',
          description: 'We don’t just create solutions—we engineer growth-driven results that help you scale, optimize operations, and maximize profitability.'
        },
	      {
          icon: <Award className="h-8 w-8 text-primary" />,
          title: 'End-to-End Digital Transformation',
          description: 'From branding to automation, AI integration, and business strategy, we provide everything you need to elevate your business and stay ahead of the competition.'
        }
      ];

      return (
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="hero-gradient text-white min-h-[90vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-6xl font-bold font-montserrat leading-tight">
                    Innovating Tomorrow's Solutions Today
                  </h1>
                  <p className="text-xl text-gray-100">
                    At Aricia Labs, we transform complex challenges into elegant solutions through cutting-edge technology and expertise.
                  </p>
                  <div className="flex space-x-4">
                    <Link to="/contact" className="btn-secondary">
                      Get Started
                    </Link>
                    <Link to="/services" className="flex items-center text-white hover:text-accent transition-colors">
                      Our Services <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                    alt="Innovation"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Trust Badges Section */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-primary">{cert.icon}</div>
                    <div>
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm text-gray-600">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
<section className="section-padding bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Choose Aricia Labs?
      </h2>
      <p className="text-xl text-gray-600">
        We combine innovation with expertise to deliver exceptional results.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2L14 14L10 14L10 2L14 2Z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
        <p className="text-gray-600">
          Cutting-edge technology solutions tailored to your unique challenges.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2L14 14L10 14L10 2L14 2Z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Proven Expertise</h3>
        <p className="text-gray-600">
          Years of experience in delivering successful projects across industries.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2L14 14L10 14L10 2L14 2Z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Client-Focused</h3>
        <p className="text-gray-600">
          Your success is our priority, with dedicated support every step of the way.
        </p>
      </div>
    </div>
  </div>
</section>

          {/* Technology Stack Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Technology Expertise</h2>
                <p className="text-xl text-gray-600">Leveraging cutting-edge technologies for optimal solutions</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
                    <div className="text-primary mb-3">{tech.icon}</div>
                    <h3 className="font-semibold text-sm">{tech.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="section-padding bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { number: '5+', label: 'Satisfied Clients' },
                  { number: '10+', label: 'Projects Delivered' },
                  { number: '2+', label: 'Years Experience' },
                  { number: '98%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-gray-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industry Recognition Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Industry Recognition</h2>
                <p className="text-xl text-gray-600">Awards and accolades that validate our commitment to excellence</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
                  <p className="text-gray-600">Demonstrating our dedication to delivering outstanding results</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Client-Centric Approach</h3>
                  <p className="text-gray-600">Focused on your success with dedicated, personalized support at every step</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Proven Expertise</h3>
                  <p className="text-gray-600">Years of delivering successful projects across diverse industries, ensuring reliable outcomes.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise Partners Section */}
         <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Powering Growth with Cutting-Edge Technologies</h2>
      <p className="text-xl text-gray-600">Emphasizes innovation, scalability, and results-driven solutions.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
      {/* Adding the technologies list */}
      {[
        { name: 'AWS', description: 'Scalable cloud solutions' },
        { name: 'Google Cloud', description: 'Cloud-based technologies for growth' },
        { name: 'Microsoft Azure', description: 'Powerful cloud computing services' },
        { name: 'Salesforce', description: 'CRM and automation expertise' },
        { name: 'HubSpot', description: 'Inbound marketing & CRM solutions' },
        { name: 'Shopify', description: 'E-commerce platform optimization' },
        { name: 'WooCommerce', description: 'Customizable e-commerce solutions' },
        { name: 'Magento', description: 'Comprehensive e-commerce ecosystem' },
        { name: 'OpenAI', description: 'AI-driven business intelligence' },
        { name: 'TensorFlow', description: 'Machine learning and AI models' },
        { name: 'GPT', description: 'Cutting-edge language processing AI' },
      ].map((tech, index) => (
        <div key={index} className="p-6 flex items-center justify-center border border-gray-200 rounded-lg">
          <div className="text-center">
            <div className="font-semibold text-gray-800">{tech.name}</div>
            <div className="text-sm text-gray-600">{tech.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

          {/* CTA Section */}
          <section className="section-padding bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-white p-12 rounded-2xl shadow-xl">
                <Award className="h-16 w-16 text-accent mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Ideas into Reality?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Let's collaborate to build innovative solutions that drive your business forward.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </section>
        </div>
      );
    };

    export default Home;
