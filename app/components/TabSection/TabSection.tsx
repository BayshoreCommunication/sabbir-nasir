"use client";
import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import OutlineButton from "../Button/OutlineButton";
import Image from "next/image";
import videoThumb from "../../../public/images/homepage/video-thumb.jpg.png";
import { MotionDiv, MotionH3, MotionP } from "../Motion/Motion";

export default function TabSection() {
  const [selected, setSelected] = useState("money");

  //   console.log("selected", selected);

  return (
    <div className="flex w-full flex-col bg-secondary-color items-center hola-test">
      <Tabs
        color={"primary"}
        fullWidth={true}
        aria-label="Options"
        size="lg"
        radius={"none"}
        selectedKey={selected}
        variant="light"
        onSelectionChange={setSelected as any}
        className="border-b-2 border-gray-200 bg-white w-full flex justify-center items-center h-[3.5rem] lg:h-[6rem] overflow-hidden test-container"
      >
        <Tab
          key="money"
          title={
            <>
              <div
                className={`hidden lg:flex items-center space-x-3 font-semibold ${
                  selected === "money" ? "text-white" : "text-primary-color"
                }`}
              >
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full font-bold ${
                    selected === "money"
                      ? "bg-white text-primary-color"
                      : "bg-primary-color text-white"
                  }`}
                >
                  1
                </span>
                <div className="text-start">
                  <p>Vision & Strategy</p>
                  <small className="font-normal">
                    Finding Your Next Consultant with Confidence
                  </small>
                </div>
              </div>
              <div
                className={`block py-2 text-lg lg:hidden items-center font-semibold ${
                  selected === "money" ? "text-white" : "text-primary-color"
                }`}
              >
                1
              </div>
            </>
          }
          className="main-container m-0 py-4 lg:py-12 h-full"
        >
          <Card className="rounded-none bg-transparent border-none shadow-none lg:my-4 overflow-hidden">
            <CardBody className="border-none overflow-hidden">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                    stiffness: 100,
                  },
                }}
                className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-start"
              >
                <div className="flex-1 flex flex-col gap-3 lg:gap-4 text-[#121212]">
                  <MotionH3
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    }}
                    className="text-2xl font-bold"
                  >
                    Who We Are
                  </MotionH3>
                  <MotionP
                    initial={{ opacity: 0, y: "30px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2,
                        duration: 0.8,
                      },
                    }}
                  >
                    We have over 20 years of experience in strategic consulting,
                    emotional intelligence coaching, and leadership development.
                    Our team helps individuals and organizations find clear,
                    practical solutions to reach their goals.
                  </MotionP>
                  <MotionP
                    initial={{ opacity: 0, y: "50px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.4,
                        duration: 0.8,
                      },
                    }}
                  >
                    We focus on combining real-world knowledge with a thoughtful
                    approach to long lasting success.
                  </MotionP>
                  <MotionDiv
                    initial={{ opacity: 0, y: "50px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.7,
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.2,
                      },
                    }}
                    className="ml-1"
                  >
                    <OutlineButton title="READ MORE" />
                  </MotionDiv>
                </div>
                <div className="flex-1">
                  <Image src={videoThumb} alt="video thumb" />
                </div>
              </MotionDiv>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="assistance"
          title={
            <>
              <div
                className={`hidden lg:flex items-center space-x-3 font-semibold ${
                  selected === "assistance"
                    ? "text-white"
                    : "text-primary-color"
                }`}
              >
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full font-bold ${
                    selected === "assistance"
                      ? "bg-white text-primary-color"
                      : "bg-primary-color text-white"
                  }`}
                >
                  2
                </span>
                <div className="text-start">
                  <p>Personalized Guidance</p>
                  <small className="font-normal">
                    Expert Coaching for Your Unique Challenges
                  </small>
                </div>
              </div>
              <div
                className={`block py-2 text-lg lg:hidden items-center space-x-2 font-semibold ${
                  selected === "assistance"
                    ? "text-white"
                    : "text-primary-color"
                }`}
              >
                2
              </div>
            </>
          }
          className="main-container m-0 py-4 lg:py-7 h-full"
        >
          <Card className="rounded-none bg-transparent border-none shadow-none lg:my-4">
            <CardBody className="border-none overflow-hidden">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                  stiffness: 100,
                }}
                className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-start"
              >
                <div className="flex-1 flex flex-col gap-3 lg:gap-4 text-[#121212]">
                  <MotionH3
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    }}
                    className="text-2xl font-bold"
                  >
                    Who We Are
                  </MotionH3>
                  <MotionP
                    initial={{ opacity: 0, y: "30px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2,
                        duration: 0.8,
                      },
                    }}
                  >
                    We have over 15 years of experience Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aenean Lorem ipsm dolor
                    sit the power of consectetur adi pisi cing elit, sed do
                    eiusmod tempor exercitationemut labore.
                  </MotionP>
                  <MotionP
                    initial={{ opacity: 0, y: "50px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.4,
                        duration: 0.8,
                      },
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean bibendum nec risus et suscipit Curabitur metus ipsum.
                  </MotionP>
                  <MotionDiv
                    initial={{ opacity: 0, y: "50px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.7,
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.2,
                      },
                    }}
                    className="ml-1"
                  >
                    <OutlineButton title="READ MORE" />
                  </MotionDiv>
                </div>
                <div className="flex-1">
                  <Image src={videoThumb} alt="video thumb" />
                </div>
              </MotionDiv>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="experience"
          title={
            <>
              <div
                className={`hidden lg:flex items-center space-x-3 font-semibold ${
                  selected === "experience"
                    ? "text-white"
                    : "text-primary-color"
                }`}
              >
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full font-bold ${
                    selected === "experience"
                      ? "bg-white text-primary-color"
                      : "bg-primary-color text-white"
                  }`}
                >
                  3
                </span>
                <div className="text-start">
                  <p>Proven Expertise</p>
                  <small className="font-normal">
                    Backed by Over 20 Years of Leadership Experience
                  </small>
                </div>
              </div>
              <div
                className={`block py-2 text-lg lg:hidden items-center space-x-2 font-semibold ${
                  selected === "experience"
                    ? "text-white"
                    : "text-primary-color"
                }`}
              >
                3
              </div>
            </>
          }
          className="main-container m-0 py-4 lg:py-7 h-full"
        >
          <Card className="rounded-none bg-transparent border-none shadow-none lg:my-4">
            <CardBody className="border-none overflow-hidden">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                  stiffness: 100,
                }}
                className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-start"
              >
                <div className="flex-1 flex flex-col gap-3 lg:gap-4 text-[#121212]">
                  <MotionH3
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    }}
                    className="text-2xl font-bold"
                  >
                    Who We Are
                  </MotionH3>
                  <MotionP
                    initial={{ opacity: 0, y: "30px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2,
                        duration: 0.8,
                      },
                    }}
                  >
                    We have over 15 years of experience Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aenean Lorem ipsm dolor
                    sit the power of consectetur adi pisi cing elit, sed do
                    eiusmod tempor exercitationemut labore.
                  </MotionP>
                  <MotionP
                    initial={{ opacity: 0, y: "50px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.4,
                        duration: 0.8,
                      },
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean bibendum nec risus et suscipit Curabitur metus ipsum.
                  </MotionP>
                  <MotionDiv
                    initial={{ opacity: 0, y: "50px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.7,
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.2,
                      },
                    }}
                    className="ml-1"
                  >
                    <OutlineButton title="READ MORE" />
                  </MotionDiv>
                </div>
                <div className="flex-1">
                  <Image src={videoThumb} alt="video thumb" />
                </div>
              </MotionDiv>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="investment"
          title={
            <>
              <div
                className={`hidden lg:flex items-center space-x-3 font-semibold ${
                  selected === "investment"
                    ? "text-white"
                    : "text-primary-color"
                }`}
              >
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full font-bold ${
                    selected === "investment"
                      ? "bg-white text-primary-color"
                      : "bg-primary-color text-white"
                  }`}
                >
                  4
                </span>
                <div className="text-start">
                  <p>Client Success</p>
                  <small className="font-normal">
                    Committed to Doing What Truly Matters
                  </small>
                </div>
              </div>
              <div
                className={`block py-2 text-lg lg:hidden items-center space-x-2 font-semibold ${
                  selected === "investment"
                    ? "text-white"
                    : "text-primary-color"
                }`}
              >
                4
              </div>
            </>
          }
          className="main-container m-0 py-4 lg:py-7 h-full"
        >
          <Card className="rounded-none bg-transparent border-none shadow-none lg:my-4">
            <CardBody className="border-none overflow-hidden">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                  stiffness: 100,
                }}
                className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-start"
              >
                <div className="flex-1 flex flex-col gap-3 lg:gap-4 text-[#121212]">
                  <MotionH3
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    }}
                    className="text-2xl font-bold"
                  >
                    Who We Are
                  </MotionH3>
                  <MotionP
                    initial={{ opacity: 0, y: "30px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2,
                        duration: 0.8,
                      },
                    }}
                  >
                    We have over 15 years of experience Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aenean Lorem ipsm dolor
                    sit the power of consectetur adi pisi cing elit, sed do
                    eiusmod tempor exercitationemut labore.
                  </MotionP>
                  <MotionP
                    initial={{ opacity: 0, y: "50px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.4,
                        duration: 0.8,
                      },
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean bibendum nec risus et suscipit Curabitur metus ipsum.
                  </MotionP>
                  <MotionDiv
                    initial={{ opacity: 0, y: "50px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.7,
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.2,
                      },
                    }}
                    className="ml-1"
                  >
                    <OutlineButton title="READ MORE" />
                  </MotionDiv>
                </div>
                <div className="flex-1">
                  <Image src={videoThumb} alt="video thumb" />
                </div>
              </MotionDiv>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
