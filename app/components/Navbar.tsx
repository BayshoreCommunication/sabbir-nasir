"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import logo from "../../public/images/logo/sabbir-nasir-png-logo.png";
import ScheduleButton from "./Button/ScheduleButton";

export default function NavContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log("pathname", pathname);

  const navItems = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "ABOUT US",
      link: "/about-us",
    },
    {
      title: "OUR FRAMEWORK",
      link: "/our-framework",
    },
    {
      title: "WHO WE SERVE",
      link: "/who-we-serve",
    },
    {
      title: "BLOGS",
      link: "/blogs",
    },
    {
      title: "NEWS",
      link: "/news",
    },
  ];

  return (
    <main className="w-full bg-white relative z-50 border-b border-gray-100">
      <div className="main-container">
        <Navbar
          maxWidth="full"
          className="py-3 lg:py-4"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarBrand className="justify-start">
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="sabbir-nasir-logo"
                  className="h-[3.5rem] w-auto"
                />
              </Link>
            </NavbarBrand>

            <MdOutlineSearch size={24} color="#132841" className="lg:hidden" />

            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden justify-end text-primary-color"
            />
          </NavbarContent>

          <NavbarContent className="hidden lg:flex gap-8" justify="center">
            {navItems.map((item, index) => (
              <NavbarItem key={index}>
                <Link
                  className={`hover:text-[#00bcd4] font-medium  transition-colors duration-200 ${
                    pathname === item.link
                      ? "text-[#00bcd4] font-semibold"
                      : "text-gray-700"
                  }`}
                  href={item.link}
                >
                  {item.title}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          <NavbarContent className="hidden lg:flex gap-4" justify="end">
            <NavbarItem>
              <ScheduleButton>
                <Link href="/contact-us">SCHEDULE A CALL</Link>
              </ScheduleButton>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="pt-8">
            {navItems.map((item, index) => (
              <NavbarMenuItem key={index} className="pt-2">
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium text-gray-700 transition-colors duration-200 ${
                    pathname === item.link ? "text-[#00bcd4] font-semibold" : ""
                  }`}
                  href={item.link}
                >
                  {item.title}
                </Link>
              </NavbarMenuItem>
            ))}
            <NavbarMenuItem className="pt-4">
              <ScheduleButton>
                <Link href="/contact-us">SCHEDULE A CALL</Link>
              </ScheduleButton>
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
      </div>
    </main>
  );
}
