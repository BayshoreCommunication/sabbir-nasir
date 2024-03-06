import Link from "next/link";
import React from "react";
import { TbSlash } from "react-icons/tb";
import ContactUsButton from "./Button/ContactUsButton";
import { RxSlash } from "react-icons/rx";

const Topbar = ({ mainPage }: { mainPage: string }) => {
  return (
    <div className="bg-secondary-color py-8">
      <div className="main-container flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        <div className="flex flex-col lg:flex-row items-center gap-1">
          <h1 className="text-3xl font-semibold uppercase">{mainPage}</h1>
          <RxSlash size={18} className="hidden lg:flex" />
          <div className="flex gap-1 items-center">
            <Link href={"/"}>Home</Link>
            <RxSlash size={16} />
            <p className="text-gray-400">{mainPage}</p>
          </div>
        </div>
        <ContactUsButton />
      </div>
    </div>
  );
};

export default Topbar;
