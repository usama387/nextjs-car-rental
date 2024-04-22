"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/constants/motion";

// this component is a child component of Explore component

const TitleText = ({ title, textStyles }) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-2 text-teal-800 font-bold md:text-[64px] text-[36px] text-center ${textStyles} `}
    >
      {title}
    </motion.h2>
  );
};

export default TitleText;
