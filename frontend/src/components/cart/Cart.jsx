import React from 'react'
import burger1 from '../../assets/product-1.png'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'


function Cart() {

    const inCrement=(item)=>{}
    const deCrement=(item)=>{}

  return (
    
     <section className='cart'>
         <div className="container">
            <div className="cart-section">
            <CartItem
            value={3}
            title={"Lamb Burger with Radish Slaw"}
            img={burger1}
            inCrement={()=>inCrement(1)}
            deCrement={()=>deCrement(1)}
            />
            <CartItem
            value={3}
            title={"Lamb Burger with Radish Slaw"}
            img={burger1}
            inCrement={()=>inCrement(1)}
            deCrement={()=>deCrement(1)}
            />

            <article>
                <div>
                    <h4>Sub Total</h4>
                    <p>₹{2000}</p>
                </div>

                <div>
                    <h4>Tax</h4>
                    <p>₹{0.34}</p>
                </div>

                <div>
                    <h4>Shipping Charges</h4>
                    <p>₹{50}</p>
                </div>

                <div>
                    <h4>Total</h4>
                    <p>₹{2000+0.34+50}</p>
                </div>
                <Link to='/shipping'>checkout</Link>
            </article>
            </div>
        </div>
        
     </section>


  )
}

export default Cart