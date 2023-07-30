"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "../../styles/Sidebar/Sidebar.css";
import Image from "next/image";

export default function Sidebar({
  isMainDrawerOpen,
  setIsMainDrawerOpen,
}: any) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const [isNestedHomeOpen, setIsNestedHomeOpen] = useState(false);
  const [isNestedJobsOpen, setIsNestedJobsOpen] = useState(false);
  const [isNestedEmployersOpen, setIsNestedEmployersOpen] = useState(false);
  const [isNestedCandidatesOpen, setIsNestedCandidatesOpen] = useState(false);
  const [isNestedPagesOpen, setIsNestedPagesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <motion.div
    onClick={()=> setIsMainDrawerOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMainDrawerOpen ? 0.7 : 0 }} // Make the overlay more opaque when the sidebar is open
        exit={{ opacity: 0 }} // Fade out the overlay when the sidebar is closed
        transition={{ duration: 0.3 }}
        className={
          isMainDrawerOpen
            ? "bg-[rgb(32,33,36,0.5)] w-full h-full cursor-pointer  fixed top-0 left-0 right-0 bottom-0"
            : "bg-[rgb(32,33,36,0.5)] w-full h-full cursor-pointer pointer-events-none fixed top-0 left-0 right-0 bottom-0"
        }
      >
        
      </motion.div>

      <motion.div
        animate={{
          x: isMainDrawerOpen ? "0px" : "-360px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 20,
          },
        }}
        className="sidebar"
      >
        <div className="logo flex items-center justify-between bg-[#fff] py-3 px-3">
          <div>
            <Image
              className="mr-5"
              src="/images/logo-green.png"
              width="130"
              height="60"
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-4">
            <span>
              <i className="ri-user-line text-[1.5rem] "></i>
            </span>
            <span
              className="cursor-pointer"
              onClick={() => setIsMainDrawerOpen(false)}
            >
              <i className="ri-close-fill text-[2.1rem]"></i>
            </span>
          </div>
        </div>
        <div className="bg-[#202124] ">
          <motion.ul
            initial={{ x: 0 }}
            animate={{
              x: isNestedOpen ? -100 : 0,
              display: isNestedOpen ? "none" : "block",
            }}
            exit={{ x: -100 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="menu p-8"
          >
            <li
              className=" hover:text-[#fff] cursor-pointer mb-6 font-['Jost'] transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]"
              onClick={() => {
                setIsNestedOpen(true);
                setIsNestedHomeOpen(true);
              }}
            >
              Home{" "}
              <span>
                <i className="ri-arrow-right-s-line"></i>
              </span>
            </li>
            <li
              className=" hover:text-[#fff]  cursor-pointer mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]"
              onClick={() => {
                setIsNestedOpen(true);
                setIsNestedJobsOpen(true);
              }}
            >
              Jobs{" "}
              <span>
                <i className="ri-arrow-right-s-line"></i>
              </span>
            </li>
            <li
              className=" hover:text-[#fff]  cursor-pointer mb-6 font-['Jost'] transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]"
              onClick={() => {
                setIsNestedOpen(true);
                setIsNestedEmployersOpen(true);
              }}
            >
              Employers{" "}
              <span>
                <i className="ri-arrow-right-s-line"></i>
              </span>
            </li>
            <li
              className=" hover:text-[#fff]  cursor-pointer mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]"
              onClick={() => {
                setIsNestedOpen(true);
                setIsNestedCandidatesOpen(true);
              }}
            >
              Candidates{" "}
              <span>
                <i className="ri-arrow-right-s-line"></i>
              </span>
            </li>
            <li
              className=" hover:text-[#fff]  cursor-pointer font-['Jost'] transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]"
              onClick={() => {
                setIsNestedOpen(true);
                setIsNestedPagesOpen(true);
              }}
            >
              Pages{" "}
              <span>
                <i className="ri-arrow-right-s-line"></i>
              </span>
            </li>
          </motion.ul>
          <div>
            <div className="p-5 ">
              <motion.div
                initial={{ x: 300 }}
                animate={{
                  x: isNestedOpen && isNestedHomeOpen ? 0 : 400,
                  display: isNestedOpen && isNestedHomeOpen ? "block" : "none",
                }}
                transition={{ type: "spring", stiffness: 50 }}
                className=""
              >
                <ul>
                  <button
                    className="bg-[#555]  text-white w-full flex items-start p-3 rounded-md font-['Jost']"
                    onClick={() => {
                      setIsNestedOpen(false);
                      setIsNestedHomeOpen(false);
                    }}
                  >
                    <i className="ri-arrow-left-s-line mr-2 text-lg"></i> Back
                  </button>
                  <div className="mt-4 px-4">
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                  </div>
                </ul>
              </motion.div>
              <motion.div
                initial={{ x: 300 }}
                animate={{
                  x: isNestedOpen && isNestedJobsOpen ? 0 : 400,
                  display: isNestedOpen && isNestedJobsOpen ? "block" : "none",
                }}
                transition={{ type: "spring", stiffness: 50 }}
                className=""
              >
                <ul>
                  <button
                    className="bg-[#555]  text-white w-full flex items-start p-3 rounded-md font-['Jost']"
                    onClick={() => {
                      setIsNestedOpen(false);
                      setIsNestedJobsOpen(false);
                    }}
                  >
                    <i className="ri-arrow-left-s-line mr-2 text-lg"></i> Back
                  </button>
                  <div className="mt-4 px-4">
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                  </div>
                </ul>
              </motion.div>
              <motion.div
                initial={{ x: 300 }}
                animate={{
                  x: isNestedOpen && isNestedEmployersOpen ? 0 : 400,
                  display:
                    isNestedOpen && isNestedEmployersOpen ? "block" : "none",
                }}
                transition={{ type: "spring", stiffness: 50 }}
                className=""
              >
                <ul>
                  <button
                    className="bg-[#555]  text-white w-full flex items-start p-3 rounded-md font-['Jost']"
                    onClick={() => {
                      setIsNestedOpen(false);
                      setIsNestedEmployersOpen(false);
                    }}
                  >
                    <i className="ri-arrow-left-s-line mr-2 text-lg"></i> Back
                  </button>
                  <div className="mt-4 px-4">
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                  </div>
                </ul>
              </motion.div>
              <motion.div
                initial={{ x: 300 }}
                animate={{
                  x: isNestedOpen && isNestedCandidatesOpen ? 0 : 400,
                  display:
                    isNestedOpen && isNestedCandidatesOpen ? "block" : "none",
                }}
                transition={{ type: "spring", stiffness: 50 }}
                className=""
              >
                <ul>
                  <button
                    className="bg-[#555]  text-white w-full flex items-start p-3 rounded-md font-['Jost']"
                    onClick={() => {
                      setIsNestedOpen(false);
                      setIsNestedCandidatesOpen(false);
                    }}
                  >
                    <i className="ri-arrow-left-s-line mr-2 text-lg"></i> Back
                  </button>
                  <div className="mt-4 px-4">
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                  </div>
                </ul>
              </motion.div>
              <motion.div
                initial={{ x: 300 }}
                animate={{
                  x: isNestedOpen && isNestedPagesOpen ? 0 : 400,
                  display: isNestedOpen && isNestedPagesOpen ? "block" : "none",
                }}
                transition={{ type: "spring", stiffness: 50 }}
                className=""
              >
                <ul>
                  <button
                    className="bg-[#555]  text-white w-full flex items-start p-3 rounded-md font-['Jost']"
                    onClick={() => {
                      setIsNestedOpen(false);
                      setIsNestedPagesOpen(false);
                    }}
                  >
                    <i className="ri-arrow-left-s-line mr-2 text-lg"></i> Back
                  </button>
                  <div className="mt-4 px-4">
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                    <li className="hover:text-[#fff] mb-6 font-['Jost']  transition-all delay-200 ease-in-out flex items-center justify-between text-[#979797]">
                      nested 1
                    </li>
                  </div>
                </ul>
              </motion.div>
            </div>
            <div className="px-5 py-3">
              <button className="bg-[#1967D2] w-full text-[rgb(255,255,255,1)] pt-[0.800rem] pb-[0.800rem] pl-[2.4rem] pr-[2.4rem] rounded-md font-['Jost']">
                Job Post
              </button>
              <div>
                <div className="mt-5">
                  <span className="text-[#979797]   font-['Jost'] text-[1.2rem]">
                    Call us
                  </span>
                  <h5 className="text-white mt-2">123 456 7890</h5>
                </div>
                <p className="text-[.8rem] text-[#979797]   leading-6 mt-3">
                  328 Queensberry Street, North Melbourne VIC 3051, Australia.
                </p>
              </div>
              <div className="text-[#979797] flex items-center gap-8 mt-5">
                <span>
                  <i className="ri-facebook-fill text-[1.1rem]"></i>
                </span>
                <span>
                  <i className="ri-twitter-fill text-[1.1rem]"></i>
                </span>
                <span>
                  <i className="ri-linkedin-fill text-[1.1rem]"></i>
                </span>
                <span>
                  <i className="ri-instagram-fill text-[1.1rem]"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
