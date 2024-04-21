"use client";
import { links } from "@/constants/appdata";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  //  managing state for smaller devices
  const [isMenu, setIsMenu] = useState(false);

  // getting current path to pass in template literal
  const pathname = usePathname();

  return (
    <div className="bg-white h-16 shadow-lg flex justify-between items-center md:px-[8%]">
      <Link
        href={"/"}
        className="bg-teal-600 text-white p-2 rounded-md m-2 font-bold text-2xl text-center pl-5 md:pl-0"
      >
        USAMAKEEPSCODE
      </Link>

      <button
        className="md:hidden flex flex-col gap-1 pr-5"
        onClick={() => setIsMenu(!isMenu)}
      >
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
      </button>

      {/* div with both bigger and mobile responsive nav items */}
      <div
        className={` ${
          isMenu ? "flex flex-col absolute top-16 w-full" : "hidden md:flex"
        } gap-5 md:flex-row md:static bg-white md:w-auto text-center`}
      >
        {links?.map((link) => (
          <div key={link.path}>
            <Link
              href={link.path}
              exact={link.exact}
              className={`${
                pathname === link.path
                  ? "bg-blue-700 text-white p-2 rounded-md font-semibold"
                  : "text-black font-semibold"
              }`}
            >
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
