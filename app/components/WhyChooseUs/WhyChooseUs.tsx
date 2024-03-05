import Image from "next/image";
import React from "react";
import meetOurAdvisors from "../../../public/images/homepage/meet-our-advisors.png";

const WhyChooseUs = () => {
  return (
    <div className="bg-white">
      <div className="main-container spacer flex flex-col gap-4 lg:gap-10">
        <div>
          <h2 className="text-center text-2xl font-semibold mb-2">
            Why Choose Us
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor exercitationemut labore.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-12 gap-y-4 items-center">
          <div className="lg:flex-[2] xl:flex-1">
            <Image
              className="w-full h-auto"
              src={meetOurAdvisors}
              alt="meet-our-advisor"
            />
          </div>
          <ul className="list-disc list-inside lg:flex-[1.5] xl:flex-1 font-medium flex flex-col gap-2 w-full ml-3">
            <li>More than 20 years of experience</li>
            <li>
              Making your venture profitable
              <ul className="list-disc list-inside ml-6 text-sm flex flex-col gap-1.5">
                <li className="mt-1.5">Reduce Operating Costs</li>
                <li>Drive Business Value</li>
                <li>Certified Coaches</li>
                <li>The Best Curriculum</li>
                <li>Trusted Team</li>
              </ul>
            </li>
            <li>Learn From the Best</li>
            <li>Highly Trained Battle</li>
            <li>Level Up Your Company</li>
            <li>Adopt a BIG System</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
