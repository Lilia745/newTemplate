import React from 'react'
import Button from '../../Button/Button'

function Section() {
  return (
    <div>
        <img src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-39.png" alt="" />
        <div className='root'>
        <div className='box'>
            <h1>Build beautiful</h1>
            <h1>website & mobile</h1>
            <h1>apps.</h1>
            <p>Create live segments and target the right people for</p>
            <p>messages based on their behaviors.</p>
            <Button text="Get Started"/>
        </div>
        <div className='box2'>
            <img src="https://new.axilthemes.com/demo/react/abstrak/images/others/bubble-38.png" alt=""  className='round'/>
            <img src="https://new.axilthemes.com/demo/react/abstrak/images/banner/chat-group.png" alt=""  className='img'/>
            <img src="https://new.axilthemes.com/demo/react/abstrak/images/banner/window.png" className='calendar' />
            <img src="https://new.axilthemes.com/demo/react/abstrak/images/banner/laptop-poses.png" className='people'/>
        </div>
        </div>
    </div>
  )
}

export default Section