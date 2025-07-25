"use client";
import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody, Link } from "@nextui-org/react";
import OutlineButton from "../Button/OutlineButton";
import ArrowButton from "../Button/ArrowButton";
import Image from "next/image";
import videoThumb from "../../../public/images/homepage/video-thumb.jpg.png";
import visionFraming from "../../../public/images/homepage/vision.png";
import culturalRedesign from "../../../public/images/homepage/cultural.png";
import executionSystems from "../../../public/images/homepage/execution.png";
import strategicRoadmapping from "../../../public/images/homepage/strategic.png";
import structuralReengineering from "../../../public/images/homepage/structural.png";
import expansion from "../../../public/images/homepage/expansion.png";
import { MotionDiv, MotionH3, MotionP } from "../Motion/Motion";

export default function TabSection() {
  const [selected, setSelected] = useState("money");

  //   console.log("selected", selected);

  return (
    <div className="flex w-full flex-col items-center hola-test">
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
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                    selected === "money"
                      ? "bg-white text-primary-color"
                      : "bg-primary-color text-white"
                  }`}
                >
                  1
                </span>
                <div className="text-start">
                  <p>Business Transformation Consulting</p>
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
                    className="text-4xl lg:text-5xl font-bold text-center"
                  >
                    Process Engineering and Resource Development
                  </MotionH3>
                  
                  {/* Service Categories Grid */}
                  <MotionDiv
                    initial={{ opacity: 0, y: "20px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.3,
                        duration: 0.8,
                      },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6"
                  >
                    {/* Vision Framing */}
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                        <Image src={visionFraming} alt="Vision Framing" className="w-8 h-8" />
                      </div>
                      <span className="font-medium text-gray-800 text-lg">Vision Framing</span>
                    </div>

                    {/* Cultural Redesign */}
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                        <Image src={culturalRedesign} alt="Cultural Redesign" className="w-8 h-8" />
                      </div>
                      <span className="font-medium text-gray-800 text-lg">Cultural Redesign</span>
                    </div>

                    {/* Execution Systems */}
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                        <Image src={executionSystems} alt="Execution Systems" className="w-8 h-8" />
                      </div>
                      <span className="font-medium text-gray-800 text-lg">Execution Systems</span>
                    </div>

                    {/* Strategic Roadmapping */}
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                        <Image src={strategicRoadmapping} alt="Strategic Roadmapping" className="w-8 h-8" />
                      </div>
                      <span className="font-medium text-gray-800 text-lg">Strategic Roadmapping</span>
                    </div>

                    {/* Structural Re-engineering */}
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                        <Image src={structuralReengineering} alt="Structural Re-engineering" className="w-8 h-8" />
                      </div>
                      <span className="font-medium text-gray-800 text-lg">Structural Re-engineering</span>
                    </div>

                    {/* Expansion */}
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                        <Image src={expansion} alt="Expansion" className="w-8 h-8" />
                      </div>
                      <span className="font-medium text-gray-800 text-lg">Expansion</span>
                    </div>
                  </MotionDiv>

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
                    className="text-[#8C8C8C]"
                  >
                    You&apos;ve hit a wall. Your passion, talent, and energy drove
                    your company&apos;s early success, but you&apos;re caught in what we
                    call the Holy Trap – &ldquo;holy&rdquo; because of the positive traits
                    that got you here, but &ldquo;trapped&rdquo; by a lack of clarity in
                    vision, culture, structure, and data.
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
                    className="text-[#8C8C8C]"
                  >
                    The business isn&apos;t broken. But{" "}
                    <em className="text-[#141212]">you&apos;re stuck and can&apos;t figure out why.</em>
                    
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
                    className="text-[#8C8C8C]"
                  >
                    Let us guide you through the Sabbir Nasir Transformation
                    Framework, a highly structured process designed to turn
                    confusion into clarity, data into insight, and potential
                    into performance. That&apos;s how you{" "}
                    <em className="text-[#141212]">
                      break through that wall, realize your vision, and scale
                      from $10 million to $100 million and beyond.
                    </em>
                  </MotionP>
                  <ArrowButton size="lg">Our Framework</ArrowButton>
                
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
                className={`hidden lg:flex items-center space-x-3 py-3  h-full font-semibold ${
                  selected === "assistance"
                    ? "text-white"
                    : "text-primary-color"
                }`}
              >
                <span
                  className={`w-8 h-8 flex items-center  justify-center rounded-full font-bold ${
                    selected === "assistance"
                      ? "bg-white text-primary-color"
                      : "bg-primary-color text-white"
                  }`}
                >
                  2
                </span>
                <div className="text-start">
                  <p>From Stagnation to Scale</p>
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
                    className="text-4xl lg:text-5xl font-bold text-center"
                  >
                   From Stagnation to Scale
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
                    className="text-[#8C8C8C]"
                  >
                    We partner with founders, senior executives, and investors whose successful companies have plateaued and require <em className="text-[#141212]">transformation to scale and thrive</em>.
                    While Sabbir Nassir has significant experience transforming businesses in retail, manufacturing, and private equity, the SabbirNasir Transformation  Framework can be applied to organizations in virtually any industry, anywhere in the world to{" "}
                    <em className="text-[#141212]">
                    maximize performance and profitability
                    </em>.
                  </MotionP>

                  <ArrowButton size="lg">Who We Serve</ArrowButton>
                
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
                className={`hidden lg:flex items-center space-x-3 py-3 font-semibold ${
                  selected === "experience"
                    ? "text-white"
                    : "text-primary-color"
                }`}
              >
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                    selected === "experience"
                      ? "bg-white text-primary-color"
                      : "bg-primary-color text-white"
                  }`}
                >
                  3
                </span>
                <div className="text-start">
                  <p>Who We Are</p>
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
                    className="text-4xl lg:text-5xl font-bold text-center"
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
                    className="text-[#8C8C8C]"
                  >
                    Sabbir Nasir has spent nearly three decades leading the transformations of multinational and private companies – <em className="text-[#141212]">not by simply advising, but by understanding and doing</em>.  His approach is heavily influenced by his own spiritual journey that taught him invaluable lessons about presence and self- awareness. With Sabbir’s guidance, you’ll move forward with clarity, scale with confidence, and{" "}
                    <em className="text-[#141212]">
                    achieve sustainable growth and success
                    </em>.
                  </MotionP>

                  <ArrowButton size="lg">Our Story</ArrowButton>
                
                </div>
              </MotionDiv>
            </CardBody>
          </Card>
        </Tab>
        {/* <Tab
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
        </Tab> */}
      </Tabs>
    </div>
  );
}
