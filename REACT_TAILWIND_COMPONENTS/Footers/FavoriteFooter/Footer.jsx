import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {
  HiLocationMarker,
  HiMail,
  HiPhone,
  HiOfficeBuilding,
} from "react-icons/hi";
import { IoIosRocket } from "react-icons/io";

function Footer() {
  return (
    <div>

        
      <footer className="text-center text-white items-center justify-center flex flex-col dark:bg-gray-900/80">


        {/* Social media links */}
        <div className="w-full flex justify-center p-5">

          <div className="flex flex-wrap gap-8 p-2 w-full md:mx-24  mx-12  justify-center items-center">


            
            <NavLink
              className="text-neutral-800 dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              to="https://www.facebook.com/"
            >
              <FaFacebookF
                size={25}
                className="transition-transform transform hover:scale-110"
              />
            </NavLink>


            

            <NavLink
              className="text-neutral-800 dark:text-neutral-200 hover:text-green-500 dark:hover:text-green-500 transition-colors duration-300"
              to="https://api.whatsapp.com/send?phone=919456541392&text=%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F"
            >
              <FaWhatsapp
                size={25}
                className="transition-transform transform hover:scale-110"
              />
            </NavLink>

            

            <NavLink
              className="text-neutral-800 dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400/90 transition-colors duration-300"
              to="https://x.com/"
            >
              <FaTwitter
                size={25}
                className="transition-transform transform hover:scale-110"
              />
            </NavLink>


            

            <NavLink
              className="text-neutral-800 dark:text-neutral-200 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
              to="___12_devin_12___"
            >
              <FaInstagram
                size={25}
                className="transition-transform transform hover:scale-110"
              />
            </NavLink>

            

            <NavLink
              className="text-neutral-800 dark:text-neutral-200 hover:text-blue-700 dark:hover:text-blue-600 transition-colors duration-300"
              to="in/vinod-barti-339571268"
            >
              <FaLinkedinIn
                size={25}
                className="transition-transform transform hover:scale-110"
              />
            </NavLink>

            

            <NavLink
              className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-black transition-colors duration-300"
              to="https://github.com/Vinod123456183"
            >
              <FaGithub
                size={25}
                className="transition-transform transform hover:scale-110"
              />
            </NavLink>


            

            <NavLink
              className="text-neutral-800 dark:text-neutral-200 hover:text-red-600/90 dark:hover:text-red-600/90 transition-colors duration-300"
              to="https://www.youtube.com/"
            >
              <AiFillYoutube
                size={25}
                className="transition-transform transform hover:scale-110"
              />
            </NavLink>


            

            <NavLink
              className="text-neutral-800 dark:text-neutral-200 hover:text-blue-400/90 dark:hover:text-blue-400/90 transition-colors duration-300"
              to="https://www.telegram.com/"
            >
              <FaTelegram
                size={25}
                className="transition-transform transform hover:scale-110"
              />
            </NavLink>

            
          </div>
        </div>

        {/* Footer content */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* TW Elements section */}
            <div>
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <IoIosRocket className="mr-3 h-4 w-4" />
                TW Elements
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* Products section */}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Products
              </h6>
              <p className="mb-4">
                <NavLink
                  className="text-neutral-600 dark:text-neutral-200"
                  to="/angular"
                >
                  Angular
                </NavLink>
              </p>
              <p className="mb-4">
                <NavLink
                  className="text-neutral-600 dark:text-neutral-200"
                  to="/react"
                >
                  React
                </NavLink>
              </p>
              <p className="mb-4">
                <NavLink
                  className="text-neutral-600 dark:text-neutral-200"
                  to="/vue"
                >
                  Vue
                </NavLink>
              </p>
              <p>
                <NavLink
                  className="text-neutral-600 dark:text-neutral-200"
                  to="/laravel"
                >
                  Laravel
                </NavLink>
              </p>
            </div>
            {/* Useful links section */}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <NavLink
                  className="text-neutral-600 dark:text-neutral-200"
                  to="/pricing"
                >
                  Pricing
                </NavLink>
              </p>
              <p className="mb-4">
                <NavLink
                  className="text-neutral-600 dark:text-neutral-200"
                  to="/settings"
                >
                  Settings
                </NavLink>
              </p>
              <p className="mb-4">
                <NavLink
                  className="text-neutral-600 dark:text-neutral-200"
                  to="/orders"
                >
                  Orders
                </NavLink>
              </p>
              <p>
                <NavLink
                  className="text-neutral-600 dark:text-neutral-200"
                  to="/help"
                >
                  Help
                </NavLink>
              </p>
            </div>
            {/* Contact section */}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <HiLocationMarker className="mr-3 h-5 w-5" />
                New York, NY 10012, US
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <HiMail className="mr-3 h-5 w-5" />
                info@example.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <HiPhone className="mr-3 h-5 w-5" />
                +01 234 567 88
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <HiOfficeBuilding className="mr-3 h-5 w-5" />
                +01 234 567 89
              </p>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="bg-neutral-200 px-6 p-2 rounded-md text-center dark:bg-black">
          <span>@2023 Copyright </span>
          <NavLink
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            to="/">
            TW Element
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
