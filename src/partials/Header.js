import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/cssfiles/header.css";

function Header() {
  const [top, setTop] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-gray-800 blur shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#header-logo)"
                  fillRule="nonzero"
                />
              </svg>
              <span className="font-semibold text-white text-xl py-5">
                Astrum
              </span>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className=" flex flex-grow  ">
            <ul className=" flex-grow justify-end flex-wrap items-center DESKTOP-MENU hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/pastd"
                  className="btn-sm mr-3  bg-white text-back hover:text-gray-900 px-5 flex items-center transition duration-150 ease-in-out"
                >
                  Previous Disasters
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="btn-sm mr-3 bg-gray-900 text-gray-200 hover:bg-gray-800 px-5 flex items-center transition duration-150 ease-in-out"
                >
                  Broadcast Room
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="btn-sm  bg-white text-back hover:text-gray-900 px-5 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                >
                  <span>Sign up</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
          <section className=" flex lg:hidden hamMenu">
            <div
              className="HAMBURGER-ICON md:hidden space-y-2 p-2 rounded bg-gradient-to-r from-yell to-high"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-1 w-8 animate-pulse bg-white"></span>
              <span className="block h-1 w-8 animate-pulse bg-white"></span>
              <span className="block h-1 w-8 animate-pulse bg-white"></span>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="my-6">
                  <Link
                    to="/pastd"
                    className="btn-sm bg-white text-back hover:text-gray-900 px-5 flex items-center transition duration-150 ease-in-out"
                  >
                    Previous Disasters
                  </Link>
                </li>
                <li className="my-6">
                  <Link
                    to="/signin"
                    className="btn-sm  bg-white text-back hover:text-gray-900 px-5 flex items-center transition duration-150 ease-in-out"
                  >
                    Sign in
                  </Link>
                </li>
                <li className="my-6">
                  <Link
                    to="/signup"
                    className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                  >
                    <span>Sign up</span>
                    <svg
                      className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <div className=" hamMenu"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
