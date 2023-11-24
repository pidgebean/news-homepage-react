import React from 'react'

export default function NewArticle({title, para}) {
  return (
    <div className='new-article'>
        <h3>{title}</h3>
        <p>{para}</p>
    </div>
  )
}
