import React from 'react'
import { useEffect } from 'react';
import Card from './Card'
import assets from '../assets/assets'
import { useAnimation,motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const layoutAnimate={
  hidden: {
    translateY:-50,
    translateX:-50,
    opacity:0
  },
  visible: {
    translateX:0,
    translateY:0,
    opacity:1,
  }
}

function Packages() {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div  id="packages" className='h-fit'>
      <h1 className='md:mx-20 mx-10 text-2xl font-sans font-bold text-slate-900'>Our Most Visited Destination</h1>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 py-10 gap-8 md:px-20 px-10'>
      {assets.map((cat,id)=>(
        <motion.div 
          initial={{
            translateY:-50,
            translateX:-50,
            opacity:0
          }} 
          whileInView={{
            translateX:0,
            translateY:0,
            opacity:1,
          }} 
          transition={{durtion:1,delay:0.1*id}} 
          viewport={{once:false}}
          key={cat.id}
        >
          <Card price={cat.price} description={cat.description} destination={cat.destination} country={cat.country} id={cat.id} image={cat.image} />
        </motion.div>
      ))}
    </div>
    </motion.div>
  )
}

export default Packages
