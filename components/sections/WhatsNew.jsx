"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import {
  TypingText,
  TitleText,
  StartStep,
  NewFeatures,
  MyStaggerContainer,
} from "..";
import { newFeatures } from "@/constants";

const WhatsNew = () => {
  return (
    <MyStaggerContainer styles="flex-row">
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| What's New?" textStyles="text-start" />
        <TitleText
          title={<>What's new about Metaversus ? </>}
          textStyles="text-start"
        />
        <div className="mt-[48px] flex-between flex-wrap gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className="flex-1 flex-center"
      >
        <Image
          src="/assets/whats-new.png"
          width={900}
          height={900}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </MyStaggerContainer>
  );
};

export default WhatsNew;
