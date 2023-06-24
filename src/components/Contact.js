import React from "react";
import end from "../end.mp4";
import { BsAirplaneEnginesFill, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoHomeSharp } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { IoCallSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { BsFillCaretRightFill } from 'react-icons/bs';


const gridAnimate = {
  hidden: {
    opacity: 0,
    y:100
  },
  visible: {
    opacity:1,
    y:0,
    transition: {
      duration: 5,
      type: "spring",
      stiffness: 10,
      bounce: 0.7
    }
  }
}

const packages = [
  "Honeymoon",
  "Group",
  "Corperate",
  "Weekly based"
]

const usefull = [
  "Your Account",
  "Become an Afiliate",
  "Travel Packages",
  "Help"
]

function Contact() {
  return (
    <div id="contact">
    <div
      className="mt-20 flex flex-col justify-center w-full h-[90vh] items-center overflow-x-hidden gap-6 "
    >
      <video
        className="absolute h-[90%] w-full -z-10 object-cover"
        autoPlay
        muted
        loop
      >
        <source src={end} type="video/mp4" />
      </video>
      <motion.div 
        className="flex flex-col gap-2 justify-center items-center"
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{once:false, amount:0.5}}
        
      >
        <div 
          className="w-screen h-16 flex flex-row justify-start items-center gap-3 text-xl bg-white z-0 max-[510px]:flex-col max-[510px]:text-sm"
        >
          <div className="flex flex-row max-[510px]:flex-col items-center  animate-marquee-infinite w-screen gap-2">
          <h1>Get connected with us on social networks : </h1>
          <motion.div className="flex flex-row gap-2 first-of-type:cursor-pointer items-center" >
            <motion.div whileHover={{color: "#15AFF0"}}><BsTwitter /></motion.div>
            <motion.div whileHover={{color: "#15AFF0"}}><FaFacebookSquare /></motion.div>
            <motion.div whileHover={{color: "#15AFF0"}}><AiFillInstagram /></motion.div>
          </motion.div>
        </div>
        </div>
        <div 
          className="grid lg:grid-cols-4 p-10 gap-3 justify-center items-center bg-white w-[70vw] rounded-xl max-lg:h-[30em] lg:overflow-y-hidden overflow-y-auto "
          
        >
          <div className="flex flex-col gap-6 font-sans justify-center items-center">
            <motion.h1 
              className="text-xl text-slate-800 font-bold"
              variants={gridAnimate}
            >Holiday Dreams</motion.h1>
            <motion.p 
              className="text-md text-slate-700 font-medium" 
              variants={gridAnimate}
            >
              You can regularly visit our website for Exciting Updates and
              Packages . To avail more , you can register to our website .
            </motion.p>
          </div>
          <div className="flex flex-col gap-4 font-sans justify-center items-center">
            <motion.h1 variants={gridAnimate} className="text-xl text-slate-800 font-bold">Packages</motion.h1>
            <div className="flex flex-col gap-2 text-md font-medium">
              {packages.map((pack)=>(
                <motion.p className="flex flex-row gap-2 items-center cursor-pointer" key={pack}
                variants={gridAnimate}
                whileHover={
                  {
                    x: 20,
                    scale:1.1,
                    color: "#15AFF0"
                  }
                }>
                <BsFillCaretRightFill/>{pack}
              </motion.p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 font-sans justify-center items-center">
            <motion.h1 className="text-xl text-slate-800 font-bold" variants={gridAnimate}>Useful Links</motion.h1>
            <div className="flex flex-col gap-2 text-md font-medium">
              {usefull.map((use)=>(
                <motion.p className="flex flex-row gap-2 items-center" key={use} variants={gridAnimate} whileHover={
                  {
                    x: 20,
                    scale:1.1,
                    color: "#15AFF0"
                  }
                }>
                <BsFillCaretRightFill/>{use}
              </motion.p> 
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 font-sans justify-center items-center">
            <motion.h1 className="text-xl text-slate-800 font-bold"  variants={gridAnimate}>Useful Links</motion.h1>
            <div className="flex flex-col gap-2 text-md font-medium">
              <motion.p className="flex flex-row gap-2 items-center" 
              variants={gridAnimate}
              whileHover={
                {
                  x: 20,
                  scale:1.1,
                  color: "#15AFF0"
                }
              }
              >
                <IoHomeSharp />
                New York, NY 10012, US
              </motion.p>
              <motion.p className="flex flex-row gap-2 items-center" variants={gridAnimate}
              whileHover={
                {
                  x: 20,
                  scale:1.1,
                  color: "#15AFF0"
                }
              }
              >
                <AiTwotoneMail />
                info@example.com
              </motion.p>
              <motion.p className="flex flex-row gap-2 items-center" variants={gridAnimate}
              whileHover={
                {
                  x: 20,
                  scale:1.1,
                  color: "#15AFF0"
                }
              }
              >
                <IoCallSharp />+ 01 234 567 88
              </motion.p>
              <motion.p className="flex flex-row gap-2 items-center" variants={gridAnimate}
              whileHover={
                {
                  x: 20,
                  scale:1.1,
                  color: "#15AFF0"
                }
              }
              >
                <IoCallSharp /> + 01 234 567 89
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
}

export default Contact;
