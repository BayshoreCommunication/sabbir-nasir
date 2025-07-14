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
  MotionButton,
  MotionDiv,
  MotionH3,
  MotionLi,
  MotionP,
} from "../components/Motion/Motion";
import ContactUsButton from "../components/Button/ContactUsButton";
import { Link } from "@nextui-org/react";
import { BsFillGridFill } from "react-icons/bs";

const AboutUsPage = () => {
  const companyLogo = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <div>
      <Topbar mainPage="About Us" />
      {/* company Overview */}
      <div className="mb-12">
        <section className="main-container flex flex-col lg:flex-row items-center gap-8 text-center lg:text-start spacer">
          <div className="flex-1 flex flex-col gap-3 lg:gap-4 lg:gap-y-6 text-[#121212]">
            <div>
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
                About Sabbir Nasir & Associates
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
                Sabbir Nassir & Associates is a global business transformation
                consultancy created to help people and organizations scale to
                their full potential with clarity and purpose. We partner with
                founders, senior executives, and investors, working together to
                apply the Sabbir Nasir Transformation Framework, which combines
                proven business transformation principles with human presence,
                responsibility, and soul.
              </MotionP>
            </div>
            <div>
              <MotionH3
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                  },
                }}
                className="text-2xl font-bold flex flex-col items-start"
              >
                Sabbir Nasir
                <small className="text-lg  font-semibold mb-2">
                  Owner and Founder
                </small>
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
                Sabbir Nasir launched his own consultancy because he observed
                that stagnating companies need more than templated advice,
                PowerPoint decks, and periodic check- ins with a traditional
                advisor. Sabbir is{" "}
                <strong>
                  a true partner and transformational architect who walks the
                  journey with you
                </strong>{" "}
                physically, mentally, emotionally, and spiritually. And he’ll
                stay with you until you can sustain your transformational
                strategies without him.
              </MotionP>
              <MotionP
                initial={{ opacity: 0, y: "30px" }}
                className="mt-2"
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.8,
                  },
                }}
              >
                who walks the journey with you – physically, mentally,
                emotionally, and spiritually. And he’ll stay with you until you
                can sustain your transformational strategies without him. Sabbir
                offers not only practical business experience and insights, but
                also his full presence and a genuine desire to see people and
                organizations thrive. He’ll help you
                <strong>
                  ee clearly, think strategically, and act decisively.
                </strong>{" "}
                You’ll learn what your business needs, what your soul wants, and
                how to honor both in a unified vision for business and
                individual growth.
              </MotionP>
            </div>
          </div>
          {/* <div className="flex-1 flex flex-col gap-3 lg:gap-4 text-[#121212]">
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
        </div> */}
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
        <div className="main-container  flex flex-col  gap-8 text-[#121212] ">
          <div>
            <MotionH3
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              className="text-2xl font-bold flex flex-col items-start"
            >
              Transformational Leadership
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
              As Managing Director of ACI Logistics, Sabbir led the
              transformation of Shwapno from a struggling retailer with low
              brand equity to the{" "}
              <strong> largest, fastest-growing supermarket chain</strong> in
              Bangladesh. Shwapno achieved record sales, record store-level
              profitability, and record operating profits across more than 600
              stores in 2024.
            </MotionP>
            <MotionP
              initial={{ opacity: 0, y: "30px" }}
              className="mt-2"
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.8,
                },
              }}
            >
              Prior to joining ACI Logistics, Sabbir founded RoadMap Limited, a
              retail consultancy firm specializing in the retail and fast-moving
              consumer goods (FMCG) sectors. He also served as CEO of Otobi,
              transforming the medium-sized enterprise into the{" "}
              <strong> largest furniture manufacturer and retailer</strong> in
              Bangladesh – and one of the country’s most admired brands.
            </MotionP>
          </div>
          <div>
            <MotionH3
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              className="text-2xl font-bold flex flex-col items-start"
            >
              A Spiritual Journey
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
              Soon after taking the reigns as CEO of Otobi, Sabbir felt the full
              weight of his new role. He was entrusted with the livelihoods and
              dreams of more than 1,000 employees and their families. When a
              friend gave Sabbir a book on Sufism, something metaphysical
              stirred inside him and sparked a profound spiritual
              transformation.
            </MotionP>
            <MotionP
              initial={{ opacity: 0, y: "30px" }}
              className="mt-2"
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.8,
                },
              }}
            >
              Sabbir met yogis of the Himalayan Shaivite tradition. He traveled
              to Konya, Turkey, the land of Shams-e-Tabriz, Rumi, and whirling
              dervishes. He encountered the Kabbalists in Europe. Returning to
              Bangladesh, Sabbir met a humble vegetable trader who brought
              clarity to the Quran, Torah, and Vedas through his embodiment of
              their teachings.
            </MotionP>
            <MotionP
              initial={{ opacity: 0, y: "30px" }}
              className="mt-2"
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.8,
                },
              }}
            >
              These experiences led to an awakening of the soul and spirit that
              forms the foundation of Sabbir’s approach to business
              transformation. Clarity before action. Stillness before scaling.
              Alignment before growth.
            </MotionP>
            <MotionP
              initial={{ opacity: 0, y: "30px" }}
              className="mt-2"
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.8,
                },
              }}
            >
              <strong>
                People, culture, structure, data, systems, strategy, and process
                are all parts of the equation. But real transformation begins
                within.
              </strong>
            </MotionP>
          </div>
          <div>
            <MotionH3
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              className="text-2xl font-bold flex flex-col items-start"
            >
              Education
            </MotionH3>
            <ul className="list-disc ms-4">
              <li>
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
                  MIT Sloan School of Management: Advanced Certificate for
                  Executives in Management, Innovation and Technology, Business
                  Administration and Management, General
                </MotionP>
              </li>
              <li>
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
                  Harvard Business School: Certificate, Retail Forum for Senior
                  Leaders
                </MotionP>
              </li>
              <li>
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
                  University of California, Berkeley, Haas School of Business:
                  Certificate of Excellence, Data Science and Analytics
                </MotionP>
              </li>
              <li>
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
                  Institute of Business Administration, University of Dhaka:
                  MBA, Marketing
                </MotionP>
              </li>
              <li>
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
                  Bangladesh University of Engineering and Technology: B.Sc.
                  Engineer, Mechanical Engineering
                </MotionP>
              </li>
            </ul>
          </div>
          <div>
            <MotionH3
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              className="text-2xl font-bold flex flex-col items-start"
            >
              Speak with Sabbir
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
              Schedule a complimentary 30-minute discovery call with Sabbir
              Nasir. You’ll begin to{" "}
              <strong>
                see what is holding you back, and what is possible through
                transformation.
              </strong>{" "}
              Let’s start this journey together.
            </MotionP>
          </div>
          {/* Button } SCHEDULE A CALL */}
          <div>
            <Link href={"/contact-us"}>
              <MotionButton
                initial={{ opacity: 0, scale: 0 }}
                whileTap={{ scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-full px-4 h-10 text-white text-sm flex items-center justify-center gap-2 hover:text-white bg-primary-color hover:bg-gradient-to-tr from-black via-primary-color to-sky-200"
              >
                <BsFillGridFill />
                <div className="border-r-2 h-full border-gray-500"></div>
                SCHEDULE A CALL
              </MotionButton>
            </Link>
          </div>
        </div>
      </div>
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
