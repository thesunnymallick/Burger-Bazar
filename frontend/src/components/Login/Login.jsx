import React from 'react'
import googleIcon from '../../assets/google-logo.png'
function Login() {
  return (
     <section className='Login-section'>
      <div className="login">
        <button>
          login with Google <img src={googleIcon} alt="" />
        </button>
      </div>

     </section>
  )
}

export default Login