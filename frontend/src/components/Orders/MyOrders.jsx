import React from 'react'
import {Link} from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
function MyOrders() {
  
    const arr=[1, 2, 3, 4]

  return (
      <section className='TableClass'>
        <div className="container">
            <div className="table">
               <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Item Qty</th>
                        <th>Ammount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                  {
                    arr.map(i=>(
                        <tr key={i}>
                        <td>75886jjkjgkjkg</td>
                         <td>Processing</td>
                         <td>23</td>
                         <td>₹1000</td>
                         <td>COD</td>
                          <td><Link to={`/order/${676757847584768}`}><VisibilityIcon/></Link></td>
                      </tr>
                    ))
                  }
                </tbody>
               </table>
            </div>
        </div>
      </section>
  )
}

export default MyOrders