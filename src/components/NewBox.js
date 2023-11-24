import React from 'react'
import NewArticle from './NewArticle'

export default function NewBox() {
  return (
    <div className='newbox'>
        <h2>New</h2>
        <NewArticle 
            title={'Hydrogen VS Electric Cars'}
            para={'Will hydrogen-fueled cars ever catch up to EVs?'}
        />
        <hr/>
        <NewArticle
            title={'The Downsides of AI Artistry'}
            para={'What are the possible adverse effects of on-demand AI image generation?'}
        />
        <hr/>
        <NewArticle
            title={'Is VC Funding Drying Up?'}
            para={'Private funding by VC firms is down 50% YOY. We take a look at what that means.'}
        />
    </div>
  )
}
