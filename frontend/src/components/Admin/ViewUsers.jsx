import React from 'react'
import founder from "../../assets/Founder.jpg"
const arr=[1, 2,3, 4];
function ViewUsers() {
  return (
    <section className='TableClass'>
    <div className="container">
        <div className="table">
           <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Phote</th>
                    <th>Role</th>
                    <th>Since</th>
                </tr>
            </thead>

            <tbody>
              {
                arr.map(i=>(
                    <tr key={i}>
                    <td>75886jjkjgkjkg</td>
                     <td>Sunny</td>
                     <td><img src={founder} alt="" /></td>
                     <td>user</td>
                     <td>5/8/2022</td>
                     
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

export default ViewUsers