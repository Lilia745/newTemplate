import React from 'react'
import Form from '../Form/Form'

function About() {
  return (
    <div className='about'>
        <img src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-7.png" className='bacground'/>
        <div className='aboutText'>
            <h4>About Us</h4>
            <h1>We do design, code &</h1>
            <h1>develop.</h1>
            <div className='about-text'>
                <p>Nulla et velit gravida, facilisis quam a, molestie ante. Mauris placerat</p>
                <p>suscipit dui, eget maximus tellus blandit a. Praesent non tellus sed</p>
                <p>ligula commodo blandit in et mauris. Quisque efficitur ipsum ut dolor</p>
                <p>molestie pellentesque.</p>
            </div>
            <div className='about-text'>
                <p>Nulla pharetra hendrerit mi quis dapibus. Quisque luctus, tortor a</p>
                <p>venenatis fermentum, est lacus feugiat nisl, id pharetra odio enim</p>
                <p>eget libero.</p>
            </div>
        </div>
        <Form/>
    </div>
  )
}

export default About