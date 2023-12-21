"use client";

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { MyStaggerContainer, TitleText, TypingText } from "..";

const World = () => {
  return (
    <MyStaggerContainer>
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[500px]"
      >
        <Image
          src="/assets/map.png"
          width={1500}
          height={800}
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full  bg-[#5d6680]">
          <Image
            src="/assets/people-01.png"
            width={70}
            height={70}
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full  bg-[#5d6680]">
          <Image
            src="/assets/people-02.png"
            width={70}
            height={70}
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full  bg-[#5d6680]">
          <Image
            src="/assets/people-03.png"
            width={70}
            height={70}
            alt="people"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </MyStaggerContainer>
  );
};

export default World;
