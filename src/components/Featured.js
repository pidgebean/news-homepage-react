import React from 'react'
// import { ReactComponent as Image } from '../assets/images/image-gaming-growth.jpg'


export default function Featured({image, title, desc}) {
  return (
    <div className='featured'>
      <img src={image} alt='growth' className='feat-img'></img>
      <div className='acticle-preview'>
        <h2>{title}</h2>
        <div className='preview'>
            <p>{desc}</p>
            <button>Read More</button>
        </div>
      </div>
      
      
    </div>
  )
}

