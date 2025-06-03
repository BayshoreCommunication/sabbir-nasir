import React from "react";
import Topbar from "../components/Topbar";
import OutlineButton from "../components/Button/OutlineButton";
import Image from "next/image";
import videoThumb from "../../public/images/homepage/video-thumb.jpg.png";
import { FaBusinessTime } from "react-icons/fa";
import { IoMdBusiness } from "react-icons/io";
import { IoBusiness } from "react-icons/io5";
import logo1 from "../../public/images/about-us/company-logo-1.png";
import logo2 from "../../public/images/about-us/company-logo-2.png";
import logo3 from "../../public/images/about-us/company-logo-3.png";
import logo4 from "../../public/images/about-us/company-logo-4.png";
import logo5 from "../../public/images/about-us/company-logo-5.png";
import logo6 from "../../public/images/about-us/company-logo-6.png";
import CustomerFeedback from "../components/CustomerFeedback/CustomerFeedback";
import {
  MotionDiv,
  MotionH3,
  MotionLi,
  MotionP,
} from "../components/Motion/Motion";

const AboutUsPage = () => {
  const companyLogo = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <div>
      <Topbar mainPage="About Us" />
      {/* company Overview */}
      <section className="main-container flex flex-col lg:flex-row items-center gap-8 text-center lg:text-start spacer">
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
            Company Overview
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
            <strong>Team Sabbir Nasir</strong> is a visionary platform dedicated
            to transforming individuals, businesses, and institutions through
            strategic consulting, emotional intelligence coaching, and
            purposeful self-discovery.
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
            Founded by <strong>Sabbir Hasan Nasir</strong>, a renowned corporate
            leader, retail strategist, and thought mentor, our mission is to
            help people and organizations achieve clarity, sustainability, and
            growth—both internally and externally. Drawing from decades of
            experience leading multinationals and transforming Bangladesh’s
            retail landscape, Sabbir combines business acumen with human-centric
            wisdom rooted in systems thinking, leadership theory, and Sufi
            philosophy.
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
            At the heart of our work is the belief that transformation begins
            within. Whether we are building strategic roadmaps for a
            corporation, guiding a professional toward emotional mastery, or
            helping an individual explore their higher self, we approach every
            engagement with deep listening, analytical precision, and authentic
            care.
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
            Our multidisciplinary team brings together experts in strategy,
            branding, organizational development, emotional intelligence, and
            spiritual coaching. This allows us to serve a wide range of
            clients—from startups and corporate leaders to seekers and
            creatives—with tailored programs designed to create real impact.
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
            We are not just consultants. We are co-travelers in your journey of
            becoming.
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
        <MotionDiv
          initial={{ opacity: 0, y: "-50px" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.2,
            },
          }}
          className="flex-1"
        >
          <Image src={videoThumb} alt="video thumb" />
        </MotionDiv>
      </section>
      {/* company history  */}
      <section className="w-full bg-secondary-color">
        <div className="main-container spacer flex flex-col gap-3 lg:gap-4">
          <MotionP
            initial={{ opacity: 0, x: "-50px" }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            className="text-2xl font-bold"
          >
            Company History
          </MotionP>
          <MotionP
            initial={{ opacity: 0, x: "50px" }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
          >
            It is pleasure, but because those who do not know how to pursue
            pleasure rationally encounter consequences that are extremely
            painful. Nor again is there anyone who loves or pursues or desires
            to obtain pain of itself.
          </MotionP>
          {/* stepper */}
          <div className="ml-4 mt-2">
            <ul className="relative text-gray-600 border-s border-gray-300">
              <MotionLi
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                  },
                }}
                className="mb-10 ms-10"
              >
                <div className="absolute flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full -start-4 ring-4 ring-white">
                  <FaBusinessTime />
                </div>
                <div className="">
                  <h2 className="font-semibold text-xl">2022</h2>
                  <div>
                    <h3 className="font-medium text-lg">
                      Start with a small Business
                    </h3>
                    <p className="text-sm">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout The point of using Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </MotionLi>
              <MotionLi
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    duration: 1,
                  },
                }}
                className="mb-10 ms-10"
              >
                <div className="absolute flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full -start-4 ring-4 ring-white">
                  <IoMdBusiness />
                </div>
                <div className="">
                  <h2 className="font-semibold text-xl">2023</h2>
                  <div>
                    <h3 className="font-medium text-lg">First Recognition</h3>
                    <p className="text-sm">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout The point of using Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </MotionLi>
              <MotionLi
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    duration: 1,
                  },
                }}
                className="mb-10 ms-10"
              >
                <div className="absolute flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full -start-4 ring-4 ring-white">
                  <IoBusiness />
                </div>
                <div className="">
                  <h2 className="font-semibold text-xl">2024</h2>
                  <div>
                    <h3 className="font-medium text-lg">
                      World Most Popular Firm
                    </h3>
                    <p className="text-sm">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout The point of using Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </MotionLi>
            </ul>
          </div>
        </div>
      </section>
      {/* our partner  */}
      {/* <section className="main-container spacer">
        <MotionP
          initial={{ opacity: 0, x: "-50px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          className="text-3xl font-semibold text-center mb-4"
        >
          Our Partners
        </MotionP>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-1">
          {companyLogo.map((logo, index) => (
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.2 * index,
                  duration: 1,
                },
              }}
              key={index}
            >
              <Image src={logo} alt="logo-image" />
            </MotionDiv>
          ))}
        </div>
      </section> */}
      {/* customer feedback */}
      <CustomerFeedback />
    </div>
  );
};

export default AboutUsPage;
