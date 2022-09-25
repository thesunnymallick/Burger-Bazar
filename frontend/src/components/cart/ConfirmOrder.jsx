import React from 'react'

function ConfirmOrder() {
  return (
      <section className='confirmOrder-section'>
        <div className="container">
          <div className="confirmOrder">
            <h1>Confirm Order</h1>
            <form action="">
               
               <div className='payment'>
                <label > Cash On Delivery</label>
                <input type="radio" name="payment" id="" />
               </div>
               <div className='payment'>
                <label  >online</label>
                <input type="radio" name="payment" id="" />
               </div>
             
               <div className='btn' >
               <button >place Order</button>
               </div>
       
            </form>

          </div>
        </div>
      </section>
  )
}

export default ConfirmOrder