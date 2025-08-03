"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const BlogDetailsSidebar = () => {
  return (
    <div>
      <motion.div
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 "
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-4">
          <motion.div
            className="relative w-24 h-24 mx-auto mb-4 border-2 border-gray-200 rounded-full image-contain image-top"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about-us/s.nasir.png"
              alt="Sabbir Hasan Nasir"
              fill
              className="object-cover rounded-full image-right"
            />
          </motion.div>
          <motion.h3
            className=" mb-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Sabbir Nasir
          </motion.h3>
          <motion.p
            className="text-base text-primary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Founder
          </motion.p>
        </div>

        <motion.p
          className="mb-4  leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {`Sabbir Nasir and his team observed that stagnating companies need more than templated advice, PowerPoint decks, and periodic check-ins with a traditional advisor. Sabbir and his team is a true partner and transformational architect who walks the journey with you – physically, mentally, emotionally, and spiritually.`}
        </motion.p>

        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/about-us" className="">
            <p className="text-primary hover:text-primary/80 hover:underline">
              More About Us
            </p>
          </Link>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-3 mt-4 justify-center">
            {[
              {
                href: "https://www.facebook.com/teamsabbirnasir",
                icon: <FaFacebook className="text-[20px]" />,
              },
              {
                href: "https://www.linkedin.com/sabbir-nasir-associates",
                icon: <FaLinkedin className="text-[20px]" />,
              },
              {
                href: "https://www.instagram.com/teamsabbirnasir",
                icon: <PiInstagramLogoFill className="text-[20px]" />,
              },
              {
                href: "https://www.youtube.com/@TeamSabbir_Nasir",
                icon: <FaYoutube className="text-[20px]" />,
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target="_blank"
                className="group inline-block p-2 bg-[#F4F6F6] border border-primary rounded-full duration-300 hover:bg-primary"
              >
                <div className="text-primary group-hover:text-white text-sm">
                  {item.icon}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogDetailsSidebar;
