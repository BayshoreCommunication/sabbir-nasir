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
            Our consulting stands out because we provide clear, actionable
            advice tailored to your needs. We combine strategy with emotional
            insight to help you navigate challenges and achieve growth.
          </p>
          <p>
            We work closely with you to ensure practical solutions that deliver
            real impact.
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
            We assist you in planning your investments carefully to align with
            your long-term goals. Our approach balances risk and opportunity to
            help you grow steadily and confidently.
          </p>
          <p>
            Our goal is to help you make smart decisions that bring meaningful
            results.
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
