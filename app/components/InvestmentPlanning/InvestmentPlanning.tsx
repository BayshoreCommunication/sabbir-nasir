import Image from "next/image";
import React from "react";

import consultingImg from "../../../public/images/homepage/investment-planning-1.png";
import investmentImg from "../../../public/images/homepage/investment-planning-2.png";
import { MotionDiv } from "../Motion/Motion";

const InvestmentPlanning = () => {
  return (
    <div className="main-container flex flex-col-reverse lg:flex-row gap-6 text-center spacer">
      <div className="flex flex-col-reverse lg:flex-col">
        <MotionDiv
          initial={{ opacity: 0.5, x: "-50px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          className="lg:w-[80%] mx-auto"
        >
          <Image src={consultingImg} alt="consulting-image" />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.2,
            },
          }}
          className="flex flex-col gap-2 mb-4 lg:mb-0 lg:mt-4"
        >
          <h3 className="text-xl font-semibold">Why Our Consulting</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor exercitationemut labore. Love life’s sweetest reward
            Let it flow it floats back to you.
          </p>
        </MotionDiv>
      </div>
      <div>
        <MotionDiv
          initial={{ opacity: 0, y: "-50px" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.2,
            },
          }}
          className="flex flex-col gap-2 mb-4"
        >
          <h3 className="text-xl font-semibold">Investment Planning</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor exercitationemut labore. Love life’s sweetest reward
            Let it flow it floats back to you.
          </p>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: "50px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          className="lg:w-[80%] mx-auto"
        >
          <Image src={investmentImg} alt="investment-image" />
        </MotionDiv>
      </div>
    </div>
  );
};

export default InvestmentPlanning;
