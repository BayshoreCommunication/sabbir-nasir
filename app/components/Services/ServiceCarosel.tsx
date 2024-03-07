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
    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
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
            // delay: 0.3,
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
                Lorem ipsum dolor sit amet, Let it it floats back to you, Let it
                it floats back to you.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-secondary-color shadow-md flex flex-col items-center p-8 gap-y-2 mx-1 lg:mx-3">
              <Image src={consultingImg} alt="advisor image" />
              <h2 className="text-xl font-semibold">Consulting</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet, Let it it floats back to you, Let it
                it floats back to you.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-secondary-color shadow-md flex flex-col items-center p-8 gap-y-2 mx-1 lg:mx-3">
              <Image src={outsourceImg} alt="advisor image" />
              <h2 className="text-xl font-semibold">Outsource CEO</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet, Let it it floats back to you, Let it
                it floats back to you.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-secondary-color shadow-md flex flex-col items-center p-8 gap-y-2 mx-1 lg:mx-3">
              <Image src={consultingImg} alt="advisor image" />
              <h2 className="text-xl font-semibold">Consult CEO</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet, Let it it floats back to you, Let it
                it floats back to you.
              </p>
            </div>
          </div>
        </Slider>
      </MotionDiv>
    </div>
  );
};

export default ServiceCarosel;
