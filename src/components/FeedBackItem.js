import React from 'react'

function FeedBackItem({item}) {
    console.log('FeedBackItem', item)

  return (
    <div className='card'>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
    </div>
  )
}

export default FeedBackItem