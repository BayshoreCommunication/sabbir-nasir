import React from "react";
import { BsFillGridFill } from "react-icons/bs";

const AnyQuery = () => {
  return (
    <div className="bg-[#E9EBF1] py-6">
      <div className="flex flex-col lg:flex-row gap-y-2 justify-between items-center main-container">
        <p className="text-base font-semibold text-center">
          If you have any querry for related investment... We are available
        </p>
        <button className="bg-primary-color rounded-full px-4 h-10 text-white text-sm flex items-center justify-center gap-2">
          <BsFillGridFill />
          <div className="border-r-2 h-full border-gray-500"></div>
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default AnyQuery;
