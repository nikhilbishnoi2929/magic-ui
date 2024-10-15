"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import { ConfettiSideCannons } from "./common/ConfettiSideCannons";
import { IconCloudDemo } from "./common/IconCloudDemo";
import { AnimatedSubscribeButtonDemo } from "./common/AnimatedSubscribeButtonDemo";
const Practice = () => {
  return (
    <div className=" bg-slate-500">
      <div className="max-w-[1164px] mx-auto px-3 py-[80px]">
        <div className="flex justify-between items-center">
          <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p className="text-[3.5rem] font-semibold">
                Magic UI<span className="text-[#5046e6]">.</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem]">
                UI library for{" "}
                <span className="text-[#5046e6]">Design Engineers</span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <div className="mt-6">
                <p>
                  -&gt; 20+ free and open-source animated components built with
                  <span className="font-semibold text-[#5046e6]"> React</span>,
                  <span className="font-semibold text-[#5046e6]">
                    {" "}
                    Typescript
                  </span>
                  ,
                  <span className="font-semibold text-[#5046e6]">
                    {" "}
                    Tailwind CSS
                  </span>
                  , and
                  <span className="font-semibold text-[#5046e6]">
                    {" "}
                    Framer Motion
                  </span>
                  . <br />
                  -&gt; 100% open-source, and customizable. <br />
                </p>
              </div>
            </BoxReveal>
            <div className="pt-8"> </div>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <ConfettiSideCannons />
            </BoxReveal>
          </div>
          <IconCloudDemo />
        </div>
        <div className=" flex justify-center">
          <AnimatedSubscribeButtonDemo />
        </div>
      </div>
    </div>
  );
};

export default Practice;
