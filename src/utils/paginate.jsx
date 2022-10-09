import _ from 'lodash'

function paginate(moveis, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize
  return _(moveis).slice(startIndex).take(pageSize).value()
}
export default paginate
