"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { MyStaggerContainer, TypingText } from "..";
import Image from "next/image";

const About = () => {
  return (
    <MyStaggerContainer>
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="text-white font-extrabold"> Metaverse </span>
        is a new thing in the future, where you can enjoy the virtual world by
        feeling like it's really real, you can feel what you feel in this
        metaverse world, because this is really the{" "}
        <span className="text-white font-extrabold">
          {" "}
          madness of the metaverse{" "}
        </span>{" "}
        of today, using only{" "}
        <span className="text-white font-extrabold"> VR </span>
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's{" "}
        <span className="text-white font-extrabold"> explore </span>
        the madness of the metaverse by scrolling down
      </motion.p>
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="w-[18px] h-[28px] mt-[28px]"
      >
        <Image
          src={"/assets/arrow-down.svg"}
          width={18}
          height={18}
          alt="Arrow down"
          className="w-full object-contain"
        />
      </motion.div>
    </MyStaggerContainer>
  );
};

export default About;
