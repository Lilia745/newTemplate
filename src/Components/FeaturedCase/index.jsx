import React from 'react'
import Parcent from '../Parcent/Parcent'

function FeaturedCase() {
  return (
    <div className='featuredCaseDiv'>
        <div className='featuredCase'>
            <h3>Featured Case Study</h3>
            <h1>Design startup movement</h1>
            <p>In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in</p>
            <p>egestas ipsum. Mauris in mi ac tellus.</p>
        </div>
        <div className='parcentDiv'>
            <Parcent img="https://new.axilthemes.com/demo/react/abstrak/images/icon/icon-7.png" text="15+" text2="Years of operation"/>
            <Parcent img="https://new.axilthemes.com/demo/react/abstrak/images/icon/icon-8.png" text="360+" text2="Projects deliverd"/>
            <Parcent img="https://new.axilthemes.com/demo/react/abstrak/images/icon/icon-9.png" text="600+" text2="Specialist"/>
            <Parcent img="https://new.axilthemes.com/demo/react/abstrak/images/icon/apple.png" text="64+" text2="Years of operation"/>
        </div>
    </div>
  )
}

export default FeaturedCase