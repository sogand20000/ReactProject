import React, { useState } from 'react'
import TableHeader from './TableHeader'
import Table from 'react-bootstrap/Table'

import _ from 'lodash'
import TableBody from './TableBody'
import axios from 'axios'

function TableMe({ data, columns }) {
  const [sortColumn, setSortColumn] = useState('id')

  const [order, setOrder] = useState('asc')

  const sorted = _.orderBy(data, [sortColumn], [order])
  const onSort = (column) => {
    if (sortColumn === column) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setOrder('asc')
    }
  }
  return (
    <>
      <Table striped bordered hover>
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        ></TableHeader>
        <TableBody data={sorted} columns={columns}></TableBody>
      </Table>
    </>
  )
}
export default TableMe
