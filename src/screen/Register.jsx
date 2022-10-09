import React, { useRef, useState, useEffect } from 'react'
import Button from '../component/Button'
import Form from '../component/Form'
import Input from '../component/Input'
import Joi from 'joi'

function Register(props) {
  const [errors, setErrors] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  var schema = Joi.object().keys({
    passwordschema: Joi.string().required().min(5).label('Password'),
    usernameschema: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .label('UserName'),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const { error } = schema.validate({
        usernameschema: username,
        passwordschema: password,
      })

      error ? setErrors(error.details[0].message) : setErrors('')
      setErrors(error.details[0].message)
    } catch (err) {}
  }
  return (
    <div>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit} errors={errors}>
        <Input
          name="UserName"
          type="email"
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
        <Input
          name="password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input name="Name" type="text"></Input>
        <Button className=" btn-primary" lable="Register"></Button>
      </Form>
    </div>
  )
}

export default Register
