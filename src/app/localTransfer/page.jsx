/* eslint-disable @next/next/no-img-element */
import PageBanner from "@/components/PageBanner";
import SubFooter from "@/components/SubFooter";
import React from "react";

const LocalTransfer = () => {
  return (
    <div>
      <PageBanner
        img="/local-banner.jpg"
        title="Local Transfers"
        description="We hope you enjoy your ride with us"
      />
      <div className="max-w-[1150px] mx-4 lg:mx-auto my-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-teal-600 text-4xl font-bold mb-10 ">
              Local Car Services
            </h1>

            <p className="leading-6 text-lg text-black">
              At Limolux, we comprehend the meaning of a vehicle administration
              for your big day. <br />
              <br />
              Our wedding vehicles are carefully ready for an immaculate
              appearance, and we{"'"}ll design your course to guarantee
              dependability. We understand the importance of the finer details,
              so feel free to enlighten us if you desire any extras, such as
              enhancements, to elevate your journey{"'"}s delight.
              <br />
              <br />
              Customize your experience with us and make every ride truly
              exceptional.
            </p>
          </div>
          <img src="/local.jpeg" alt="image" className="w-full h-full " />
        </div>
        <h2 className="text-center text-md md:text-4xl text-black gap-y-16">
          Whether you seek lavish indulgence or spacious versatility, our
          versatile fleet ensures the ideal ride for every event.
        </h2>
      </div>
      <SubFooter />
    </div>
  );
};

export default LocalTransfer;
