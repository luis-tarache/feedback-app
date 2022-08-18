import React from 'react'
import Card from './utils/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

function FeedBackItem({item, handleDelete}) {
    console.log('FeedBackItem', item)

  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button className='close' onClick={()=>handleDelete(item.id)}>
            <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedBackItem