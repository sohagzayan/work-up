"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Logo from "./images/logo-green.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";
import { menu1Items } from "@/utility/manu";
import { Divide as Hamburger } from 'hamburger-react'

gsap.registerPlugin(ScrollTrigger);

export default function Header({setIsMainDrawerOpen, isMainDrawerOpen}:any) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set up GSAP timeline
    const timeline = gsap.timeline();

    // Define the header element
    const header = document.querySelector("header");

    // Scrolled header styles
    const scrolledStyles = {
      backgroundColor: "#fff", // Set the background color when scrolled
      color: "#677782", // Set the text color when scrolled
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)"
    };

    // Create the scroll animation
    timeline.to(header, {
      backgroundColor: scrolledStyles.backgroundColor,
      color: scrolledStyles.color,
      boxShadow: scrolledStyles.boxShadow,
      duration: 0.7,
      scrollTrigger: {
        trigger: header,
        start: "top top",
        end: "bottom top", // Change this value to control the animation duration
        scrub: true,
      },
    });
  }, []);

  return (
    <header
      className="flex items-center bg-transparent px-4"
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        height: "73px",
        backgroundColor: "transparent"
        
      }}
    >
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
            className="mr-5"
              src="/images/logo-green.png"
              width="130"
              height="60"
              alt="logo"
            />
            <div className="xl:block hidden ">
            <ul className="flex gap-8">
              <DropdownMenu menuItems={menu1Items} menu="Home"/>
              <DropdownMenu menuItems={menu1Items} menu="Find Jobs"/>
              <DropdownMenu menuItems={menu1Items} menu="Employers"/>
              <DropdownMenu menuItems={menu1Items} menu="Candidates"/>
              <DropdownMenu menuItems={menu1Items} menu="Blog"/>
              <DropdownMenu menuItems={menu1Items} menu="Pages"/>
            </ul>
            </div>
              
          </div>
          <div className=" xl:block hidden">
            <div className="flex  items-center ml-4 gap-8">
              <button className="bg-[#1966d228] text-[#1967D2] pt-[0.800rem] pb-[0.800rem] pl-[2rem] pr-[2rem] rounded-md font-['Jost'] ">Login / Register</button>
              <button className="bg-[#1967D2] text-[rgb(255,255,255,1)] pt-[0.800rem] pb-[0.800rem] pl-[2.4rem] pr-[2.4rem] rounded-md font-['Jost']">Job Post</button>
              <h5><i className="ri-notification-3-line text-[1.4rem] font-['Jost']" /></h5>              
            </div>
          </div>
          <div className="xl:hidden block">
          <div className="flex items-center gap-6">
              <span><i className="ri-user-line text-[1.4rem]"></i></span>
              <span><i className="ri-notification-3-line text-[1.4rem] font-['Jost']" /></span>
              <span><Hamburger toggled={isMainDrawerOpen} toggle={setIsMainDrawerOpen}  size={25} /></span>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
