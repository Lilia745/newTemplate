import React from 'react'

function Agency(props) {
  return (
    <div className='agency'>
        <img src={props.img} alt="" />
        <h1>{props.text}</h1>
        <p>{props.text2}</p>
    </div>
  )
}

export default Agency