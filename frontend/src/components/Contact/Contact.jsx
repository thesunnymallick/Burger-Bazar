import React from 'react'
import {motion} from "framer-motion"
const option={
   initial:{
     y:"-100%",
     opactiy:0
   },
   whileInView:{
     y:0,
     opactiy:1
   }
}

function Contact() {
  return (
   
     <>
     <section className='Contact'>
        <div className="container">
            <motion.div {...option} className="contactPage">
                <motion.h2 initial={{x:"-100%", opacity:0}} whileInView={{x:0 ,opacity:1}}
                 transition={{delay:0.2}}>Contact Us</motion.h2>
                <form className='ContactFrom'>
                   <motion.input {...option} transition={{delay:0.4}} type="text" placeholder='Enter Your Name' />
                   < motion.input  {...option} transition={{delay:0.6}}  type="text"placeholder='Enter Your Email' />
                   <motion.textarea  {...option}  transition={{delay:0.8}} name="" id="" placeholder='Message....' ></motion.textarea>
                   <motion.button  {...option} transition={{delay:0.10}} >Send</motion.button>
                </form>
            </motion.div>
        </div>

     </section>
     </>
  )
}

export default Contact