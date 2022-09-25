import React from 'react'

function CartItem(props) {
 const {value, img, title, inCrement, deCrement}=props
  return (
    <div className='cartItem'>
       <div>
        <h4>{title}</h4>
        <img src={img} alt="" />
       </div>

       <div>
          <button onClick={()=> inCrement}>-</button>
            <p>{value}</p>
          <button onClick={()=>deCrement} >+</button>
       </div>
    </div>
  )
}

export default CartItem