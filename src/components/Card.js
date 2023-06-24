import React from 'react'
import { ImLocation } from 'react-icons/im';
import {HiOutlineClipboardCheck} from 'react-icons/hi';
import { motion } from 'framer-motion';

const imageAnimate={
  whileonhover:{
    opacity:1,
    scale: 1.4,
    transition:{
      duration: 1
    }
  }
}

function Card({image,price,destination,description,country,id}) {
  return (
    <motion.div className='flex flex-col bg-slate-300 h-[75vh] rounded-md gap-4 shadow-lg'
      whileInView={"visible"}
      initial={"hidden"}
      transition={{staggerChildren:0.5}}
      viewport={{once:true,amout:0.5}}
    >
        <motion.div className='h-1/3 overflow-hidden max-[768px]:h-full' initial="hidden" whileHover="whileonhover">
        <motion.img src={image} className=' h-full w-full' variants={imageAnimate}/>
        </motion.div>
        <div className='flex flex-col gap-2 pt-2 pl-6'>
            <h1 className='text-3xl  text-slate-800 font-semibold h-10'>{destination}</h1>
            <div className='flex flex-row gap-1 items-center text-md text-slate-600 font-medium h-6'>
                <ImLocation />
                <h1>{country}</h1>
            </div>
        </div>
        <h1 className='text-3xl font-bold pl-6 h-10'>$ {price}</h1>
        <p className='px-6 font-mono text-slate-600 h-44 overflow-y-auto'>{description}</p>
        <div className='flex items-end mb-5 ml-6 h-12'>
          <button className='flex flex-row justify-start gap-2 bg-cyan-600 rounded-xl p-2 w-fit items-center text-white text-lg '><HiOutlineClipboardCheck />Details</button>
        </div>
    </motion.div>
  )
}

export default Card
