import Image from "next/image";
import React from "react";
import customerFeedbackImg from "../../../public/images/homepage/customer-feedback.png";
import reviewAuthorImg from "../../../public/images/homepage/review-author.png";
import { BsFillGridFill } from "react-icons/bs";

const CustomerFeedback = () => {
  return (
    <div className="bg-secondary-color">
      <div className="main-container spacer flex flex-col gap-4 lg:gap-10">
        <div>
          <h2 className="text-center text-2xl font-semibold mb-2">
            Happy Customers
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor exercitationemut labore.
          </p>
        </div>
        <div className="flex gap-x-12 gap-y-4 items-center">
          <div className="flex-1 flex flex-col gap-y-2">
            <div className="relative">
              <Image
                src={customerFeedbackImg}
                alt="customer-feedback"
                className="w-full h-auto"
              />
              <p className="absolute top-[50%] -translate-y-[50%] px-10 text-center text-sm lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed
                do eiusmod tempor exercitationemut labore Love life’s sweetest.
                ipsum dolor sit amet, consectetur adi pisi cing elit
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold font-sans ml-[4%] sm:ml-[6%] md:ml-[7%] lg:ml-[6%]">
              <Image
                className="w-11"
                src={reviewAuthorImg}
                alt="meet-our-advisor"
              />
              <div>
                <p>Boris Hunt</p>
                <p className="font-normal text-gray-500 text-xs">
                  ( Sales Agent )
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden lg:flex flex-col gap-y-2">
            <div className="relative">
              <Image
                src={customerFeedbackImg}
                alt="customer-feedback"
                className="w-full h-auto"
              />
              <p className="absolute top-[50%] -translate-y-[50%] px-10 text-center">
                Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed
                do eiusmod tempor exercitationemut labore Love life’s sweetest.
                ipsum dolor sit amet, consectetur adi pisi cing elit
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold font-sans ml-[4%] sm:ml-[6%] md:ml-[7%] lg:ml-[6%]">
              <Image
                className="w-11"
                src={reviewAuthorImg}
                alt="meet-our-advisor"
              />
              <div>
                <p>Boris Hunt</p>
                <p className="font-normal text-gray-500 text-xs">
                  ( Sales Agent )
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="w-max border border-primary-color hover:bg-primary-color rounded-full px-4 h-10 text-primary-color hover:text-white font-semibold text-sm flex items-center justify-center gap-2">
            <BsFillGridFill />
            <div className="border-r-2 h-full border-gray-500"></div>
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
