import React from 'react'

function Parcent(props) {
  return (
    <div className='parcent'>
        <img src={props.img} alt="" />
        <h1>{props.text}</h1>
        <h2>{props.text2}</h2>
    </div>
  )
}

export default Parcent