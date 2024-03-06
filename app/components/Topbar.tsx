import Link from "next/link";
import React from "react";
import { TbSlash } from "react-icons/tb";
import ContactUsButton from "./Button/ContactUsButton";
import { RxSlash } from "react-icons/rx";

const Topbar = ({ mainPage }: { mainPage: string }) => {
  return (
    <div className="bg-secondary-color py-8">
      <div className="main-container flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        <div className="flex items-center gap-1">
          <h1 className="text-3xl font-semibold uppercase">{mainPage}</h1>
          <RxSlash size={18} />
          <Link href={"/"}>Home</Link>
          <RxSlash size={16} />
          <p className="text-gray-400">{mainPage}</p>
        </div>
        <ContactUsButton />
      </div>
    </div>
  );
};

export default Topbar;
