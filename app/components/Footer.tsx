import React from "react";
import logo from "../../public/images/logo/sabbir-nasir-svg-footer-logo.svg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <main className="bg-primary-color text-white ">
      <div className="main-container flex flex-col gap-4 py-3 lg:py-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
          <Image
            src={logo}
            alt="sabbir-nasir-logo"
            className="h-[3.5rem] w-auto"
          />
          <p className="text-sm">
            Need expert guidance? Get in touch with our team today or call
            01973-062749 for personalized support and consulting services.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-4">
          <div className="flex-[3] flex flex-col gap-4">
            <div className="bg-[#0F2136] flex flex-col lg:flex-row gap-y-4 justify-around py-2 px-2 lg:px-0">
              <div>
                <p>+88 01973-062749</p>
                <small>sabbir@teamsabbirnasir.com</small>
              </div>
              <div>
                <p>House 21, Road 1, Block A,</p>
                <small>Aftab Nagar, Dhaka, Bangladesh</small>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-10">
              {/* useful links */}
              <div className="flex-1 flex flex-col gap-y-3">
                <h4>Useful Links</h4>
                <div className="flex gap-16 font-thin text-sm">
                  <ul className="list-disc flex flex-col gap-1 list-inside">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>News</li>
                    <li>Contact Us</li>
                  </ul>
                  <ul className="list-disc flex flex-col gap-1 list-inside">
                    <li>Bonds</li>
                    <li>Commodities</li>
                    <li>Investments</li>
                    <li>Retirement</li>
                  </ul>
                </div>
              </div>
              {/* Twitter feeds */}
              <div className="flex-1 flex flex-col gap-y-3">
                <h4>Twitter Feeds</h4>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <div className="text-sm">
                      <p>@Rotography Please kindly use our</p>
                      <p>Support Forum: pixelatic.co.uk.</p>
                    </div>
                    <small>about a month ago</small>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-sm">
                      <p>@Rotography Please kindly use our</p>
                      <p>Support Forum: pixelatic.co.uk.</p>
                    </div>
                    <small>about a month ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* newslatter  */}
          <div className="flex-1">
            <div className="bg-[#0C1929] p-3 lg:p-6 flex flex-col gap-3">
              <h4 className="text-lg">Our Newsletter</h4>
              <p className="text-sm">
                Stay informed with the latest insights, strategies, updates and
                receive expert tips from Team Sabbir Nasir to your inbox.
              </p>
              <form action="#" className="flex flex-col gap-2">
                <input
                  className="rounded-full w-full py-2 px-3 text-gray-700 outline-none text-sm"
                  placeholder="Your Name"
                />
                <input
                  className="rounded-full w-full py-2 px-3 text-gray-700 outline-none text-sm"
                  placeholder="Your Email Address"
                />
                <Button
                  radius="full"
                  className="border border-white bg-primary-color hover:bg-gradient-to-tr from-black via-primary-color to-sky-200 text-white shadow-lg w-max"
                >
                  SUBSCRIBE
                </Button>
              </form>
            </div>
            <div className="flex justify-center py-3 bg-[#0F2136]">
              <div className="flex gap-2">
                <a
                  href="https://www.facebook.com/sabbirnasirassociates"
                  target="_blank"
                  className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-primary-color hover:text-white hover:bg-primary-color hover:border border-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCBCJ4RGRj0DmknwSe1Rjqcg"
                  target="_blank"
                  className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-primary-color hover:text-white hover:bg-primary-color hover:border border-white"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/associatessabbirnasir/"
                  target="_blank"
                  className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-primary-color hover:text-white hover:bg-primary-color hover:border border-white"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/sabbir-nasir-associates/"
                  target="_blank"
                  className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-primary-color hover:text-white hover:bg-primary-color hover:border border-white"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-3 text-sm text-center">
        <div className="flex flex-col lg:flex-row gap-1 justify-between text-black main-container">
          <p>Copyright © 2025 Sabbir Nasir. All rights reserved.</p>
          <p>
            Designed & Developed By{" "}
            <a
              className="hover:underline underline-offset-2"
              target="_blank"
              href={`https://www.bayshorecommunication.com/`}
            >
              Bayshore Communication
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
