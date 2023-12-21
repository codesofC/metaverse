"use client";

import { fadeIn, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { MyStaggerContainer } from "..";

const Feedback = () => {
  return (
    <MyStaggerContainer styles="flex-row">
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="relative flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 p-4 sm:p-8 rounded-[32px] border[1px] border-[#6a6a6a]"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold text-[26px] sm:text-[32px] leading-[36px] sm:leading-[40px] text-white">
            {" "}
            Cristooo{" "}
          </h4>
          <p className="mt-[8px] font-normal text-[12px] sm:text-[18px] leading-[16px] sm:leading-[22px] text-white">
            Founder | Metaversus
          </p>
        </div>
        <p className="mt-[24px] text-white font-normal text-[18px] sm:text-[24px] leading-[39px] sm:leading-[45px]">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex-center"
      >
        <Image
          src="/assets/planet-09.png"
          width={2500}
          height={2000}
          alt="planet-09"
          className="w-full h-auto lg:h-[610px] min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="hidden lg:block absolute -left-[10%]  top-[5%]"
        >
          <Image
            src="/assets/stamp.png"
            width={200}
            height={200}
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </MyStaggerContainer>
  );
};

export default Feedback;
