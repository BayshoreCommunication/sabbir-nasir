import React from "react";
import PrimaryButton from "../Button/PrimaryButton";

const RequestACall = () => {
  return (
    <div className="my-8 lg:my-16 main-container bg-secondary-color p-2 flex flex-col lg:flex-row gap-x-12 gap-y-4">
      <div className='flex-1 min-h-full bg-[url("/images/homepage/request-a-call.png")] px-2 lg:px-6 py-2 lg:py-12 bg-cover bg-no-repeat bg-bottom flex flex-col gap-2 lg:gap-4 justify-center text-center lg:text-start'>
        <h4 className="text-2xl font-semibold">Request a Call Back</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
          eiusmod tempor exercitationemut.
        </p>
        <p className="">
          <span className="font-semibold">For Investment:</span> Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipis civelit sed quia non qui dolorem or phone +11 987 654 3210
          ipsum quia dolor sit amet, consectetur.
        </p>
      </div>
      <div className="flex-1 lg:pr-10">
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
      </div>
    </div>
  );
};

export default RequestACall;
