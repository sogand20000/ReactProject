import React from 'react'

function Button({ lable, onClick, className = 'btn-primary' }) {
  return (
    <button type="submit" onClick={onClick} className={`btn ${className}`}>
      {lable}
    </button>
  )
}

export default Button
