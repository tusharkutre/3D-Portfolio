import React from "react";
import { Link } from "react-router-dom"; // Link is used to navigate between pages in the browser
import { styles } from "../styles"; // styles is used to style the navbar
import { navLinks } from "../constants"; // navLinks is used to store the links for the navbar
import { logo, menu, close } from "../assets"; // logo, menu, and close are used to display the logo, menu, and close icons
import { useState, useEffect } from "react";
import Dark from "./Dark";
import "../index.css";

const Navbar = ({ theme, handleThemeChange }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex justify-between items-center py-4 fixed top-0 z-20 text-white ${
        scrollY > 50
          ? "backdrop-filter backdrop-blur-md"
          : "bg-transparent backdrop-filter backdrop-blur-0"
      } transition-all duration-200`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* link to the home page */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); // scroll to the top of the page
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer  items-center xl:block md:hidden">
            <div className="flex">
              <span className="hidden md:block mx-2">Tushar |</span>
              <span className="hidden md:block">Frontend Developer</span>
            </div>
          </p>
        </Link>

        {/* desktop menu for desktop view */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${
                active === navLink.title ? "text-white" : "text-secondary"
              } text-[18px] font-medium cursor-pointer hover:bg-white hover:text-black px-2 py-1 rounded-md hover:scale-105 transition-all duration-200`}
              onClick={() => setActive(navLink.title)}
            >
              <div
                className={`flex flex-row-reverse items-center gap-2 ${
                  navLink.id === "work" ? "work-link" : ""
                }`}
              >
                {/* link to the each page via id */}
                <Link 
                  to={navLink.path}
                  className="hover:text-black"
                >
                  {navLink.title}
                </Link>
                <img src={navLink.icon} alt={navLink.title} width={40} />
              </div>
            </li>
          ))}
          {/* theme selector */}
          <Dark theme={theme} handleThemeChange={handleThemeChange} />
        </ul>

        {/* hamburger menu for mobile view */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu-icon"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* mobile menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 min-w-[140px] z-10 rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  className={`${
                    active === navLink.title ? "text-white" : "text-secondary"
                  }hover:scale-105 transition-all duration-200 hover:text-white rounded hover:bg-black w-[80%] hover:p-1 text-[18px] font-poppins font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(navLink.title);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Link 
                      to={navLink.path}
                      className="hover:text-white"
                    >
                      {navLink.title}
                    </Link>
                    <img className="" src={navLink.icon} alt={navLink.title} width={35} />
                  </div>
                </li>
              ))}
              {/* theme selector and passing some props to the Dark component */}
              <Dark theme={theme} handleThemeChange={handleThemeChange} />
            </ul>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
