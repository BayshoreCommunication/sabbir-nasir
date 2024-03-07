import React from "react";
import Topbar from "../components/Topbar";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import PrimaryButton from "../components/Button/PrimaryButton";
import { MotionDiv } from "../components/Motion/Motion";

const ContactUs = () => {
  return (
    <>
      <Topbar mainPage="Contact Us" />
      <section className="main-container spacer">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-6 lg:gap-12">
          <div className="flex flex-col gap-3">
            <MotionDiv
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
              className="bg-white shadow-medium p-3 flex flex-col gap-2"
            >
              <FaLocationDot size={20} />
              <h6 className="font-semibold">Your Company location here</h6>
              <p className="text-gray-400 text-xs font-medium">Our Location</p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.8,
                },
              }}
              className="bg-white shadow-medium p-3 flex flex-col gap-2"
            >
              <FiPhoneCall size={18} />
              <h6 className="font-semibold">(813) 560-3005</h6>
              <p className="text-gray-400 text-xs font-medium">Let’s Talk</p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                  duration: 0.8,
                },
              }}
              className="bg-white shadow-medium p-3 flex flex-col gap-2"
            >
              <CgMail size={20} />
              <h6 className="font-semibold">sabbirnasir@gmail.com</h6>
              <p className="text-gray-400 text-xs font-medium">Drop a Line</p>
            </MotionDiv>
          </div>
          <MotionDiv
            initial={{ opacity: 0, y: "-50px" }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
          >
            <form className="w-full flex flex-col gap-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                className="w-full px-4 py-2.5 rounded-md outline outline-2 outline-gray-300 focus:outline-gray-400 text-gray-600 text-sm"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Email Address"
                className="w-full px-4 py-2.5 rounded-md outline outline-2 outline-gray-300 focus:outline-gray-400 text-gray-600 text-sm"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Phone Number"
                className="w-full px-4 py-2.5 rounded-md outline outline-2 outline-gray-300 focus:outline-gray-400 text-gray-600 text-sm"
              />
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="w-full px-4 py-2.5 rounded-md outline outline-2 outline-gray-300 focus:outline-gray-400 text-gray-600 text-sm"
              ></textarea>
              <PrimaryButton width="w-full" rounded="rounded-md">
                SUBMIT
              </PrimaryButton>
            </form>
            <p className="text-sm font-medium mt-3 font-[inter]">
              * I understand that the use of this form for communication with
              Digital Xperience Group (DXG).
            </p>
          </MotionDiv>
        </div>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6142.475588110276!2d90.38124945835504!3d23.735329241886532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c8e1ea9fd1%3A0xa6e274882fdbce53!2sDhaka%20College!5e0!3m2!1sen!2sbd!4v1709715803147!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default ContactUs;
