"use client";

import { motion } from "framer-motion";
import { slideIn, textVariant } from "@/utils/motion";
import Image from "next/image";
import coverImg from "../../public/assets/cover.png";
import Link from "next/link";
import { MyStaggerContainer } from "..";

const Hero = () => {
  return (
    <MyStaggerContainer>
      <div className="flex-center flex-col relative z-10">
        <motion.div variants={textVariant(1.1)} className="hero-heading">
          Metaverse
        </motion.div>
        <motion.div variants={textVariant(1.2)} className="flex-center">
          <h1 className="hero-heading"> Ma </h1>
          <div className="hero-d-text" />
          <h1 className="hero-heading"> ness </h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full -mt-[12px] md:-mt-[20px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <Image
          src={coverImg}
          width={1500}
          height={1000}
          alt="cover"
          className="w-full h-[350px] sm:h-[450px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <Link href="#explore">
          <div className="w-full flex justify-end -mt-[50px] sm:-mt-[70px] pr-[40px] relative z-10">
            <Image
              src={"/assets/stamp.png"}
              width={200}
              height={200}
              alt="stamp"
              className="w-[100px] sm:w-[155px] h-[100px] sm:h-[155px] object-contain"
            />
          </div>
        </Link>
      </motion.div>
    </MyStaggerContainer>
  );
};

export default Hero;
