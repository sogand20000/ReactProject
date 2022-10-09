import React from 'react'

function Select({ id, value, label, data, onChange }) {
  return (
    <>
      <label>{label}</label>
      <select
        id=""
        className="Select  form-select"
        aria-label="Default select example"
        onChange={onChange}
      >
        {data.map((item) =>
          item._id == value ? (
            <option selected key={item._id} value={item._id}>
              {item.name}
            </option>
          ) : (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          )
        )}
      </select>
    </>
  )
}

export default Select
