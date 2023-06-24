import React from "react";
import { motion, spring } from "framer-motion";

const imageAnimate = {
  hidden: {x: -100,opacity: 0},
  visible: {
    x:0,
    opacity:1,
    rotate:[90,0],
    transition: {
      type: "spring",
      duration: 1,
      stiffness:30
    }
  }
}

const textAnimate = {
  hidden: {x:100,opacity:0},
  visible: {
    x:0,
    opacity:1,
    transition: {
      type:"spring",
      // bounce:100,
      duration:1,
      stiffness: 30
    }
  }
}


function About() {
  return (
    <div  id="about" className=" flex flex-col items-center">
    <motion.div className="flex md:flex-row flex-col justify-center  items-center md:gap-2 gap-10 mt-20 px-10 overflow-x-hidden"
    layout
      whileInView={"visible"}
      initial={"hidden"}
      transition={{staggerChildren:0.5}}
    >
      <motion.div className="flex justify-center lg:w-1/3 md:w-2/3 sm:w-2/3"
        variants={imageAnimate}
      >
        <img
          src="https://img.freepik.com/premium-vector/time-travel-world-vector-design-travel-explore-world-different-countries_572288-755.jpg?w=2000"
          className=" lg: w-[90%] rounded-md shadow-3xl shadow-slate-400"
        />
      </motion.div>
      <motion.div 
        className="flex flex-col lg:justify-start lg:items-start justify-center items-center lg:w-1/2 md:w-2/3 w-[90%] font-serif gap-4 pl-10 pr-10 pb-10 pt-10 lg:pt-0"
        whileInView={"visible"}
        initial={"hidden"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:1}}

      >
        <motion.div className="flex flex-col gap-2 "
          variants={textAnimate}
        >
          <h1 className="text-3xl text-slate-700 font-bold"
          >Our Commitments</h1>
          <p className="text-lg ">
            Traveling allows you to sleep late and perhaps take a nap in the afternoon. Get some beauty rest!
          </p>
        </motion.div>
      
      <motion.div
        className="grid sm:grid-cols-2 gap-3 md:text-md text-sm lg:justify-start lg:items-start justify-center items-center"
        variants={textAnimate}
      >
        <div className="flex flex-col  gap-2">
          <h1 className="md:text-xl text-lg text-[#679cc1] font-semibold">Own Pace</h1>
          <p>
          Scheduled tours, which often depart on predetermined, non-negotiable dates, contain a circuit of famous sights grouped around a theme for medium to large groups.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="md:text-xl text-lg text-[#679cc1] font-semibold">Complements</h1>
          <p>
          We encourage you to explore one-of-a-kind VIP Experiences that are exclusively available to Luxury Gold guests. VIP Experiences make you happy.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="md:text-xl text-lg text-[#679cc1] font-semibold">Secured</h1>
          <p>
          We will protect any information our clients share with us by adhering to strong security and confidentiality requirements.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="md:text-xl text-lg text-[#679cc1] font-semibold">Guidance</h1>
          <p>
          Private letters with full staff. Excursions with an experienced captain and a passionate local guide who knows very well about this place.
          </p>
        </div>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  );
}

export default About;
