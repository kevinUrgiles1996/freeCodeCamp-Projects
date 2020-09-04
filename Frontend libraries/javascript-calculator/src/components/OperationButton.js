import React from 'react'

const OperationButton = ({ id, value, handleButton }) => {
  const setOperator = (event) => {
    const { value } = event.target;
    handleButton(value);
  }
  return (
    <input
      id={id}
      type='button'
      onClick={setOperator}
      value={value}
      className='pure-u-1-4 calc-button pure-button button-warning'
    />
  )
}

export default OperationButton
