import React from 'react'

const Display = ({ displayValue, currentElement }) => {
  return (
    <div id='display-container'>
      <h2 className='full-display-value'>{displayValue}</h2>
      <h2 id='display' className='current-value'>{currentElement ? currentElement : '0'}</h2>
    </div>
  )
}

export default Display
