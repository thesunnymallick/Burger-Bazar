import React from 'react'
import { Link } from 'react-router-dom';
function PaymentSuccess() {
  return (
     <section className='payment-success-section'>
        <div className="container">
            <div className="paymentsucess">
              <h1>Order Confiram</h1>
                <div>
              
                    <p>Order Place succssfully! you can check order status below</p>
                    <Link to="/myorders">Check Status</Link>
                </div>
            </div>
        </div>
     </section>
  )
}

export default PaymentSuccess;