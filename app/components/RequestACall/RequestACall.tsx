import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { MotionDiv } from "../Motion/Motion";
import Link from "next/link";

const RequestACall = () => {
  return (
    <div className="my-8 lg:my-16 main-container bg-secondary-color p-2 flex flex-col lg:flex-row gap-x-12 gap-y-4">
      <MotionDiv
        initial={{ opacity: 0, x: "-50px" }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        className='flex-1 min-h-full bg-[url("/images/homepage/request-a-call.png")] px-2 lg:px-6 py-2 lg:py-12 bg-cover bg-no-repeat bg-bottom flex flex-col gap-2 lg:gap-4 justify-center text-center lg:text-start'
      >
        <h4 className="text-2xl font-semibold">Request a Call Back</h4>
        <p>
          We are here to assist you with any questions or to discuss your
          specific needs. Please leave your details, and our team will get back
          to you promptly.
        </p>
        <p className="">
          <span className="font-semibold">For Investment Inquiries:</span> If
          you have questions about investment planning or related services, feel
          free to{" "}
          <Link href="/contact-us" className="text-blue-700 underline">
            contact us
          </Link>{" "}
          or send us a message. We’re committed to providing you with the
          support and information you need
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
        className="flex-1 lg:pr-10"
      >
        <form className="w-full flex flex-col gap-4 py-2 lg:py-12">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name"
            className="w-full px-4 py-2.5 rounded-full outline outline-2 outline-gray-300 focus:outline-gray-400 text-gray-600 text-sm"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email Address"
            className="w-full px-4 py-2.5 rounded-full outline outline-2 outline-gray-300 focus:outline-gray-400 text-gray-600 text-sm"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone Number"
            className="w-full px-4 py-2.5 rounded-full outline outline-2 outline-gray-300 focus:outline-gray-400 text-gray-600 text-sm"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name"
            className="w-full px-4 py-2.5 rounded-full outline outline-2 outline-gray-300 focus:outline-gray-400 text-gray-600 text-sm"
          />
          <div className="lg:hidden">
            <PrimaryButton width="w-full">SUBMIT</PrimaryButton>
          </div>
          <div className="hidden lg:block">
            <PrimaryButton>SUBMIT</PrimaryButton>
          </div>
        </form>
      </MotionDiv>
    </div>
  );
};

export default RequestACall;
