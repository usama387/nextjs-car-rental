import styles from "@/constants/styles";
import React from "react";
import TitleText from "./Title";
import { exploreWorlds } from "@/constants/appdata";
import ExploreCard from "./ExploreCard";

const Explore = () => {
  return (
    <section className="px-6 py-10 ">
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TitleText
          title={
            <span className="text-teal-600 font-extrabold">
              Why choose us for your journey?
            </span>
          }
        />
        <div className="my-9 flex flex-col md:flex-row min-h-[50vh] gap-8 lg:mx-32">
          {exploreWorlds?.map((world, index) => (
            <ExploreCard world={world} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
