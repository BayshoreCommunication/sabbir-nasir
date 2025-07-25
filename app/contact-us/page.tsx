"use client";
import React, { useEffect } from "react";
import Topbar from "../components/Topbar";
import HeroSectionTop from "../components/HeroSectionTop";
import HeroSection from "../components/HeroSection";
import Image from "next/image";

const ContactUsPage = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Contact Us" }]
  
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <HeroSectionTop title="Contact Us" breadcrumbs={breadcrumbs} />
      <div className="main-container mx-auto px-4 py-12 space-y-16">
        
        {/* Calendly inline widget */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/irakibul/30min" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUsPage;
