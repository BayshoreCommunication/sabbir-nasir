"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React from "react";
import customerFeedbackImg from "../../../public/images/homepage/customer-feedback.png";
import reviewAuthorImg from "../../../public/images/homepage/review-author.png";
import { BsFillGridFill } from "react-icons/bs";
import { MotionButton, MotionDiv } from "../Motion/Motion";

// function SampleArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         color: "#132841"
//       }}
//       onClick={onClick}
//     />
//   );
// }

const CustomerFeedback = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    // nextArrow: <SampleArrow />,
    // prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-secondary-color">
      <div className="main-container spacer flex flex-col gap-4 lg:gap-10">
        <MotionDiv
          initial={{ x: "-30px" }}
          whileInView={{
            x: 0,
            transition: {
              duration: 1,
            },
          }}
        >
          <h2 className="text-center text-2xl font-semibold mb-2">
            Happy Customers
          </h2>
          <p className="text-center">
            Our clients value the personalized attention and proven results we
            deliver. We are proud to have helped numerous individuals and
            organizations achieve their goals with confidence and clarity.
          </p>
        </MotionDiv>

        <div className="slider-container pb-4 lg:pb-0">
          <Slider {...settings}>
            <div className="flex-1 flex flex-col gap-y-2 px-2">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                    // delay: 0.3,
                    scale: {
                      type: "spring",
                      damping: 8,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  },
                }}
                className="relative"
              >
                <Image
                  src={customerFeedbackImg}
                  alt="customer-feedback"
                  className="w-full h-auto"
                />
                <p className="absolute top-[50%] -translate-y-[50%] px-10 text-center text-sm lg:text-base">
                  Working with Team Sabbir Nasir transformed our business
                  strategy. Their insights helped us navigate complex challenges
                  and achieve measurable growth. Highly recommended!
                </p>
              </MotionDiv>

              <div className="flex mt-1 items-center gap-2 text-sm font-semibold font-sans ml-[4%] sm:ml-[6%] md:ml-[7%] lg:ml-[6%] 2xl:ml-[6.5%]">
                {/* <Image
                  className="w-11"
                  src={reviewAuthorImg}
                  alt="meet-our-advisor"
                /> */}
                <div>
                  <p>Sarah M., CEO, </p>
                  <p className="font-normal text-gray-500 text-xs">
                    (Tech Innovators)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 px-2">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                    // delay: 0.3,
                    scale: {
                      type: "spring",
                      damping: 8,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  },
                }}
                className="relative"
              >
                <Image
                  src={customerFeedbackImg}
                  alt="customer-feedback"
                  className="w-full h-auto"
                />
                <p className="absolute top-[50%] -translate-y-[50%] px-10 text-center text-sm lg:text-base">
                  The emotional intelligence coaching provided by Sabbir’s team
                  has improved not only my leadership skills but also my
                  personal relationships. Their approach is both practical and
                  inspiring.
                </p>
              </MotionDiv>

              <div className="flex mt-1 items-center gap-2 text-sm font-semibold font-sans ml-[4%] sm:ml-[6%] md:ml-[7%] lg:ml-[6%] 2xl:ml-[6.5%]">
                {/* <Image
                  className="w-11"
                  src={reviewAuthorImg}
                  alt="meet-our-advisor"
                /> */}
                <div>
                  <p>James L., Senior Manager</p>
                  <p className="font-normal text-gray-500 text-xs">
                    ( Finance Sector )
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 px-2">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                    // delay: 0.3,
                    scale: {
                      type: "spring",
                      damping: 8,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  },
                }}
                className="relative"
              >
                <Image
                  src={customerFeedbackImg}
                  alt="customer-feedback"
                  className="w-full h-auto"
                />
                <p className="absolute top-[50%] -translate-y-[50%] px-10 text-center text-sm lg:text-base">
                  Their 10 Years Plan Consultancy helped me create a clear,
                  actionable roadmap for my company’s future. The guidance was
                  tailored and deeply thoughtful.
                </p>
              </MotionDiv>

              <div className="flex mt-1 items-center gap-2 text-sm font-semibold font-sans ml-[4%] sm:ml-[6%] md:ml-[7%] lg:ml-[6%] 2xl:ml-[6.5%]">
                {/* <Image
                  className="w-11"
                  src={reviewAuthorImg}
                  alt="meet-our-advisor"
                /> */}
                <div>
                  <p>Priya S., Entrepreneur</p>
                  <p className="font-normal text-gray-500 text-xs">
                    ( Retail Industry )
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 px-2">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                    // delay: 0.3,
                    scale: {
                      type: "spring",
                      damping: 8,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  },
                }}
                className="relative"
              >
                <Image
                  src={customerFeedbackImg}
                  alt="customer-feedback"
                  className="w-full h-auto"
                />
                <p className="absolute top-[50%] -translate-y-[50%] px-10 text-center text-sm lg:text-base">
                  I appreciated the professionalism and deep knowledge Team
                  Sabbir Nasir brought to our branding strategy. They helped us
                  define a strong, authentic brand voice.
                </p>
              </MotionDiv>

              <div className="flex mt-1 items-center gap-2 text-sm font-semibold font-sans ml-[4%] sm:ml-[6%] md:ml-[7%] lg:ml-[6%] 2xl:ml-[6.5%]">
                {/* <Image
                  className="w-11"
                  src={reviewAuthorImg}
                  alt="meet-our-advisor"
                /> */}
                <div>
                  <p>Michael T.</p>
                  <p className="font-normal text-gray-500 text-xs">
                    ( Marketing Director, Healthcare )
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 px-2">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                    // delay: 0.3,
                    scale: {
                      type: "spring",
                      damping: 8,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  },
                }}
                className="relative"
              >
                <Image
                  src={customerFeedbackImg}
                  alt="customer-feedback"
                  className="w-full h-auto"
                />
                <p className="absolute top-[50%] -translate-y-[50%] px-10 text-center text-sm lg:text-base">
                  The strategic planning consultancy gave our leadership team
                  the clarity and focus we needed. Their actionable plans are
                  easy to implement and have made a real difference.
                </p>
              </MotionDiv>

              <div className="flex mt-1 items-center gap-2 text-sm font-semibold font-sans ml-[4%] sm:ml-[6%] md:ml-[7%] lg:ml-[6%] 2xl:ml-[6.5%]">
                {/* <Image
                  className="w-11"
                  src={reviewAuthorImg}
                  alt="meet-our-advisor"
                /> */}
                <div>
                  <p>Lisa K.</p>
                  <p className="font-normal text-gray-500 text-xs">
                    ( COO, Manufacturing )
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 px-2">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                    // delay: 0.3,
                    scale: {
                      type: "spring",
                      damping: 8,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  },
                }}
                className="relative"
              >
                <Image
                  src={customerFeedbackImg}
                  alt="customer-feedback"
                  className="w-full h-auto"
                />
                <p className="absolute top-[50%] -translate-y-[50%] px-10 text-center text-sm lg:text-base">
                  Team Sabbir Nasir’s action plan consultancy turned our ideas
                  into reality. Their structured process and ongoing support
                  ensured we stayed on track and achieved our goals.
                </p>
              </MotionDiv>

              <div className="flex mt-1 items-center gap-2 text-sm font-semibold font-sans ml-[4%] sm:ml-[6%] md:ml-[7%] lg:ml-[6%] 2xl:ml-[6.5%]">
                {/* <Image
                  className="w-11"
                  src={reviewAuthorImg}
                  alt="meet-our-advisor"
                /> */}
                <div>
                  <p>David R.</p>
                  <p className="font-normal text-gray-500 text-xs">
                    ( Founder, Nonprofit Organization )
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/*         
        <div className="flex justify-center">
          <MotionButton
            initial={{ opacity: 0, scale: 0 }}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-max border border-primary-color hover:border-none hover:bg-primary-color rounded-full px-4 h-10 text-primary-color hover:text-white font-semibold text-sm flex items-center justify-center gap-2 bg-white hover:bg-gradient-to-tr from-black via-primary-color to-sky-200"
          >
            <BsFillGridFill />
            <div className="border-r-2 h-full border-gray-500"></div>
            VIEW ALL
          </MotionButton>
        </div> */}
      </div>
    </div>
  );
};

export default CustomerFeedback;
