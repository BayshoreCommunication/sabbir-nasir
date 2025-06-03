import React from "react";
import Topbar from "../components/Topbar";
import Link from "next/link";
import { MotionDiv, MotionH1, MotionP } from "../components/Motion/Motion";
import { serviceData } from "../config/data";

const ServicesPage = () => {
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
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.2 * index,
                },
              }}
              key={index}
              //   className="bg-secondary-color"
            >
              <Link
                // href="#"
                href={`/services/${service.link}`}
                className="shadow-medium hover:shadow-large transition-all duration-500 p-4 flex flex-col gap-2 h-full"
              >
                {service.icon}
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="line-clamp-4">{service.shortDescription}</p>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
