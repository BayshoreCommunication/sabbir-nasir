"use client";
import React from "react";
import Topbar from "../components/Topbar";
import VideoPlayer from "../components/WhoWeServe/WhoWeServePageComponent/VideoPlayer";
import Image from "next/image";
import whoWeServeImg from "../../public/images/who-we-serve/who-we-serve.png";
import CustomerFeedback from "../components/CustomerFeedback/CustomerFeedback";
import { MotionDiv, MotionSection } from "../components/Motion/Motion";

const WhoWeServe = () => {
  return (
    <div>
      <Topbar mainPage="Who We Serve" />
      <MotionSection
        initial={{ opacity: 0, y: "-100px" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        className="main-container spacer flex justify-center"
      >
        {/* <VideoPlayer /> */}
        <iframe
          width="50%"
          height="400"
          src="https://www.youtube.com/embed/_gwtroFSQAo?si=0hKhalHb_W7EAR2x"
          title="Sabbir Nasir at Live with a Purpose"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full lg:w-1/2"
        ></iframe>
      </MotionSection>
      <section className="main-container flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        <MotionDiv
          initial={{ opacity: 0, x: "-50px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          className="flex-[1.5] flex flex-col gap-5"
        >
          <p>
            {`Our diverse team of audiovisual technical producers, directors,
            project managers, engineers, technicians, and creatives brings a
            collective wealth of experience to your event. We've orchestrated
            the marvel of audiovisuals for many notable events, pushing the
            boundaries of what's possible in event production.`}
          </p>
          <p>
            {` At DXG, our approach is to intimately understand your event's
            objectives and forge a connection between your content and your
            audience. Whether through immersive experiences, captivating
            visuals, or interactive elements, we ensure that every aspect of
            your event resonates with attendees.
          `}
          </p>
          <p>
            We stay at the forefront of technology, harnessing innovative
            solutions to enhance engagement and streamline production. Our
            outcome-focused strategy is designed to deliver measurable results,
            turning your vision into a dynamic reality that leaves a lasting
            impression.
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
          className="flex-1"
        >
          <Image src={whoWeServeImg} alt="who-we-serve-image" />
        </MotionDiv>
      </section>
      <section>
        <CustomerFeedback />
      </section>
    </div>
  );
};

export default WhoWeServe;
