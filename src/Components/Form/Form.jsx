import React from 'react'
import Button from '../Button/Button'

function Form() {
  return (
    <form className='form'>
        <div className='formText'>
            <h1>Get a free Keystroke</h1>
            <h1>quote now</h1>
            <h5>Name</h5>
            <input type="text" placeholder='John Smith' required/>
            <h5>Email</h5>
            <input type="email" placeholder='example@mail.com' required/>
            <h5>Phone</h5>
            <input type="number" placeholder='+123456789' required/>
            <Button text="Get Free Quote" padding="20px" width="100%"/>
        </div>
    </form>
  )
}

export default Form