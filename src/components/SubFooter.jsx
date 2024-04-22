/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoMdContacts } from "react-icons/io";
import { MdCardTravel } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";

const SubFooter = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-[0_2px_15px_-3px-rgba(0,0,0,0.07),0_10px_20px_-2px-rgba(0,0,0,0.04)] md:flex-row relative">
      <img
        src="/lower-banner.jpg"
        alt=""
        className="h-96 w-full object-cover md:h-[60vh] lg:-[80vh]"
      />
      <div className="flex flex-col justify-center gap-8 md:px-16 px-8 md:my-0 my-8">
        {/* first  */}
        <div className="flex items-center gap-5">
          <span className="shadow-xl text-2xl rounded-full">
            <MdCardTravel className="text-teal-500" />
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl text-blue-800 font-bold">Special Events</h5>
            <p className="text-teal-900 mb-4 text-base border-l-4 border-cyan-600 pl-4">
              Book cars for events
            </p>
          </div>
        </div>

        {/* Second */}
        <div className="flex items-center gap-5">
          <span className="shadow-xl text-2xl rounded-full">
            <IoCarSport className="text-teal-500" />
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl text-blue-800 font-bold">Our fleet</h5>
            <p className="text-teal-900 mb-4 text-base border-l-4 border-cyan-600 pl-4">
              Book rides for offices
            </p>
          </div>
        </div>

        {/* Third */}
        <div className="flex items-center gap-5">
          <span className="shadow-xl text-2xl rounded-full">
            <IoMdContacts className="text-teal-500" />
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl text-blue-800 font-bold"> About us</h5>
            <p className="text-teal-900 mb-4 text-base border-l-4 border-cyan-600 pl-4">
              We are a karachi based company providing quality car rides across
              all the city
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
