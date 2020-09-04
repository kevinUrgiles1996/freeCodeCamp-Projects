import React from 'react'

const Display = ({ fullValue, currentElement }) => {
  return (
    <div id='display-container'>
      <h2 className='full-display-value'>{fullValue}</h2>
      <h2 id='display' className='current-value'>{currentElement ? currentElement : '0'}</h2>
    </div>
  )
}

export default Display
