import React from 'react';

const Button = (props) => {
  return (
    <button
      onClick={() => props.callbackFunction()}
      className={`${props.important ? 'important' : ''}`}
    >
      {props.label}
    </button>
  )
}

export default Button;