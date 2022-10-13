import React, { useRef, useState, useEffect } from 'react'
import Button from '../component/Button'
import Form from '../component/Form'
import Input from '../component/Input'
import Joi from 'joi'
import * as userService from '../services/userService'
import { ToastContainer, toast } from 'react-toastify'

function Register(props) {
  const [errors, setErrors] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  var schema = Joi.object().keys({
    passwordschema: Joi.string().required().min(5).label('Password'),
    usernameschema: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .label('UserName'),
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { error } = schema.validate({
        usernameschema: username,
        passwordschema: password,
      })

      const { status, statusText } = await userService.register({
        email: username,
        password: password,
        name: name,
      })
      toast('Saved ' + statusText)

      error ? setErrors(error.details[0].message) : setErrors('')
      setErrors(error.details[0].message)
    } catch (err) {}
  }
  return (
    <div>
      <ToastContainer></ToastContainer>

      <h2>Register</h2>
      <Form onSubmit={handleSubmit} errors={errors}>
        <Input
          name="userName"
          type="email"
          lable="UserName"
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
        <Input
          name="password"
          type="text"
          lable="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          name="Name"
          type="text"
          lable="Name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Button
          className=" btn-primary"
          lable="Register"
          onClick={handleSubmit}
        ></Button>
      </Form>
    </div>
  )
}

export default Register
