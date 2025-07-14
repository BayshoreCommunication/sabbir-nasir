"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
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
              <div>
                <Image
                  src="/images/homepage/services/carosel/VISION_FRAMING.png"
                  alt="Vision Framing"
                  height={64}
                  width={64}
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-sm font-semibold">VISION FRAMING</h2>
            </div>
          </div>

          <div>
            <div className="bg-secondary-color shadow-md flex flex-col items-center p-8 gap-y-2 mx-1 lg:mx-3">
              <div>
                <Image
                  src="/images/homepage/services/carosel/STRATEGIC_ROADMAPPING.png"
                  alt="Strategic Roadmapping"
                  height={64}
                  width={64}
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-sm font-semibold "> STRATEGIC ROADMAPPING</h2>
            </div>
          </div>

          <div>
            <div className="bg-secondary-color shadow-md flex flex-col items-center p-8 gap-y-2 mx-1 lg:mx-3">
              <div>
                <Image
                  src="/images/homepage/services/carosel/CULTURAL_REDESIGN.png"
                  alt="Cultural Redesign"
                  height={64}
                  width={64}
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-sm font-semibold"> CULTURAL REDESIGN</h2>
            </div>
          </div>
          <div>
            <div className="bg-secondary-color shadow-md flex flex-col items-center p-8 gap-y-2 mx-1 lg:mx-3">
              <div>
                <Image
                  src="/images/homepage/services/carosel/STRUCTURAL_RE_ENGINEERING.png"
                  alt="Structural Re-Engineering"
                  height={64}
                  width={64}
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-sm font-semibold">
                STRUCTURAL RE-ENGINEERING
              </h2>
            </div>
          </div>
          <div>
            <div className="bg-secondary-color shadow-md flex flex-col items-center p-8 gap-y-2 mx-1 lg:mx-3">
              <div>
                <Image
                  src="/images/homepage/services/carosel/EXECUTION_SYSTEMS.png"
                  alt="Execution Systems"
                  height={64}
                  width={64}
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-sm font-semibold">EXECUTION SYSTEMS</h2>
            </div>
          </div>
          <div>
            <div className="bg-secondary-color shadow-md flex flex-col items-center p-8 gap-y-2 mx-1 lg:mx-3">
              <div>
                <Image
                  src="/images/homepage/services/carosel/EXPANSION.png"
                  alt="Expansion"
                  height={64}
                  width={64}
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-sm font-semibold">EXPANSION</h2>
            </div>
          </div>
        </Slider>
      </MotionDiv>
    </div>
  );
};

export default ServiceCarosel;
