"use client";
import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import OutlineButton from "../Button/OutlineButton";
import Image from "next/image";
import videoThumb from "../../../public/images/homepage/video-thumb.jpg.png";

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
                  <p>Money Care</p>
                  <small className="font-normal">
                    Finding your Next Advisor
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
          className="main-container m-0 py-4 lg:py-7 h-full"
        >
          <Card className="rounded-none bg-transparent border-none shadow-none lg:my-4">
            <CardBody className="border-none">
              <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-start">
                <div className="flex-1 flex flex-col gap-3 lg:gap-4 text-[#121212]">
                  <h3 className="text-2xl font-bold">Who We Are</h3>
                  <p>
                    We have over 15 years of experience Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aenean Lorem ipsm dolor
                    sit the power of consectetur adi pisi cing elit, sed do
                    eiusmod tempor exercitationemut labore.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean bibendum nec risus et suscipit Curabitur metus ipsum.
                  </p>
                  <div className="ml-1">
                    <OutlineButton title="READ MORE" />
                  </div>
                </div>
                <div className="flex-1">
                  <Image src={videoThumb} alt="video thumb" />
                </div>
              </div>
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
                  <p>Friendly Assistance</p>
                  <small className="font-normal">Export Financial Advice</small>
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
            <CardBody>
              <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-start">
                <div className="flex-1 flex flex-col gap-3 lg:gap-4 text-[#121212]">
                  <h3 className="text-2xl font-bold">Who We Are</h3>
                  <p>
                    In Assistance We have over 15 years of experience Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    Lorem ipsm dolor sit the power of consectetur adi pisi cing
                    elit, sed do eiusmod tempor exercitationemut labore.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean bibendum nec risus et suscipit Curabitur metus ipsum.
                  </p>
                  <div className="ml-1">
                    <OutlineButton title="READ MORE" />
                  </div>
                </div>
                <div className="flex-1">
                  <Image src={videoThumb} alt="video thumb" />
                </div>
              </div>
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
                  <p>Our Experience</p>
                  <small className="font-normal">
                    We have 15 Years Experience
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
            <CardBody>
              <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-start">
                <div className="flex-1 flex flex-col gap-3 lg:gap-4 text-[#121212]">
                  <h3 className="text-2xl font-bold">Who We Are</h3>
                  <p>
                    In experience We have over 15 years of experience Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    Lorem ipsm dolor sit the power of consectetur adi pisi cing
                    elit, sed do eiusmod tempor exercitationemut labore.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean bibendum nec risus et suscipit Curabitur metus ipsum.
                  </p>
                  <div className="ml-1">
                    <OutlineButton title="READ MORE" />
                  </div>
                </div>
                <div className="flex-1">
                  <Image src={videoThumb} alt="video thumb" />
                </div>
              </div>
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
                  <p>Client Investment</p>
                  <small className="font-normal">Doing the right thing</small>
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
            <CardBody>
              <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-start">
                <div className="flex-1 flex flex-col gap-3 lg:gap-4 text-[#121212]">
                  <h3 className="text-2xl font-bold">Who We Are</h3>
                  <p>
                    In Client Investment We have over 15 years of experience
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean Lorem ipsm dolor sit the power of consectetur adi
                    pisi cing elit, sed do eiusmod tempor exercitationemut
                    labore.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean bibendum nec risus et suscipit Curabitur metus ipsum.
                  </p>
                  <div className="ml-1">
                    <OutlineButton title="READ MORE" />
                  </div>
                </div>
                <div className="flex-1">
                  <Image src={videoThumb} alt="video thumb" />
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
