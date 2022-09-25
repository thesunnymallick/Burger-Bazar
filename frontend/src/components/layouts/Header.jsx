import {React } from 'react'
import { Link } from 'react-router-dom';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import burger from '../../assets/burger.png'
import {motion} from "framer-motion"


function Header({isAuth=true}) {
  return (
     <>
      <nav className='navbar'>
      <motion.div initial={{x:"-100%"}} whileInView={{x:0}}>
       <img src={burger} alt="" />
       <h1>Burger Bazar</h1>
      </motion.div>
      <div>
      <Link to='/' >Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/conatct'>Contact</Link>
      <Link to ='/cart'><ShoppingCartOutlinedIcon/></Link>
      <Link to ={isAuth? '/user' :'/login'}>
        {
          isAuth? <AccountCircleIcon/> : <LoginIcon/>
        }
      </Link>
      </div>
      </nav>
     </>
  )
}

export default Header