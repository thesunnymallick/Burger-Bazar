import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import founder from "../../assets/Founder.jpg"
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

function About() {
  return (
      <section className='About-section'>
       <div className='container'>
        <div className="about">
            <h1>About Us</h1>
            <div className="about-content">
            <div className="left">
                <div>

                <img src={founder} alt="" />
              <h4> Founder Of Burger Bazar <br /> Sunny Mallick</h4>
                <div>
                <div className="social">
                        <a  href="https://www.linkedin.com/in/thesunnymallick/" target="_blank"><LinkedInIcon/></a>
                        <a href="https://www.facebook.com/thesunnymallick" target="_blank"><FacebookIcon/></a>
                        <a href="https://www.instagram.com/themallicksunny/" target="_blank"><InstagramIcon/></a>
              </div>
                </div>


                </div>
            </div>
            <div className="right">
              <p> Every day, more than 11 million guests visit Burger King restaurants around the world. 
                And they do so because our restaurants are known for serving high-quality, great-tasting, 
                and affordable food. Founded in 1954, Burger King is the second largest fast food hamburger
                chain in the world. The original Home of the Whopper, our commitment to premium ingredients,
                signature recipes, and family-friendly
                dining experiences is what has defined our brand for more than 50 successful years.</p>
                 <br />
                <p> Explore the  various Type food and and burger. Click  below to see the menu</p>
                  <div>
                   <Link to='/'><button><SearchIcon/></button></Link>
                  </div>
            </div>

            </div>
          
        </div>
       </div>

      </section>
  )
}

export default About