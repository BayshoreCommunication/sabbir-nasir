import { Button } from "@nextui-org/react";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../public/images/logo/sabbir-nasir-png-logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      {/* Top section with logo and description */}
      <div className="main-container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-center gap-6 mb-8">
          <Image
            src={logo}
            alt="sabbir-nasir-logo"
            className="h-auto w-[300px]"
          />
          <div className="hidden lg:block w-px h-12 bg-gray-700 mx-4"></div>
          <p className="text-sm text-primary-color max-w-3xl">
            Need expert guidance? Get in touch with our team today or call for
            personalized support and consulting services.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First column - Useful Links and Twitter Feeds (2/3 width) */}
          <div className="lg:col-span-2">
            {/* Contact information */}
            {/* <div className="bg-white p-4 mb-8 rounded-lg shadow-md w-fit">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="px-4 py-2">
                  <p className="font-semibold">+88 01973-062749</p>
                  <p className="text-sm text-gray-600">sabbir@teamsabbirnasir.com</p>
                </div>
                <div className="px-4 py-2">
                  <p className="font-semibold">Manhattan Hall,</p>
                  <p className="text-sm text-gray-600">Advisor Ltd 1258, Melbourne, australia</p>
                </div>
              </div>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Useful Links */}
              <div>
                <h3 className="font-semibold mb-4 text-lg text-gray-800">
                  Useful Links
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    <a
                      href="/"
                      className="hover:text-gray-600 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    <a
                      href="/about-us"
                      className="hover:text-gray-600 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    <a
                      href="/services"
                      className="hover:text-gray-600 transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    <a
                      href="/who-we-serve"
                      className="hover:text-gray-600 transition-colors"
                    >
                      Who We Serve
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    <a
                      href="/contact-us"
                      className="hover:text-gray-600 transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Twitter Feeds */}
              <div>
                <h3 className="font-semibold mb-4 text-lg text-gray-800">
                  Twitter Feeds
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Bonds
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Commodities
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Investments
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Retirement
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second column - Newsletter (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="bg-white  p-6 rounded-md shadow-md">
              <h3 className="font-semibold mb-3 text-lg text-gray-800">
                Our Newsletter
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Stay informed with the latest insights, strategies, updates and
                receive expert tips from Team Sabbir Nasir to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-50 text-gray-800 border border-gray-200 rounded-full w-full px-4 py-2"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-gray-50 text-gray-800 border border-gray-200 rounded-full w-full px-4 py-2"
                />
                <Button
                  type="submit"
                  className="bg-gray-800 text-white hover:bg-gray-700 rounded-full px-6 w-full"
                >
                  SUBSCRIBE
                </Button>
              </form>

              {/* Social Media Icons */}
              <div className="flex gap-3 mt-6 justify-center">
                <a
                  href="https://www.facebook.com/TeamSabbirNasir"
                  target="_blank"
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <FaFacebook size={16} />
                </a>
                <a
                  href="https://www.instagram.com/teamsabbirnasir"
                  target="_blank"
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <FaInstagram size={16} />
                </a>
                {/* <a
                  href="https://www.youtube.com/channel/UCBCJ4RGRj0DmknwSe1Rjqcg"
                  target="_blank"
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <FaYoutube size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/sabbir-nasir-associates/"
                  target="_blank"
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <FaLinkedin size={16} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>Copyright © 2025 Advisor. All rights reserved.</p>
            <p>
              Designed By{" "}
              <a
                href="https://www.bayshorecommunication.com/"
                target="_blank"
                className="hover:text-gray-600 transition-colors"
              >
                Bayshore Communication
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
