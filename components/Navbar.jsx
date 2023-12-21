"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import searchImg from "../public/assets/search.svg";
import menuImg from "../public/assets/menu.svg";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="relative x-paddings py-8"
    >
        <div className="absolute w-1/2 inset-0 gradient-01 -z-10" />
      <div className="mx-auto flex-between gap-8">
        <Image
          src={searchImg}
          width={25}
          height={25}
          alt="search"
          className="object-contain cursor-pointer"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          METAVERSUS
        </h2>
        <Image
          src={menuImg}
          width={25}
          height={25}
          alt="search"
          className="object-contain cursor-pointer"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
