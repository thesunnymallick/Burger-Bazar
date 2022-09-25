import React from 'react'
import {motion} from "framer-motion";
function Item({itemNo, burgerItem, title, price, handeler,delay=0}) {
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
     <motion.div {...option} transition={{delay:delay}} className='BurgertItem'>

    <h4 >Burger {itemNo}</h4>
    <div className="Item">
      <img src={burgerItem} alt={itemNo} />
      <h6>{title}</h6>
      <h5>₹{price}</h5>
      <button onClick={()=>handeler(itemNo)}>Buy Now</button>


    </div>

     </motion.div>
     </>
  )
}

export default Item;
