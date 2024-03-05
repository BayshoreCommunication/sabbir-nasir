import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/homepage/hero-background.png')] bg-cover text-center lg:text-start">
      <div className="main-container py-12 lg:py-48">
        <div>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-color">
            Money Doesn’t
          </h2>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-color mt-2">
            Come <span className="text-white">Without Care</span>
          </h2>
          <p className="font-semibold my-6">
            Finding your next Financial Advisor is as easy as counting from one
            to five.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start gap-2 lg:gap-4">
          <PrimaryButton>READ MORE</PrimaryButton>
          <SecondaryButton>CONTACT US</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
