import React, { useRef, useState, useEffect } from 'react'
import Input from '../component/Input'
import Form from '../component/Form'
import Joi from 'joi'
import Button from '../component/Button'
import { login } from '../services/auth'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login(props) {
  const [errors, setErrors] = useState('')
  let navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  var schema = Joi.object().keys({
    username1: Joi.string().required().label('UserName'),
    password1: Joi.string().required().label('Password'),
  })
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { error } = schema.validate({
        username1: username,
        password1: password,
      })
      const { statusText, data: jwt } = await login(username, password)
      localStorage.setItem('token', jwt)
      navigate('/')
      toast('Saved ' + statusText)

      error ? setErrors(error.details[0].message) : setErrors('')
      setErrors(error.details[0].message)
    } catch (error) {
      if (error.response && error.response.status === 400)
        setErrors(error.response.data)
    }
  }
  return (
    <>
      <ToastContainer></ToastContainer>

      <Form onSubmit={handleSubmit} errors={errors}>
        <Input
          type="text"
          name="username"
          lable="Username"
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
        <Input
          type="password"
          name="password"
          lable="Password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        ></Input>
        <Button className=" btn-primary" lable="Login"></Button>
      </Form>
    </>
  )
}

export default Login
