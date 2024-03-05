import React from "react";
import logo from "../../public/images/logo/sabbir-nasir-svg-footer-logo.svg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="bg-primary-color text-white ">
      <div className="main-container flex flex-col gap-4 py-3 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-4">
          <Image
            src={logo}
            alt="sabbir-nasir-logo"
            className="h-[3.0rem] w-auto"
          />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipis civelit sed quia non qui dolorem
            or phone +11 987 654 3210 ipsum quia dolor sit amet, consectetur.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-4">
          <div className="flex-[3] flex flex-col gap-4">
            <div className="bg-[#0F2136] flex flex-col lg:flex-row gap-y-4 justify-around py-2 px-2 lg:px-0">
              <div>
                <p>+1 900 234 567</p>
                <small>supprt@advisor.com</small>
              </div>
              <div>
                <p>Manhattan Hall,</p>
                <small>Advisor Ltd 1258, Melbourne, australia</small>
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
                Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed
                do eiusmod.
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
                  className="border border-white bg-primary-color hover:bg-gradient-to-tr from-[#00070f] via-primary-color to-[#6e8fb5] text-white shadow-lg w-max"
                >
                  SUBSCRIBE
                </Button>
              </form>
            </div>
            <div className="flex justify-center py-3 bg-[#0F2136]">
              <div className="flex gap-2">
                <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center">
                  <FaFacebook color="#132841" />
                </div>
                <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center">
                  <FaYoutube color="#132841" />
                </div>
                <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center">
                  <FaInstagram color="#132841" />
                </div>
                <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center">
                  <FaLinkedin color="#132841" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-3 text-sm text-center">
        <div className="flex flex-col lg:flex-row gap-1 justify-between text-black main-container">
          <p>Copyright © 2024 Sabbir Nasir. All rights reserved.</p>
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
