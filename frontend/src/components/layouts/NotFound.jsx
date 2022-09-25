import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import {Link} from 'react-router-dom';
function NotFound() {
  return (
      <section className='not-found-section'>
         <div className="container">
            <div className='notfound'>
               <h1>404 <ErrorIcon/></h1>
                 <p>Opps! page Not Found</p>
                 <Link to='/'> <button>Go back home</button></Link>
            </div>
         </div>

      </section>
  )
}

export default NotFound