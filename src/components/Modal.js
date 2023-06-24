import React from 'react'
import { BsFillXCircleFill } from "react-icons/bs"; 
import { Link } from 'react-scroll';


function Modal({closeModal}) {
    const handleClose = (e) =>{
        if (e.target.id==="wrapper"){
            closeModal()
        }
    }

  return (
    <div className='md:hidden fixed inset-0 top-1/4 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
        
      <div className='bg-white h-fit sm:w-[14em] w-3/5 p-4  flex flex-row justify-center gap-4 rounded-xl text-xl'>
        <div className='flex flex-col gap-4' >
        <Link to={`home`}  py={true} smooth={true} onClick={closeModal}
                className='font-sans font-xl font-bold cursor-pointer'
            >Home</Link>
            <Link to={`about`} offset={-170} py={true} smooth={true} onClick={closeModal}
                className='font-sans font-xl font-bold cursor-pointer'
            >About</Link>
            <Link to={`packages`} offset={-80} py={true} smooth={true} onClick={closeModal}
                    className='font-sans font-xl font-bold cursor-pointer'
            >Packages</Link>
            <Link to={`contact`} py={true} smooth={true} onClick={closeModal}
                className='font-sans font-xl font-bold cursor-pointer'
            >Contact</Link>
            <button className='rounded-xl w-fit px-2 py-1 bg-cyan-600 text-white'>Book Now</button>
        </div>
        <BsFillXCircleFill onClick={closeModal}/>
      </div>
    </div>
  )
}

export default Modal
