import { useState } from "react";


function Header() {
    let list = [
        {title:"Digital Agency", id:Math.random()},
        {title:"Services ", id:Math.random()},
        {title:"Portfolio", id:Math.random()},
        {title:"Pages", id:Math.random()},
        {title:"Blog ", id:Math.random()},
        {title:"Contact ", id:Math.random()},
    ]
    const [isDark,setIsDark] = useState(true)
  return (
    <header style={{background: isDark ? "white" : "black", transition:"0.5s"}}>
        <div>
            <a href="/">
                <img src="https://new.axilthemes.com/demo/react/abstrak/images/logo.svg" alt="" />
            </a>
        </div>
        <nav>
            <ul>
                {
                    list.map((item,id)=>{
                        return(
                            <li key={id}>
                                <div className='menuList'>
                                    <a href="/" style={{color: isDark ? "black" : "white"}}>{item.title}</a>
                                    <ion-icon name="chevron-down-outline" style={{color: isDark ? "black" : "white"}}></ion-icon>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
        <div className="ionIcon" onClick={()=>{
          setIsDark(!isDark)
        }}>
         {isDark?<ion-icon name="sunny-outline" className="sun"></ion-icon>:<ion-icon name="moon-outline"style={{color:isDark ? "black" : "white"}}></ion-icon>}
        </div>
    </header>
  )
}

export default Header