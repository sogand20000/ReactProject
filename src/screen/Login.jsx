import React, { useRef, useState, useEffect } from 'react'
import Input from '../component/Input'
import Form from '../component/Form'
import Joi from 'joi'
import Button from '../component/Button'
function Login(props) {
  const [errors, setErrors] = useState('')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  var schema = Joi.object().keys({
    username1: Joi.string().required().label('UserName'),
    password1: Joi.string().required().label('Password'),
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const { error } = schema.validate({
        username1: username,
        password1: password,
      })
      error ? setErrors(error.details[0].message) : setErrors('')
      setErrors(error.details[0].message)
    } catch (err) {}
  }
  return (
    <Form onSubmit={handleSubmit} errors={errors}>
      <Input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      ></Input>
      <Input
        type="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      ></Input>
      <Button className=" btn-primary" lable="Login"></Button>
    </Form>
  )
}

export default Login
