import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      client: 'Fashion Retail Co.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      description: 'Complete redesign and development of an e-commerce platform, resulting in a 45% increase in conversions.',
      tags: ['E-commerce', 'UI/UX', 'React', 'Node.js'],
      results: ['45% increase in conversions', '60% faster load times', '30% increase in mobile sales']
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      client: 'Data Analytics Corp',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      description: 'Development of an advanced analytics dashboard with AI-powered insights and predictions.',
      tags: ['AI/ML', 'Data Visualization', 'Python', 'React'],
      results: ['85% prediction accuracy', '50% faster reporting', '2M+ data points processed daily']
    },
    {
      title: 'Mobile Banking App',
      client: 'Digital Bank',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      description: 'Secure and user-friendly mobile banking application with advanced features and biometric authentication.',
      tags: ['Mobile', 'Security', 'React Native', 'Node.js'],
      results: ['4.8/5 app store rating', '500K+ downloads', '99.99% uptime']
    },
    {
      title: 'Supply Chain Management System',
      client: 'Global Logistics Inc.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      description: 'End-to-end supply chain management system with real-time tracking and predictive analytics.',
      tags: ['Enterprise', 'IoT', 'Cloud', 'Analytics'],
      results: ['30% cost reduction', '40% faster delivery times', '95% tracking accuracy']
    },
    {
      title: 'Healthcare Patient Portal',
      client: 'Medical Center Network',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      description: 'Secure patient portal for medical records, appointments, and telemedicine integration.',
      tags: ['Healthcare', 'Security', 'React', 'Node.js'],
      results: ['100K+ active users', 'HIPAA compliant', '50% reduced wait times']
    },
    {
      title: 'Smart City Infrastructure',
      client: 'Metropolitan Council',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800',
      description: 'IoT-based smart city infrastructure monitoring and management system.',
      tags: ['IoT', 'Big Data', 'Cloud', 'AI'],
      results: ['25% energy savings', 'Real-time monitoring', '40% maintenance cost reduction']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-100">
              Showcasing our most innovative and impactful projects
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="h-6 w-6 text-white hover:text-accent cursor-pointer transition-colors" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-primary font-semibold mb-3">{project.client}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                      >
                        <Tag className="h-4 w-4 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-gray-600">• {result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
