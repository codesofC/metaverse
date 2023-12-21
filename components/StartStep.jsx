'use client'

import React from 'react'

const StartStep = ({ number, text }) => {
  return (
    <div className='flex-center flex-row'>
        <div className='flex-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]'>
            <p className='font-bold text-[20px] text-white'>
                0{ number }
            </p>
        </div>
        <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]'>
            { text }
        </p>
    </div>
  )
}

export default StartStep