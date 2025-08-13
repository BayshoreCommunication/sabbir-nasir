"use client";
import CalendlyInfoShow from "@/components/Contact/CalendlyInfoShow";
import ContactForm from "@/components/Contact/ContactForm";
import GlobalHeroSection from "@/components/GlobalHeroSection";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1={`Start Your Transformation`}
        titleH2={"Contact Us"}
        slug={"contact-us"}
        image="/images/about-us/contact-us.jpg"
        description=""
        buttonFlag={false}
        buttonText="Contact"
      />
      <div className="container mx-auto mt-14">
        <div className="mb-4  xl:mb-14 ">
          <motion.h2
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Schedule Your 30-Minute Discovery Call
          </motion.h2>

          {/* Full-width introductory paragraph */}
          <motion.p
            className="text-center max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Move from clutter and confusion to clarity and purpose. Align
            business goals with culture and values. Find harmony in mind, body,
            spirit, and soul. And scale your organization to $100 million and
            beyond in a way that’s sustainable and fulfilling. We’re ready to
            join you on this transformational journey. Contact us to get
            started.
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-between items-start">
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
          <div className="w-full md:w-1/2">
            <CalendlyInfoShow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
