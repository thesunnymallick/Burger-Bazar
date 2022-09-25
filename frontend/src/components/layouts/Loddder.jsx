import React from 'react'
 import burger from '../../assets/burger.png'
 import {motion} from 'framer-motion'
function Loddder() {

  const options={
    initial:{
      opacity:0,

    },
    animate:{
      opacity:1,
    },
    transition:{
      ease:"linear",
      repeat:"Infinity",
      repeatType:"reverse"
    }
  }
  return (
      <div className='lodder'>
        <img src={burger} alt="" />
        <motion.p {...options}>Loadding....</ motion.p>
      </div>
  )
}

export default Loddder