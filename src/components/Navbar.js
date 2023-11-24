import React, { useState } from 'react'
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import ham from '../assets/images/icon-menu.svg'
import cross from '../assets/images/icon-menu-close.svg'

export default function Navbar({mobile}) {
  const [clicked, setClicked] = useState(false)
  const [toggle, setToggle] = useState(false);
  let image = ham
  // function mobileMenu(){
  //   setClicked(true)
  // }

  const handleClick = () => {
    setToggle(!toggle);

    if (toggle){
      image = cross
    }
  };
  return (
    
    <div className='navbar'>
      <Logo className='logo'/>
      {!mobile && <div className='buttons'>
        <button className='btn'>Home</button>
        <button className='btn'>New</button>
        <button className='btn'>Popular</button>
        <button className='btn'>Trending</button>
        <button className='btn'>Categories</button>
      </div>}
      {mobile && 
      <div className='menu'>
        <button className='ham' onClick={handleClick}>
          <img src={image} alt='ham'/>
        </button>
        {toggle && <div className='options'>
          <button className='btn'>Home</button>
          <button className='btn'>New</button>
          <button className='btn'>Popular</button>
          <button className='btn'>Trending</button>
          <button className='btn'>Categories</button>
        </div>}
      </div>}
      
    </div>
  )
}
