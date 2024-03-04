"use client";
import React, { useEffect, useRef, useState } from "react";
import { RxSlash } from "react-icons/rx";
import CountUp from "react-countup";

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
    <div
      ref={countUpRef}
      className="main-container bg-[url('/images/homepage/services/helping-small-business.png')] bg-cover py-4 lg:py-16 px-2 lg:px-32"
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
    </div>
  );
};

export default HelpingBusiness;
