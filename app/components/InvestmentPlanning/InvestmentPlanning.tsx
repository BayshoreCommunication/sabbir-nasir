import Image from "next/image";
import React from "react";

import consultingImg from "../../../public/images/homepage/investment-planning-1.png";
import investmentImg from "../../../public/images/homepage/investment-planning-2.png";

const InvestmentPlanning = () => {
  return (
    <div className="main-container flex flex-col-reverse lg:flex-row gap-8 text-center spacer">
      <div className="flex flex-col-reverse lg:flex-col">
        <div className="lg:w-[80%] mx-auto">
          <Image src={consultingImg} alt="consulting-image" />
        </div>
        <div className="flex flex-col gap-2 mb-4 lg:mb-0 lg:mt-4">
          <h3 className="text-xl font-semibold">Why Our Consulting</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor exercitationemut labore. Love life’s sweetest reward
            Let it flow it floats back to you.
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-xl font-semibold">Investment Planning</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor exercitationemut labore. Love life’s sweetest reward
            Let it flow it floats back to you.
          </p>
        </div>
        <div className="lg:w-[80%] mx-auto">
          <Image src={investmentImg} alt="investment-image" />
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlanning;
