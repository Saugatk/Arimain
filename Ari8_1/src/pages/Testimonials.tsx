import React from 'react';
import { Star, Quote, Users, Award, ThumbsUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer Thompson',
      role: 'CTO',
      company: 'TechCorp Solutions',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
      quote: "Aricia Labs transformed our digital infrastructure with their innovative solutions. Their team's expertise and dedication to excellence exceeded our expectations.",
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'Innovation Dynamics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      quote: 'Working with Aricia Labs was a game-changer for our business. Their AI-powered solutions helped us achieve unprecedented growth and efficiency.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Product Manager',
      company: 'Digital First',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
      quote: "The team at Aricia Labs doesn't just deliver projects; they deliver results. Their attention to detail and commitment to quality is outstanding.",
      rating: 5
    },
    {
      name: 'David Rodriguez',
      role: 'Director of Operations',
      company: 'Global Systems Inc.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
      quote: "From concept to execution, Aricia Labs demonstrated exceptional professionalism and technical expertise. They're truly partners in our success.",
      rating: 5
    },
    {
      name: 'Emily Chang',
      role: 'Marketing Director',
      company: 'Brand Innovators',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400',
      quote: 'The e-commerce platform Aricia Labs built for us has dramatically improved our online presence and sales performance.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Head of IT',
      company: 'Enterprise Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      quote: 'Their cybersecurity solutions have given us peace of mind and protected our digital assets. Highly recommended!',
      rating: 5
    }
  ];

  const stats = [
    {
      icon: <Users className="h-12 w-12 text-primary mb-4" />,
      number: '500+',
      label: 'Happy Clients',
      description: 'Trusted by businesses worldwide'
    },
    {
      icon: <Award className="h-12 w-12 text-primary mb-4" />,
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Based on post-project surveys'
    },
    {
      icon: <ThumbsUp className="h-12 w-12 text-primary mb-4" />,
      number: '200+',
      label: '5-Star Reviews',
      description: 'Across various platforms'
    },
    {
      icon: <Zap className="h-12 w-12 text-primary mb-4" />,
      number: '15+',
      label: 'Years Experience',
      description: 'Of delivering excellence'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <Star key={index} className="h-5 w-5 text-accent fill-current" />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-100">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-200" />
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-primary">{testimonial.role}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">The results speak for themselves</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                {stat.icon}
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-xl mb-8">
                  Let's create something amazing together and add your story to our wall of success.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
