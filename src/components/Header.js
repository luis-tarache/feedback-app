import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
    const headerStyles= {background: bgColor, color: textColor}
  return (
    <div className='container' style={headerStyles}>
        <h2>{text}</h2>
    </div>
  )
}

Header.defaultProps = {
    text: 'TESTING FEEDBACK-APP',
    bgColor: 'black',
    textColor: 'pink'
}

Header.propTypes= {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header