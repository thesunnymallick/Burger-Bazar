import React from 'react'
import {Country,State, City} from 'country-state-city'
function Shipping() {
  return (
      <>
      <section className='shipping-section'>
        <div className="container">
          <div className="shipping">
            <h1>Shipping Details</h1>
            <form>
              <div>
                <label>H.No</label>
                 <input type="text" placeholder='Enter your House Number'/>
              </div>
              <div>
                <label>City</label>
                 <input type="text" placeholder='Enter your City '/>
              </div>

               <div>
                 <label>Country</label>
                   <select>
                    <option value="">Country</option>
                     {
                      Country && Country.getAllCountries().map(i=>(
                        <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                      ))
                     }
                   </select>
               </div>
               <div>
                 <label>State</label>
                   <select name="" id="">
                    <option value="">State</option>
                    {
                      State && State.getStatesOfCountry("IN").map(i=>(
                        <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                      ))
                    }
                   </select>
               </div>

               <div>
                <label>PinCode</label>
                 <input type="number" placeholder='Enter your Pin Code '/>
              </div>

              <div>
                <label>Phone No</label>
                 <input type="number" placeholder='Enter your Pin Code '/>
              </div>
                
                <div className='btn'>
                <button type='submit'>Confirm Order</button>
                </div>
            </form>
          </div>
        </div>
      </section>
      </>
  )
}

export default Shipping