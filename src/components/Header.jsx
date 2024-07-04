import React from 'react';
import {Link} from "react-router-dom";
import {useEffect,useState} from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Header() {
  const[showMediaIcons,setShowMediaIcons]=useState(false);
  return (
    <div className='header'>
    <div className='hammburger-menu'>
    <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}>
      <GiHamburgerMenu />
    </a>
    </div>
    <div className={showMediaIcons?"links mobile-menu-link":"links"}>
    <ul >
      <li className='items'><Link className='link' to={"/"}>Home</Link></li>
      <li className='items'><Link className='link' to={"/about"}>About</Link></li>
      <li className='items'><Link className='link' to={"/experiences"}>Experiences</Link></li>
      <li className='items'><Link className='link' to={"/project"}>Project</Link></li>
      <li className='items'><Link className='link' to={"/contact"}>Contact</Link></li>
    </ul>
    
    </div>
  
    </div>
  )
}
