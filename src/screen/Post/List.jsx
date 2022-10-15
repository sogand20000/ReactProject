import React, { useEffect, useState } from 'react'
import Table from '../../component/Table'
import _ from 'lodash'
import Button from '../../component/Button'
import axios from '../../services/httpService'
import config from '../../config.json'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { saveMovie } from '../../services/moviesService'
function List(props) {
  const [data, setData] = useState([])

  const deleteItem = async () => {
    //const originalData = data
    //const posts = data.filter((p) => p.id !== 2)
    //setData(posts)
    try {
      // const result = await saveMovie((movie._id = 2))
      //axios.delete('sdsd' + config.apiEndpoint + '/2')
    } catch (er) {
      console.log('HANDLE DELETE CATCH BLOCK')
      if (er.response && er.response.status === 404)
        alert('THIS POST HAS ALREADY BEEN DELETED')

      // setData(originalData)
    }
  }
  const updateItem = async () => {
    const { data: item } = await axios.put(config.apiEndpoint, {
      title: 'Somayeh',
      body: 'e3',
    })
    const p = [item, ...data]
    setData(p)
  }
  const handelUpdate = () => {
    updateItem()
  }
  const handelDelete = () => {
    deleteItem()
  }
  const columns = [
    {
      path: 'id',
      lable: 'id',
    },
    {
      path: 'title',
      lable: 'Title',
    },
    /* { path: 'body', lable: 'Body' },
     */
    {
      path: 'Update',
      content: <Button onClick={handelUpdate} lable="Update"></Button>,
    },
    {
      path: 'Delete',
      content: (
        <Button
          onClick={handelDelete}
          className="btn-danger"
          lable="Delete"
        ></Button>
      ),
    },
  ]
  const getData = async () => {
    const { data } = await axios.get(config.apiEndpoint)
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])
  const Save = async () => {
    const { data: item } = await axios.post(config.apiEndpoint, {
      title: 'a',
      body: 'd',
    })
    const items = [item, ...data]
    setData(items)
  }
  const handelClick = () => {
    Save()
  }
  return (
    <>
      <ToastContainer></ToastContainer>
      <Button lable="Save" onClick={handelClick}></Button>
      <Table columns={columns} data={data}></Table>
    </>
  )
}

export default List
