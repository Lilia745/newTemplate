import React from 'react'

function Button(props) {
  return (
    <button className='btn' style={{padding:props.padding, width:props.width, marginTop:"50px"}}>{props.text}</button>
  )
}

export default Button