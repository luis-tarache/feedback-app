import React from 'react'
import FeedBackItem from './FeedBackItem'

function FeedBackList({feedback}) {
    console.log('FeedBackList', feedback)
    if (!feedback) {
      return  <p>Nothing to show</p>
    }
  return (
    <div className='feedback-list'>
        {feedback.map((item)=>(
            <FeedBackItem key={item.id} item={item}/>
            
            ))}
    </div>
  )
}

export default FeedBackList