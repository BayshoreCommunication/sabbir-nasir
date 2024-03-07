import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import { MotionDiv, MotionP, MotionSpan } from "../Motion/Motion";

const HeroSection = () => {
  const titleArray = ["Money", "Doesn't", "Come", "Without", "Care"];

  return (
    <div className="bg-[url('/images/homepage/hero-background.png')] bg-fixed bg-cover text-center lg:text-start">
      <div className="main-container py-12 lg:py-[13.5rem]">
        <div>
          <div className={``}>
            {titleArray.map((title, index) => (
              <>
                <MotionSpan
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: index / 10,
                  }}
                  className={`${
                    index > 1 && "mt-3"
                  } text-4xl lg:text-7xl font-bold text-primary-color inline-block ${
                    index > 2 && "text-white"
                  }`}
                  key={index}
                >
                  <span
                    className={`tracking-wider ${
                      index === 0 && "mr-2 lg:mr-5"
                    } ${index === 2 && "mr-2 lg:mr-5"} ${
                      index === 3 && "mr-2 lg:mr-5"
                    }`}
                  >
                    {title}
                  </span>
                </MotionSpan>
                {index === 1 && <br />}
              </>
            ))}
          </div>

          <MotionP
            initial={{ opacity: 0, y: "40px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
            }}
            className="font-semibold my-6"
          >
            Finding your next Financial Advisor is as easy as counting from one
            to five.
          </MotionP>
        </div>
        <MotionDiv
          initial={{ opacity: 0, y: "30px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.5,
            delay: 0.4,
            duration: 1.2,
          }}
          className="flex justify-center lg:justify-start gap-2 lg:gap-4"
        >
          <PrimaryButton>READ MORE</PrimaryButton>
          <SecondaryButton>CONTACT US</SecondaryButton>
        </MotionDiv>
      </div>
    </div>
  );
};

export default HeroSection;
