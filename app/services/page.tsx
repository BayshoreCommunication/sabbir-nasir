import React from "react";
import Topbar from "../components/Topbar";
import { FaBusinessTime } from "react-icons/fa";
import Link from "next/link";
import { GiBrain } from "react-icons/gi";
import { TbBrand4Chan } from "react-icons/tb";
import { MotionDiv, MotionH1, MotionP } from "../components/Motion/Motion";
import { easeIn } from "framer-motion";

const ServicesPage = () => {
  const serviceData = [
    {
      icon: <FaBusinessTime size={24} />,
      title: "Business problem solving consultancy",
      link: `/services/business-problem-solving-consultancy`,
      description: `We have over 15 years of experience Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power
            of consectetur adi pisi cing elit, sed do eiusmod tempor
            xercitationemut labore. Lorem ipsum dolor sit amet, consectetur`,
    },
    {
      icon: <FaBusinessTime size={24} />,
      title: "Emotional Intelligence Coaching",
      link: `/services/business-problem-solving-consultancy`,
      description: `In Emotional Intelligence Coaching We have over 15 years of experience Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power
            of consectetur adi pisi cing elit, sed do eiusmod tempor
            xercitationemut labore. Lorem ipsum dolor sit amet, consectetur`,
    },
    {
      icon: <GiBrain size={24} />,
      title: "Exploring Your Higher Self",
      link: `/services/business-problem-solving-consultancy`,
      description: `In Exploring Your Higher Self We have over 15 years of experience Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power
            of consectetur adi pisi cing elit, sed do eiusmod tempor
            xercitationemut labore. Lorem ipsum dolor sit amet, consectetur`,
    },
    {
      icon: <GiBrain size={24} />,
      title: "10 Years Plan Consultancy",
      link: `/services/business-problem-solving-consultancy`,
      description: `In 10 Years Plan Consultancy We have over 15 years of experience Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power
            of consectetur adi pisi cing elit, sed do eiusmod tempor
            xercitationemut labore. Lorem ipsum dolor sit amet, consectetur`,
    },
    {
      icon: <GiBrain size={24} />,
      title: "Strategic Planning Consultancy",
      link: `/services/business-problem-solving-consultancy`,
      description: `In Strategic Planning Consultancy We have over 15 years of experience Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power
            of consectetur adi pisi cing elit, sed do eiusmod tempor
            xercitationemut labore. Lorem ipsum dolor sit amet, consectetur`,
    },
    {
      icon: <GiBrain size={24} />,
      title: "Action Plan Consultancy",
      link: `/services/business-problem-solving-consultancy`,
      description: `In Action Plan Consultancy We have over 15 years of experience Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power
            of consectetur adi pisi cing elit, sed do eiusmod tempor
            xercitationemut labore. Lorem ipsum dolor sit amet, consectetur`,
    },
    {
      icon: <TbBrand4Chan size={24} />,
      title: "Branding Consultancy",
      link: `/services/business-problem-solving-consultancy`,
      description: `In Branding Consultancy We have over 15 years of experience Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power
            of consectetur adi pisi cing elit, sed do eiusmod tempor
            xercitationemut labore. Lorem ipsum dolor sit amet, consectetur`,
    },
  ];
  return (
    <div className="overflow-hidden">
      <Topbar mainPage="Services" />
      <section className="main-container spacer">
        <div className="text-center mb-4 lg:mb-9">
          <MotionH1
            initial={{ opacity: 0, x: "100px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-4"
          >
            Reliable Services
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, x: "-100px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Our service quality and dedication are one the top. We are always
            available for you all the time.
          </MotionP>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full bg-white">
          {serviceData.map((service, index) => (
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.8,
              }}
              key={index}
              //   className="bg-secondary-color"
            >
              <Link
                href={service.link}
                className="shadow-medium hover:shadow-large transition-all duration-500 p-4 flex flex-col gap-2 h-full"
              >
                {service.icon}
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p>{service.description}</p>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
