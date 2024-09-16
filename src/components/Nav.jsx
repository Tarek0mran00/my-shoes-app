import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  // State to control the visibility of the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container relative">
        {/* Logo */}
        <a href="/" className="hover:scale-110 transition-transform duration-300 ease-in-out">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="relative">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-600 transition-colors duration-300 ease-in-out relative"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 transform scale-x-0 transition-transform duration-300 ease-in-out"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Sign in / Explore now for Desktop */}
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/" className="hover:text-blue-600 transition-colors duration-300 ease-in-out">
            Sign in
          </a>
          <span>/</span>
          <a href="/" className="hover:text-blue-600 transition-colors duration-300 ease-in-out">
            Explore now
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className=" fixed padding-x py-8 right-8 hidden max-lg:block z-50">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-20 right-0 w-1/2 z-20 h-full   transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col justify-start items-end gap-6 py-4 px-6">
            {navLinks.map((item) => (
              <li key={item.label} className="w-full text-right">
                <a
                  href={item.href}
                  className="block w-full py-2 font-montserrat text-lg text-slate-gray hover:text-blue-600 transition-colors duration-300 ease-in-out"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
