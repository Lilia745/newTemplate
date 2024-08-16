import React from 'react'
import Peopel from '../Peopel'

function Testimonial() {
  return (
    <div className='TestimonialDiv'>
        <div className='Testimonial'>
            <h3>Testimonial</h3>
            <h1>From getting started</h1>
            <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate</p>
            <p>augue sed eu leo eget risus imperdiet.</p>
        </div>
        <div className='PeopelDiv'>
            <Peopel img="https://new.axilthemes.com/demo/react/abstrak/images/icon/yelp-2.png" peopelImg="https://new.axilthemes.com/demo/react/abstrak/images/testimonial/testimonial-1.png" name="Darrell Steward"/>
            <Peopel img="https://new.axilthemes.com/demo/react/abstrak/images/icon/google-2.png" peopelImg="https://new.axilthemes.com/demo/react/abstrak/images/testimonial/testimonial-2.png" name="Savannah Nguyen"/>
            <Peopel img="https://new.axilthemes.com/demo/react/abstrak/images/icon/fb-2.png" peopelImg="https://new.axilthemes.com/demo/react/abstrak/images/testimonial/testimonial-3.png" name="Floyd Miles"/>
        </div>
    </div>
  )
}

export default Testimonial