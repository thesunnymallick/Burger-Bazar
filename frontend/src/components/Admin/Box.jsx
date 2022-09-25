import React from 'react'

function Box({title, value}) {
  return (
    <>
    <div>
        <h3>
             {title==="Income" && "₹" }
            {value}</h3>
        <p>{title}</p>

    </div>
    </>
  )
}

export default Box