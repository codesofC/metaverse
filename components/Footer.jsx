'use client'

import { socials } from "@/constants"
import { footerVariants } from "@/utils/motion"
import { motion } from "framer-motion"
import Image from "next/image"

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="paddings py-8 relative"
    >
      <div className="footer-gradient" />

      <div className="inner-width mx-auto flex flex-col gap-8">
        <div className="flex-between flex-wrap gap-5">
          <h4 className="font-bold text-[44px] md:text-[64px] text-white"> Enter the Metaverse </h4>
          <button 
            type="button"
            className="flex-center h-fit py-4 px-6 bg-[#24618b] rounded-[32px] gap-[12px]"
          >
            <Image 
              src="/assets/headset.svg"
              width={30}
              height={30}
              alt="headset"
              className="object-contain"
            />
            <span className="font-normal text-[16px] text-white"> ENTER METAVERSE </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[14px] text-white"> Metaversus 
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright &copy; 2023 - Metaversus. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map(social => (
                <Image 
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  width={25}
                  height={25}
                  className="object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer