import Image from "next/image";
import React from "react";
import meetOurAdvisors from "../../../public/images/homepage/meet-our-advisors.png";
import { MotionDiv, MotionUl } from "../Motion/Motion";
import { GoDot, GoDotFill } from "react-icons/go";

const WhyChooseUs = () => {
  return (
    <div className="bg-white">
      <div className="main-container spacer flex flex-col gap-4 lg:gap-10">
        <MotionDiv
          initial={{ x: "-50px", opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.2,
            },
          }}
        >
          <h2 className="text-center text-2xl font-semibold mb-2">
            Why Choose Us
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor exercitationemut labore.
          </p>
        </MotionDiv>
        <MotionDiv
          initial={{ x: "50px", opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.2,
            },
          }}
          className="flex flex-col lg:flex-row gap-x-12 gap-y-4 items-center"
        >
          <div className="lg:flex-[2] xl:flex-1">
            <Image
              className="w-full h-auto"
              src={meetOurAdvisors}
              alt="meet-our-advisor"
            />
          </div>
          <ul className="list-disc list-inside lg:flex-[1.5] xl:flex-1 font-medium flex flex-col gap-2.5 w-full ml-3">
            <li>More than 20 years of experience</li>
            <li>
              Making your venture profitable
              <ul className="list-image-none list-inside ml-6 text-sm flex flex-col gap-2">
                <li className="mt-2 flex items-center gap-2">
                  <GoDotFill size={8} color="black" className="font-bold" />
                  Reduce Operating Costs
                </li>
                <li className="flex items-center gap-2">
                  <GoDotFill size={8} className="font-bold" />
                  Drive Business Value
                </li>
                <li className="flex items-center gap-2">
                  <GoDotFill size={8} className="font-bold" />
                  Certified Coaches
                </li>
                <li className="flex items-center gap-2">
                  <GoDotFill size={8} className="font-bold" />
                  The Best Curriculum
                </li>
                <li className="flex items-center gap-2">
                  <GoDotFill size={8} className="font-bold" />
                  Trusted Team
                </li>
              </ul>
            </li>
            <li>Learn From the Best</li>
            <li>Highly Trained Battle</li>
            <li>Level Up Your Company</li>
            <li>Adopt a BIG System</li>
          </ul>
        </MotionDiv>
      </div>
    </div>
  );
};

export default WhyChooseUs;
