import React from 'react'
import founder from "../../assets/Founder.jpg"
import {motion} from "framer-motion"
function Founder() {

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
      <section class="founder-section">
       <motion.div {...option} class="founder">
        <img src={founder} alt="" />
        <h2>Sunny Mallick</h2>
        <p> Hy Everyone, I am Sunny Mallick The Founder of Burger Bazar <br/>
          Hungry? Try Our Burgers Made with Half Pound Patties.

        </p>
       </motion.div>
      </section>
     </>
  )
}

export default Founder