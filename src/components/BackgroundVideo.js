import React from 'react';
import lake from '../lake.mp4';
import { motion,Variants } from 'framer-motion';

function BackgroundVideo() {
  const filterAnimate={
    hidden: {y:100,opacity:0},
    visible:{
      y:0,
      opacity:1,
      transition: {
        type:"spring",
        duration: 1.5,
        delay:0.5,
        stiffness:10
      }
    }
  }
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center' id="home"
    > 
      <video
        className="absolute h-[100%] w-full -z-10 object-cover"
        autoPlay
        muted
        loop
      >
        <source src= {lake} type="video/mp4" />
    </video>
    <motion.div className='flex flex-col gap-10 md:items-start items-center'
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{once:false, amount:0.5}}
      transition={{staggerChildren:0.5}}
      variants={filterAnimate}
    >
      <div className='flex flex-col gap-1'>
        <h2 className='text-md text-white'>Our Packages</h2>
        <h1 className='text-3xl text-white font-bold'>Search your Holiday</h1>
      </div>
      <div className='flex flex-row max-[858px]:flex-col gap-8 bg-white w-[70vw] p-6'>
        <div className='flex flex-col min-[858px]:w-1/3 w-full'>
          <label> Enter your destination:</label>
          <input type="text" className=' w-full bg-slate-200 mt-2  rounded-md py-auto px-4'/>
        </div>
        <div className='flex flex-col min-[858px]:w-1/3 w-full'>
          <label>Select Date</label>
          <input type="date" className='w-full bg-slate-200 mt-2  rounded-md py-auto px-4'/>
          
        </div>
        <div className='flex flex-col min-[858px]:w-1/3 w-full'>
          <label>Max Price</label>
          <input type='number' className='w-full bg-slate-200 mt-2  rounded-md py-auto px-4' />
          
        </div>
      </div>
    </motion.div>
    </div>

  )
}

export default BackgroundVideo
