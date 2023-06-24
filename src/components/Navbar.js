import React from 'react'
import { useState } from 'react';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiOutlineMenu } from 'react-icons/ai';
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-scroll';
import Modal from './Modal';




function Navbar() {
    const [showMenu,setShowMenu]=useState(false);
    const handleClose = () => {
        setShowMenu(false)
    }
  return (
    <div className='fixed h-16 w-full p-8 px-12 flex flex-row md:justify-around justify-between z-20 bg-white'>
        <div className='flex flex-row gap-2 items-center text-2xl font-bold'>
            <SiYourtraveldottv color='teal'/>
            <h1>GlobeGo</h1>
        </div>
        <div className='md:hidden flex text-2xl items-center font-bold'>
            <AiOutlineMenu onClick={()=>setShowMenu(true)}/>
        </div>
        <div className='hidden md:flex flex-row gap-4 justify-center items-center '>
            {/* {category.map((cat)=>(
                <Link to={`${cat.toLowerCase()}`} key={cat} offset={-170} py={true} smooth={true}
                    className='font-sans font-xl font-bold cursor-pointer'
                >{cat}</Link>
            ))} */}
            <Link to={`home`} smooth={true}
                className='active:border-b-4 border-cyan-800 font-sans font-xl font-bold cursor-pointer'
            >Home</Link>
            <Link to={`about`} offset={-170}  smooth={true}
                className='active:border-b-4 border-cyan-800 font-sans font-xl font-bold cursor-pointer'
            >About</Link>
            <Link to={`packages`} offset={-80}  smooth={true}
                    className='active:border-b-4 border-cyan-800 font-sans font-xl font-bold cursor-pointer'
            >Packages</Link>
            <Link to={`contact`} smooth={true}
                className='active:border-b-4 border-cyan-800 font-sans font-xl font-bold cursor-pointer'
            >Contact</Link>
            <button className='rounded-xl w-fit px-2 py-1 bg-cyan-600 text-white'>Book Now</button>
        </div>
        {showMenu && <Modal closeModal={handleClose} />}
    </div>
  )
}

export default Navbar
