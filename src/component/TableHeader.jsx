import React from 'react'

export default function ({ columns, onSort, sortColumn }) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            style={{ textAlign: 'center' }}
            key={column.path}
            onClick={() => onSort(column.path)}
          >
            {column.lable}
          </th>
        ))}
      </tr>
    </thead>
  )
}
