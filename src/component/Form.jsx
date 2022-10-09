import React from 'react'

function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      {props.errors && (
        <div className="alert alert-danger" role="alert">
          {props.errors}
        </div>
      )}

      {props.children}
    </form>
  )
}

export default Form
