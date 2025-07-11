"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import advisorImg from "../../../public/images/homepage/services/carosel/advisor-icon.svg";
import consultingImg from "../../../public/images/homepage/services/carosel/consulting-icon.svg";
import outsourceImg from "../../../public/images/homepage/services/carosel/outsource-icon.svg";
import { MotionDiv } from "../Motion/Motion";

const ServiceCarosel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
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
    <div className="w-full  h-full">
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
        className="slider-container gap-4 w-[100%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[74%] mx-auto mb-10 lg:mb-0 lg:mt-3"
      >
        <Slider {...settings}>
          <div>
            <div className="bg-secondary-color shadow-md flex flex-col items-center p-8 gap-y-2 mx-1 lg:mx-3">
              <Image src={advisorImg} alt="advisor image" />
              <h2 className="text-xl font-semibold">Advisor</h2>
              <p className="text-center">
                Providing expert guidance to support your strategic decisions
                and growth.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-secondary-color shadow-md flex flex-col items-center p-8 gap-y-2 mx-1 lg:mx-3">
              <Image src={consultingImg} alt="advisor image" />
              <h2 className="text-xl font-semibold">Consulting</h2>
              <p className="text-center">
                Tailored solutions to address your unique business challenges
                and opportunities.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-secondary-color shadow-md flex flex-col items-center p-8 gap-y-2 mx-1 lg:mx-3">
              <Image src={outsourceImg} alt="advisor image" />
              <h2 className="text-xl font-semibold ">Outsource CEO</h2>
              <p className="text-center line-clamp-2">
                Offering experienced leadership on demand to steer your
                organization effectively without a full-time hire.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-secondary-color shadow-md flex flex-col items-center p-8 gap-y-2 mx-1 lg:mx-3">
              <Image src={consultingImg} alt="advisor image" />
              <h2 className="text-xl font-semibold">Consult CEO</h2>
              <p className="text-center">
                Strategic CEO-level consulting to optimize leadership,
                operations, and long-term vision.
              </p>
            </div>
          </div>
        </Slider>
      </MotionDiv>
    </div>
  );
};

export default ServiceCarosel;
