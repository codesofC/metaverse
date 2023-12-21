"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, planetVariants } from "@/utils/motion";
import { TypingText, TitleText, StartStep, MyStaggerContainer } from "..";
import { startingFeatures } from "@/constants";

const GetStarted = () => {
  return (
    <MyStaggerContainer styles="flex-row">
      <motion.div
        variants={planetVariants("left")}
        className="flex-1 flex-center"
      >
        <Image
          src="/assets/get-started.png"
          width={900}
          height={900}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" textStyles="text-start" />
        <TitleText
          title={
            <>
              Get Started <br className="hidden md:block" /> with just a few
              click
            </>
          }
          textStyles="text-start"
        />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartStep key={index} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </MyStaggerContainer>
  );
};

export default GetStarted;
