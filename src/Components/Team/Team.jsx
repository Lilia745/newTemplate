import React from 'react'
import Teams from '../Teams'

function Team() {
  return (
    <div className='TeamDiv'>
        <Teams text="Professional" text2="A beautiful, simple website" number="$199.99"/>
        <Teams text="Standard" text2="Small Team" number="$219.99"/>
        <Teams text="Ultimate" text2="Large Team" number="$559.99"/>
    </div>
  )
}

export default Team