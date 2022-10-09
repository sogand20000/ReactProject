import React from 'react'
import _ from 'lodash'

function Pagination({
  itemsCount,
  pagesCount,
  pages,
  pageSize,
  currentPage,
  onPageChange,
}) {
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
