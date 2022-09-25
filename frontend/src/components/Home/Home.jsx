import React from 'react'
import Burger from '../../assets/Burger-bg.png'

import {motion} from "framer-motion";
import Founder from './Founder';
import Menu from './MenuSection';



function Home() {
 const option={
  initial:{
    x:"-100%",
    opactiy:0
  },
  whileInView:{
    x:0,
    opactiy:1
  }

  
 }

  return (
   <>
    <section className='HomeSection'>
      <div className='container'>
        <div className='Home'>
      <div className="left">
        <motion.h6 {...option}>Are You Hungry?</motion.h6>
        <motion.h3  {...option} transition={{delay:0.2}}>Don't Wait!</motion.h3>
        <motion.button 
        initial={{y:"-100%"}}
        whileInView={{y:0}}
         transition={{delay:0.2}}><a href="#Menu">Buy Now</a></motion.button>
      </div>
      <div className="right">
      <motion.img initial={{y:"-100%", opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:0.3}}src={Burger} alt="burger" />
      </div>
      </div>
      </div>
    </section>
    <Founder/>
    <Menu/>

   </>
  )
}

export default Home