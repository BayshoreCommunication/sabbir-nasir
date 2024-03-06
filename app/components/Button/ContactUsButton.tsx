import React from "react";
import { BsFillGridFill } from "react-icons/bs";

const ContactUsButton = () => {
  return (
    <button className="bg-primary-color rounded-full px-4 h-10 text-white text-sm flex items-center justify-center gap-2">
      <BsFillGridFill />
      <div className="border-r-2 h-full border-gray-500"></div>
      CONTACT US
    </button>
  );
};

export default ContactUsButton;
