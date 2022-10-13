import React from 'react'
import _ from 'lodash'
import { redirect } from 'react-router-dom'
import { LockFill } from 'react-bootstrap-icons'

export default function TableBody({ data, columns }) {
  const renderCell = (item, column) => {
    if (column.content) {
      return column.content
    } else {
      return _.get(item, column.path)
    }
  }
  const createKey = (item, col) => {
    {
      return item._id + (col.path || col.key)
    }
  }
  return (
    <tbody>
      {data.map((item) => (
        <tr
          key={item._id || item.id}
          onDoubleClick={(event) =>
            (window.location.href = `/Movies/${item._id}`)
          }
        >
          {columns.map((col) => (
            <td key={createKey(item, col)}>{renderCell(item, col)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
