import axios from 'axios'
import React, { useRef, useState } from 'react'
import Button from '../../component/Button'
import Input from '../../component/Input'

function Add(props) {
  const [title, setTitle] = useState('')
  const titleRef = useRef(null)
  const bodyRef = useRef(null)
  const [post, setPost] = useState({})

  const Save = async () => {
    const nn = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      post
    )
    console.log(nn)
  }
  const handelClick = () => {
    setPost({ title: titleRef.current.value, body: bodyRef.current.value })
    Save()
  }
  return (
    <>
      <Input lable="Title" name="title" type="text" refItem={titleRef}></Input>

      <label htmlFor="Body">Body</label>
      <textarea
        id="Body"
        name="Body"
        className="form-control"
        cols="60"
        rows="5"
        ref={bodyRef}
      ></textarea>

      <Button lable="Save" onClick={handelClick}></Button>
    </>
  )
}

export default Add
