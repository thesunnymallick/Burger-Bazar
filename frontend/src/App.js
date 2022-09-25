
import './style/app.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import NotFound from './components/layouts/NotFound';
import Contact from './components/Contact/Contact'
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import PaymentSuccess from './components/cart/PaymentSuccess';
import Profile from './components/Login/Profile';
import Login from './components/Login/Login'
import MyOrders from './components/Orders/MyOrders';
import OrderDetailsPage from './components/Orders/OrderDetailsPage';
import DashBoard from './components/Admin/DashBoard';
import ViewUsers from './components/Admin/ViewUsers';
import ViewsOrder from './components/Admin/ViewsOrder';

import './style/header.scss'
import './style/Home.scss'
import './style/Founder.scss'
import './style/menu.scss'
import './style/Footer.scss';
import './style/contact.scss'
import './style/cart.scss'
import './style/shipping.scss'
import './style/confirmOrder.scss'
import './style/paymentSuccess.scss'
import './style/login.scss'
import './style/profile.scss'
import './style/table.scss'
import './style/orderDetails.scss'
import './style/dashboard.scss'
import './style/about.scss'
import './style/notfound.scss'







function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/conatct' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/shipping' element={<Shipping/>}/>
      <Route path='/confirmorder' element={<ConfirmOrder/>}/>
      <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user' element={<Profile/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
      <Route path='/order/:id' element={<OrderDetailsPage/>}/>
      <Route path='/admin/dashboard' element={<DashBoard/>}/>
      <Route path='/admin/users' element={<ViewUsers/>}/>
      <Route path='/admin/orders' element={<ViewsOrder/>}/>



      <Route path='*' element={<NotFound/>}/>

     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );

  
}

export default App;
