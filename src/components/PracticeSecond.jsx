"use client";
import React from "react";
import { AnimatedBeamDemo } from "./common/Circle";

const PracticeSecond = () => {
  return (
    <div className="h-screen  bg-slate-600">
      <div className=" container max-w-[1164px]">
        <div className=" flex justify-center">
          <AnimatedBeamDemo />
        </div>
      </div>
    </div>
  );
};

export default PracticeSecond;
