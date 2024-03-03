"use client";
import React, { useState } from "react";
// import { Link } from "@nextui-org/link";
// import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import logo from "../../public/images/logo/sabbir-nasir-svg-logo.svg";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
// } from "@nextui-org/navbar";
import Image from "next/image";
import { MdOutlineSearch } from "react-icons/md";

export default function NavContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "HOME",
    "ABOUT US",
    "SERVICES",
    "WHO WE SERVE",
    "NEWS",
    "CONTACT US",
  ];

  const menuItems = [
    "HOME",
    "ABOUT US",
    "SERVICES",
    "WHO WE SERVE",
    "NEWS",
    "CONTACT US",
  ];

  return (
    <main className="main-container">
      <div className="hidden lg:flex bg-[url('/images/logo/navbar-frame.png')] w-full h-[2.2rem] bg-cover justify-between items-center text-white px-16 text-sm font-normal">
        <small>We have over 15 years of experience.</small>
        <small>+1 900 234 567</small>
        <small>786 South Park Avenue</small>
        <small>Mon to Sat 08:00 - 16:30</small>
      </div>
      <Navbar
        maxWidth="full"
        className="sticky top-10"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarBrand className="justify-start">
            <Image
              src={logo}
              alt="sabbir-nasir-logo"
              className="h-[3.0rem] w-auto"
            />
          </NavbarBrand>

          <MdOutlineSearch size={24} color="#132841" className="lg:hidden" />

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden justify-end text-primary-color"
          />
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-5" justify="end">
          {navItems.map((item) => (
            <NavbarItem key={item}>
              <Link<any>
                className="hover:text-[#4d84cc]"
                color="foreground"
                href="#"
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>|</NavbarItem>

          <NavbarItem>
            <MdOutlineSearch size={24} className="mt-1" />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="h-[3rem]">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link<any>
                // color={
                //   index === 2
                //     ? "primary"
                //     : index === menuItems.length - 1
                //     ? "danger"
                //     : "foreground"
                // }
                color={"foreground"}
                className="w-full text-base"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </main>
  );
}
