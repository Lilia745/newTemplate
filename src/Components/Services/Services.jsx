import React from 'react'

function Services(props) {
  return (
    <div className='Services'>
        <div>
            <img src={props.img} alt="" />
        </div>
        <div className='servicesText'>
            <h2>{props.text}</h2>
            <p>Simply drag and drop photos</p>
            <p>and videos into your</p>
            <p>workspace to automatically</p>
            <p>add them to your Collab Cloud</p>
            <p>library.</p>
            <h3>Find out more</h3>
        </div>
    </div>
  )
}

export default Services