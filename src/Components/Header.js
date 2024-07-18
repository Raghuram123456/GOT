import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosClose as IoClose } from "react-icons/io";
import { IoIosMenu as IoMenu } from "react-icons/io";
import Images from "../Images/Got.avif";
import Season from "../pages/Season";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="font-[Poppins] shadow-lg">
      <header className="bg-white shadow-lg h-[65px] fixed w-full z-50">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <img className="h-16 cursor-pointer" src={Images} alt="Logo" />
          </div>
          <div
            className={`nav-links duration-1000 md:static absolute bg-white

md:min-h-fit min-h-[40vh]
left-0 ${
              isMenuOpen ? "top-[100%]" : "-top-[500%]"
            } md:w-auto w-full flex items-center px-5`}
          >
            <ul
              className="flex items-center md:flex-row flex-col md:items-
center md:gap-[4vw] gap-8 cursor-pointer"
            >
              <li
                className="hover:bg-black px-2 py-2 rounded-sm hover:text-
white text-lg"
              >
                HOME
              </li>

              <li
                className="hover:bg-black px-2 py-2 rounded-sm hover:text-
white text-lg"
              >
                ABOUT
              </li>

              <li
                className="hover:bg-black px-2 py-2 rounded-sm hover:text-
white text-lg"
              >
                <div className="">
                  <Season />
                </div>  
              </li>

              <li
                className="hover:bg-black px-2 py-2 rounded-sm hover:text-
white text-lg"
              >
                CAST & CREW
              </li>
            </ul>
          </div>
          {isMenuOpen ? (
            <IoClose
              className="text-3xl cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          ) : (
            <IoMenu
              className="text-3xl cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          )}
        </nav>
      </header>
    </div>
  );
}
export default Header;
