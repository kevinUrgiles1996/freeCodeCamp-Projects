import React from 'react'

const NumberButton = ({ value, id, largeButton, handleButton }) => {
  const setNumber = (event) => {
    const { value } = event.target;
    handleButton(value);
  }
  return (
    <input
      id={id}
      type='button'
      onClick={setNumber}
      value={value}
      className={(largeButton ? 'large-button ' : '') + 'pure-u-1-4 pure-button'}
    />
  )
}

export default NumberButton
