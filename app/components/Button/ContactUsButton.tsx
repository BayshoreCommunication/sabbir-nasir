import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { MotionButton } from "../Motion/Motion";
import Link from "next/link";

const ContactUsButton = () => {
  return (
    <Link href={"/contact-us"}>
      <MotionButton
        initial={{ opacity: 0, scale: 0 }}
        whileTap={{ scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-full px-4 h-10 text-white text-sm flex items-center justify-center gap-2 hover:text-white bg-primary-color hover:bg-gradient-to-tr from-black via-primary-color to-sky-200"
      >
        <BsFillGridFill />
        <div className="border-r-2 h-full border-gray-500"></div>
        CONTACT US
      </MotionButton>
    </Link>
  );
};

export default ContactUsButton;
