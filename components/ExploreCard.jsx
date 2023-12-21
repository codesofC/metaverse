'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motion"

const ExploreCard = ({ id, imgUrl, title, active, index, handleClick }) => {
  return (
    <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`relative ${active === id ? 'flex-[10] lg:flex-[3.5]' : 'flex-[2] lg:flex-[0.5]'} flex-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
        onClick={() => handleClick(id)}
    >
        <Image 
            src={imgUrl}
            width={2500}
            height={2000}
            alt={title}
            className="absolute w-full h-full object-cover rounded-[24px]"
        />
        {
            active !== id ? (
                <h3 className="font-semibold text-[18px] sm:text-[26px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
                    { title }
                </h3>
            ) : (
                <div className="absolute bottom-0 p-8 flex-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
                    <div className="relative flex-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]">
                        <Image 
                            src="/assets/headset.svg"
                            width={120}
                            height={120}
                            alt="headset"
                            className="w-1/2 h-1/2 object-contain"
                        />
                    </div>
                    <p className="font-normal text-[16px] leading-[20px] text-white uppercase"> 
                        Enter the Metaverse
                    </p>
                    <h2 className="mt-[24px] font-semibold text-[24px] sm:text-[32px] text-white">
                        { title }
                    </h2>
                </div>
            )
        }
    </motion.div>
  )
}

export default ExploreCard