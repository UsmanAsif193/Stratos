import Link from "next/link";
import React, { useState } from "react";

const NavbarItem = ({ title, classProps, link }) => {
  return (
    <Link href={link}>
      <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
    </Link>
  );
};


const Navbar = ({ blackColor }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="pt-8 md:px-24 px-8">
      <div className="items-center text-lg font-normal justify-between hidden md:flex">
        <h1
          className={`${
            blackColor && "text-black"
          } tracking-[.7rem] uppercase font-extralight`}
        >
          <Link href={"/"}>Stratos</Link>
        </h1>
        <div>
          <ul className="flex">
            <NavbarItem title={"Home"} link="/" />
            <NavbarItem title={"About Stratos"} link="/#about-stratos" />
            <NavbarItem title={"The Social Club"} link="/#social-club" />
          </ul>
        </div>
        <div className="cursor-pointer">
          <NavbarItem
            title={"Contact Us"}
            classProps={`list-none ${blackColor && "text-[#4a9fb1]"}`}
            link="/contactUs"
          />
        </div>
      </div>
      <div className=" md:hidden">
        <div className="flex justify-between">
          <h1 className="tracking-[.7rem] uppercase font-extralight">
            Stratos
          </h1>
          <i
            className="fa fa-bars text-white cursor-pointer"
            onClick={() => setToggleMenu(true)}
          ></i>
        </div>
        <div>
          {toggleMenu && (
            <ul
              className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none 
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
          "
            >
              <li className="text-xl w-full my-2">
                <i
                  className="fas fa-times"
                  onClick={() => setToggleMenu(false)}
                />
              </li>

              <NavbarItem title={"Home"} link="/" classProps="my-2 text-lg" />
              <NavbarItem
                title={"About Stratos"}
                link="/#about-stratos"
                classProps="my-2 text-lg"
              />
              <NavbarItem
                title={"The Social Club"}
                link="/#social-club"
                classProps="my-2 text-lg"
              />
              <NavbarItem
                title={"Contact Us"}
                classProps={`list-none my-2 text-lg ${
                  blackColor && "text-[#4a9fb1]"
                }`}
                link="/contactUs"
              />
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
