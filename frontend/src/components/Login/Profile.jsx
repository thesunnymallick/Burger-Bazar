import React from 'react'
import founder from "../../assets/Founder.jpg"
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
function Profile() {
    return (

        <section className='profile-section'>
            <div className="container">
                <div className="profile">
                       <div className='profile-div'>
                        <img src={founder} alt="" width={250} height={250} />
                        <h4>Sunny Mallick</h4>
                        </div>

                        <div className="btn-class">
                            <div>
                            <div><Link className='btn-primary' to='/admin/dashboard'><DashboardIcon/> Dashbord</Link></div> 
                            <div><Link className='btn-secondary' to='/myorders'><ShoppingBagIcon/> My Orders</Link></div> 
                      
                            </div>
                      
                        </div>
                </div>

            </div>
        </section>
    )
}

export default Profile