'use client'

import { fadeIn } from "@/utils/motion"
import { motion } from "framer-motion"
import Image from "next/image"

const InsightCard = ({ index, title, subtitle, imgUrl}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex flex-col md:flex-row gap-4"
    >
      <Image 
        src={imgUrl}
        width={500}
        height={500}
        alt="planet-01"
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />

      <div className="w-full flex-between">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal text-[26px] lg:text-[42px] text-white"> {title} </h4>
          <p className="mt-[16px] font-normal text-[14px] lg:text-[20px] text-secondary-white"> {subtitle} </p>
        </div>

        <div className="hidden lg:flex justify-center items-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
          <Image 
            src="/assets/arrow.svg"
            width={50}
            height={50}
            alt='arrow'
            className="w-2/5 h-2/5 object-contain"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default InsightCard