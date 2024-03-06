import React from "react";
import PrimaryButton from "./components/Button/PrimaryButton";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center my-20 flex flex-col gap-4 justify-center items-center text-[#132841] main-container">
      <h1 className="font-extrabold text-7xl lg:text-9xl text-[#132841]">
        Oops
      </h1>
      <p className="mt-5 font-bold text-lg">404 - PAGE NOT FOUND</p>
      <div>
        <p>The page you looking for might have been removed, or</p>
        <p>{`had it's name changed or is temporarily unavailable`}</p>
      </div>
      <Link href={"/"}>
        <PrimaryButton>GO TO HOMEPAGE</PrimaryButton>
      </Link>
    </div>
  );
};

export default NotFound;
