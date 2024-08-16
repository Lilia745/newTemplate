import React from 'react'
import Services from '../Services/Services'

function Section2() {
  return (
    <div className='services'>
        <img src="https://new.axilthemes.com/demo/react/abstrak/images/others/line-9.png"/>
        <div className='text'>
            <h3>What We Can Do For You</h3>
            <h1>Services we can help you</h1>
            <h1>with</h1>
            <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum</p>
            <p>eget vulputate augue sed eu imperdiet.</p>
        </div>
        <div className='servicesDiv'>
            <Services img="https://new.axilthemes.com/demo/react/abstrak/images/icon/icon-1.png" text="Design"/>
        </div>
    </div>
  )
}

export default Section2