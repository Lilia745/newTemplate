import React from 'react'
import Button from '../Button/Button'

function Teams(props) {
  return (
    <div className='div'>
        <div>
            <h1>{props.text}</h1>
            <p>{props.text2}</p>
        </div>
        <h1>{props.number}</h1>
        <Button text="Get Started Today" width="100%" padding="20px" bacgroundColor="white" color="black" border="1px solid black"/>
    </div>
  )
}

export default Teams