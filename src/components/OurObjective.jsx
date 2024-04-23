/* eslint-disable @next/next/no-img-element */
import React from "react";
import TitleText from "./Title";
import { homeCards } from "@/constants/appdata";

const OurObjective = () => {
  return (
    <div className="bg-teal-200 pt-12 mb-10">
      <TitleText
        title={
          <span className="text-gray-500 font-extrabold">Our Objective</span>
        }
      />

      <div className="mx-10 md:mx-[10%] mt-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
          {homeCards.map((car, index) => (
            <div key={index} className="rounded shadow-lg bg-white">
              <div className="w-full relative">
                <img
                  src={car.img}
                  alt="car-image"
                  className="w-full object-cover rounded-md"
                />
              </div>
              <div className="font-bold text-xl mb-2 text-teal-500 p-2">
                {car.title}
              </div>
              <p className="bg-blue-800 text-white p-2 rounded-md text-center">
                {car.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurObjective;
