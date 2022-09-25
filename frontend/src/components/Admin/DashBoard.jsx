import React from 'react'
import { Link } from 'react-router-dom'
import Box from './Box'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from 'chart.js'
import Lodder from '../layouts/Loddder'
ChartJS.register(Tooltip, ArcElement, Legend)


function DashBoard() {
    const loadding=true;
    const data = {
      labels:["Preparing", "Shipped",'Deliverd'],
        datasets: [
            {
                label: "#No of Orders",
                data: [2, 3, 4],
                backgroundColor: [
                    "rgba(159, 63, 176, 0.1)",
                    "rgba(78, 63, 176, 0.2)",
                    "rgba(156, 0, 60, 0.3)"],
                BorderColor: [
                    "rgb(159, 63, 176)",
                    "rgb(78, 63, 176)",
                    "rgb(156, 0, 60)"],

                BorderWidth: 1,
            }
        ]
    }
    return (
        <section className='dashBorad-section'>
            <div className="container">
              {
                loadding===false?  <div className="dashborad">
                <article>
                    <Box
                        title='Users'
                        value={231}
                    />
                    <Box
                        title='Orders'
                        value={23}
                    />
                    <Box
                        title='Income'
                        value={2318888}
                    />
                </article>

                <section >
                    <div>
                        <Link className='btn-primary' to='/admin/orders'>Views Orders</Link>
                        <Link className='btn-secondary' to='/admin/users'>View Users</Link>
                
                    </div>

                    <div>
                    <Doughnut data={data} />
                    </div>
                </section>

                
            </div>: <Lodder/>
              }
            </div>
            
        </section>
    )
}

export default DashBoard