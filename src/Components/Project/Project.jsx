import React from 'react'
import Agency from '../Agency/Agency'

function Project() {
  return (
    <div className='project'>
        <div className='projectText'>
            <h4>Our Project</h4>
            <h1>Some of our</h1>
            <h1>finest work.</h1>
        </div>
        <div className='agencyDiv'>
            <Agency img="https://new.axilthemes.com/demo/react/abstrak/images/project/project-1.png" text="Creative Agency" text2="Branding,Website,App"/>
            <Agency img="https://new.axilthemes.com/demo/react/abstrak/images/project/project-2.png" text="Digital Marketing" text2="Logo,Website,Mobile"/>
            <Agency img="https://new.axilthemes.com/demo/react/abstrak/images/project/project-3.png" text="Digital Agency" text2="Website,UI/UX"/>
            <Agency img="https://new.axilthemes.com/demo/react/abstrak/images/project/project-4.png" text="Plan Management" text2="Branding,Website,Mobile"/>
            <Agency img="https://new.axilthemes.com/demo/react/abstrak/images/project/project-5.png" text="Social Engagement" text2="Design,Development"/>
            <Agency img="https://new.axilthemes.com/demo/react/abstrak/images/project/project-6.png" text="Web Application" text2="Logo,Webapp,Mobile"/>
        </div>
    </div>
  )
}

export default Project