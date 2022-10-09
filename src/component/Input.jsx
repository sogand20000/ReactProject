import React from 'react'

function Input({ lable, value, name, type, refItem, error, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <input
        type={type}
        ref={refItem}
        id={name}
        value={value}
        className="marginBottom form-control"
        onChange={onChange}
      ></input>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  )
}

export default Input
