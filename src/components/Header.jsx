"use client";
import React from "react";
import HyperText from "@/components/ui/hyper-text";
import { DockDemo } from "./magic/DockDemo";
import { AnimatedListDemo } from "./magic/Notifications";
import WordRotate from "@/components/ui/word-rotate";
import TypingAnimation from "@/components/ui/typing-animation";
import BlurIn from "@/components/ui/blur-in";
import LetterPullup from "@/components/ui/letter-pullup";
import WordPullUp from "@/components/ui/word-pull-up";
import { ConfettiSideCannons } from "./common/ConfettiSideCannons";
import SparklesText from "@/components/ui/sparkles-text";
const Header = () => {
  return (
    <div className="relative h-screen group bg-slate-400">
      <div className="py-3 container max-w-[1164px] px-3 mx-auto">
        <div className=" flex justify-between">
          <HyperText
            className="text-2xl font-bold text-black dark:text-white"
            text="magic UI"
          />
          <div className=" flex items-center gap-9">
            <WordRotate
              className="text-lg font-bold cursor-pointer text-black dark:text-white"
              words={["Word", "Rotate"]}
            />
            <TypingAnimation
              className="text-lg font-bold cursor-pointer text-black dark:text-white"
              text="Typing Animation"
            />
            <BlurIn
              word="Blur In"
              className="text-lg font-bold cursor-pointer text-black dark:text-white"
            />
            <LetterPullup words={"Staggered Letter"} delay={0.05} />
            <WordPullUp
              className="text-lg font-bold cursor-pointer tracking-[-0.02em] text-black dark:text-white md:leading-[5rem]"
              words="Word Pull Up"
            />
          </div>
        </div>

        <div>
          <AnimatedListDemo />
          <div className=" flex justify-center pt-8">
            <ConfettiSideCannons />
          </div>
          <div className=" flex justify-center pt-12">
            <SparklesText text="Magic UI" />
          </div>
        </div>
      </div>
      <div className="absolute left-[50%] bottom-[-4%] opacity-0 group-hover:opacity-100 group-hover:bottom-0 duration-300 transform translate-x-[-50%]">
        <DockDemo />
      </div>
    </div>
  );
};

export default Header;
