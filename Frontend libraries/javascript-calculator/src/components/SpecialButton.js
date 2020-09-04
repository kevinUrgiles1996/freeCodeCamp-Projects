import React from 'react'

const SpecialButton = ({ id, value, setDisplayDecimal }) => {
  const setDecimal = (event) => {
    const { value } = event.target;
    setDisplayDecimal(value);
  }
  return (
    <input
      id={id}
      type='button'
      onClick={setDecimal}
      value={value}
      className='pure-u-1-2 pure-button'
    />
  )
}

export default SpecialButton
