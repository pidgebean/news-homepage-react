import React from 'react'

export default function Article({number, image, title, para}) {
  return (
    <div className='article'>
        <div className='image'>
            <img src={image} alt='computer'></img>  
        </div>
        <div className='description'>
            <h2>{number}</h2>
            <h3>{title}</h3>
            <p>{para}</p>
        </div>
    </div>
  )
}
