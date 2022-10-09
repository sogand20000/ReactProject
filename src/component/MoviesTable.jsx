import React from 'react'
import Table from './Table'
import _ from 'lodash'

const columns = [
  {
    path: 'title',
    lable: 'Title',
  },
  { path: 'genre.name', lable: 'Genre' },
  { path: 'dailyRentalRate', lable: 'Rate' },
  { path: 'numberInStock', lable: 'Stock' },
  { path: 'like', content: <></> },

  {
    path: 'delete',
    content: (
      <button
        onClick={() => console.log('Delete')}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  },
]
function MoviesTable({ moviespaginate }) {
  return (
    <>
      <Table data={moviespaginate} columns={columns}></Table>
    </>
  )
}
export default MoviesTable
