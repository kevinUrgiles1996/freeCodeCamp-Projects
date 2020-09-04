import React from 'react'

const SpecialButton = ({ id, value, buttonType, handleButton }) => {

  const handleClick = () => {
    handleButton();
  }

  return (
    <input
      id={id}
      onClick={handleClick}
      value={value}
      type='button'
      className={'pure-u-1-4 pure-button large-button ' + buttonType}
    />
  )
}

export default SpecialButton
