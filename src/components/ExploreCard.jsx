import Image from "next/image";
import React from "react";

// ExploreCard is also a child component of Explore component

const ExploreCard = ({ world }) => {
  return (
    <div className=" text-center w-full sm:mx-auto mt-16 shadow-xl text-teal-900 px-10 py-6 gradient-05 sm:p-8 rounded-lg border-blue-800 border-2  relative cursor-pointer hover:shadow-third-color">
      <div className="mx-auto w-32 h-32 -mt-[85px] relative border border-white rounded-full overflow-hidden">
        <Image
          src={world.imgUrl}
          fill
          alt="card"
          className="object-cover object-center h-32"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-teal-700">{world.title}</h2>
        <p className="text-white bg-blue-800 p-3 rounded-md mt-6 ">
          {world.description}
        </p>
      </div>
    </div>
  );
};

export default ExploreCard;
