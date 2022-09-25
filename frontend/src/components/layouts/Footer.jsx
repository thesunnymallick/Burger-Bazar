import React from 'react'
import { Link } from 'react-router-dom';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import burger from '../../assets/burger.png'
function Footer() {
  return (
   
    <>
    <section className='footerSection'>
        <div className="container">
            <div className="footerMain">
                <div className="footerContent">
                 <div className='content'>
                 <span>
                    <p ><img src={burger} alt="" /></p>
                    <p style={{marginRight:"9px"}}>Burger Bazar</p>
                
                 </span>
                 <div style={
                  {
                    padding:"1rem 0rem"
                  }
                 }>
                    <p>Many people crave for a romantic relationship. I’m just craving for
                     a burger that looks like the ones in posters and ads.</p>

                       <div className="socialLink">
                        <a  href="https://www.linkedin.com/in/thesunnymallick/" target="_blank"><LinkedInIcon/></a>
                        <a  sx={{mt:2}}href="https://github.com/thesunnymallick" target="_blank"><GitHubIcon/></a>
                        <a href="https://www.facebook.com/thesunnymallick" target="_blank"><FacebookIcon/></a>
                        <a href="https://www.instagram.com/themallicksunny/" target="_blank"><InstagramIcon/></a>
                     </div>

                 </div>
                 </div>
                 <div className='content'>
                   <span><h6>Useful Links</h6></span>
                 <div style={{marginTop:"1rem"}}>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/cart">Cart</Link>

                 </div>
                 </div>
                 <div className='content'>
                   <span><h6>Contact Us</h6></span>
                 <div >
                  <p  style={{padding:"1rem 0rem", marginTop:"1rem"}}>Address: Vill:Chandai  PO: Perabera PS:Borjora Dist:Bankura </p>
                  <p style={{paddingBottom:"0.40rem"}}>91+ 6297179586</p>
                  <p style={{paddingBottom:"0.40rem"}}>alfesunnymallick800@gmail.com</p>

                 </div>
                 </div>

                 <div className='content'>
                   <span style={{paddingBottom:"1.40rem"}}><h6>Email Me!</h6></span>
                 <div >
                   <p style={{padding:"1rem 0rem", marginTop:"1rem"}}>If you have any Query You can mail us.</p>
                    
                    <div className='emailUs'>
                    <a href="mailto:alfesunnymallick800@gmail.com">
                       Email us
                      <EmailIcon/>
                    
                    </a>
                   
                   
                    </div>
                  
                 </div>
                 </div>
                


                </div>
            </div>
           
        </div>
    </section>

    <footer className='footer'>
          <div className="container " >
                <div> Terms of use | privacy Environmental Policy</div>
                 <div>copyright &copy; 2022 Burger Bazar founder By Sunny mallick || All rights reserved</div>
                 </div>
    </footer>
    </>
  )
}

export default Footer