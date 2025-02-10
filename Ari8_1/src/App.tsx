import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import SeoDigitalMarketing from './pages/SeoDigitalMarketing';
    import Footer from './components/Footer';
    import Home from './pages/Home';
    import About from './pages/About';
    import Services from './pages/Services';
    import Portfolio from './pages/Portfolio';
    import Testimonials from './pages/Testimonials';
    import WebDevelopment from './pages/WebDevelopment';
    import AppDevelopment from './pages/AppDevelopment';
    import Saas from './pages/Saas';
    import EcommerceDropshipping from './pages/EcommerceDropshipping';
    import AutomationAIIntegration from './pages/AutomationAIIntegration';
    import SocialMediaManagement from './pages/SocialMediaManagement';
    import BrandingUIUXDesign from './pages/BrandingUIUXDesign';
    import BusinessConsultancyDigitalStrategy from './pages/BusinessConsultancyDigitalStrategy';
    import ContentCreationCopywriting from './pages/ContentCreationCopywriting';

    function App() {
      return (
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/seo-digital-marketing" element={<SeoDigitalMarketing />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/web-development" element={<WebDevelopment />} />
                <Route path="/app-development" element={<AppDevelopment />} />
                <Route path="/saas" element={<Saas />} />
                <Route path="/ecommerce-dropshipping" element={<EcommerceDropshipping />} />
                <Route path="/automation-ai-integration" element={<AutomationAIIntegration />} />
                <Route path="/social-media-management" element={<SocialMediaManagement />} />
                <Route path="/branding-uiux-design" element={<BrandingUIUXDesign />} />
                <Route path="/business-consultancy-digital-strategy" element={<BusinessConsultancyDigitalStrategy />} />
                <Route path="/content-creation-copywriting" element={<ContentCreationCopywriting />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      );
    }

    export default App;
