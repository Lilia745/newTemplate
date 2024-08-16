import React from 'react'

function Button(props) {
  return (
    <button className='btn' style={{padding:props.padding, width:props.width, marginTop:"50px", backgroundColor:props.bacgroundColor,color:props.color,border:props.border}}>{props.text}</button>
  )
}

export default Button