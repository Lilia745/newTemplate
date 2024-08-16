import React from 'react'

function Peopel(props) {
  return (
    <div className='Peopel'>
        <img src={props.img} alt="" />
        <h2>
            “ Donec metus lorem,
             vulputate at sapien sit amet, auctor iaculis lorem.
             In vel hendrerit nisi. Vestibulum eget risus velit. ”
        </h2>
        <div className='name'>
            <img src={props.peopelImg} alt="" />
            <h4>{props.name}</h4>
        </div>
    </div>
  )
}

export default Peopel