"use client";
import React, { useEffect, useRef, useState } from "react";
import { RxSlash } from "react-icons/rx";
import CountUp from "react-countup";
import { MotionDiv } from "../Motion/Motion";

const HelpingBusiness = () => {
  const countUpRef = useRef(null);

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setInView(entries[0].isIntersecting);
    });

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, [countUpRef]);
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 8,
            stiffness: 100,
            restDelta: 0.001,
          },
        },
      }}
      ref={countUpRef}
      className="w-[100%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[74%] mx-auto bg-[url('/images/homepage/services/helping-small-business.png')] bg-cover py-4 lg:py-16 px-2 lg:px-32"
    >
      <h2 className="text-center text-2xl font-semibold">
        Helping Small Businesses
      </h2>
      <p className="text-center text-sm mb-4 lg:mb-10 mt-2">
        Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
        eiusmod tempor exercitationemut labore.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-7 justify-center gap-y-4 items-center text-5xl font-bold text-center">
        <div>
          <p className="text-primary-color mb-1">
            {inView && <CountUp end={30} />}
          </p>
          <p className="text-xs font-semibold font-mono">Employees</p>
        </div>
        <RxSlash className="hidden lg:block" />
        <div>
          <p className="text-primary-color mb-1">
            {inView && <CountUp end={2} />}
          </p>
          <p className="text-xs font-semibold font-mono">Locations</p>
        </div>
        <RxSlash className="hidden lg:block" />
        <div>
          <p className="text-primary-color mb-1">
            {inView && <CountUp end={100} />}
          </p>
          <p className="text-xs font-semibold font-mono">% Satisfaction</p>
        </div>
        <RxSlash className="hidden lg:block" />
        <div>
          <p className="text-primary-color mb-1">
            {inView && <CountUp end={114} />}
          </p>
          <p className="text-xs font-semibold font-mono">Happy Customers</p>
        </div>
      </div>
    </MotionDiv>
  );
};

export default HelpingBusiness;
