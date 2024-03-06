"use client";
import React from "react";
import Topbar from "../components/Topbar";
import VideoPlayer from "../components/WhoWeServe/WhoWeServePageComponent/VideoPlayer";
import Image from "next/image";
import whoWeServeImg from "../../public/images/who-we-serve/who-we-serve.png";
import CustomerFeedback from "../components/CustomerFeedback/CustomerFeedback";

const WhoWeServe = () => {
  return (
    <div>
      <Topbar mainPage="Who We Serve" />
      <section className="main-container spacer">
        <VideoPlayer />
      </section>
      <section className="main-container flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        <div className="flex-[1.5] flex flex-col gap-5">
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
        </div>
        <div className="flex-1">
          <Image src={whoWeServeImg} alt="who-we-serve-image" />
        </div>
      </section>
      <section>
        <CustomerFeedback />
      </section>
    </div>
  );
};

export default WhoWeServe;
