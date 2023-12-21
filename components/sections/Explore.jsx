'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

import { exploreWorlds } from "@/constants"
import { staggerContainer } from "@/utils/motion"
import { TypingText } from ".."
import { TitleText } from "../TypingText"
import ExploreCard from "../ExploreCard"


const Explore = () => {

  const [active, setActive] = useState(exploreWorlds[1].id)

  return (
    <section className="paddings" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="inner-width mx-auto flex flex-col"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText 
          title={<>Choose the world you want
                <br className="hidden md:block" /> to explore</>}
          textStyles="text-center"  
        />
        <div className="mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5">
            {exploreWorlds.map((world, index) => (
              <ExploreCard 
                key={index}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore