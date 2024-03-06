import React from "react";
import ContactUsButton from "./Button/ContactUsButton";

const AnyQuery = () => {
  return (
    <div className="bg-[#E9EBF1] py-6">
      <div className="flex flex-col lg:flex-row gap-y-2 justify-between items-center main-container">
        <p className="text-base font-semibold text-center">
          If you have any querry for related investment... We are available
        </p>
        <ContactUsButton />
      </div>
    </div>
  );
};

export default AnyQuery;
