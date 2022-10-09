import ListGroup from 'react-bootstrap/ListGroup'
import React from 'react'

function Genre({
  Items,
  ItemActive,
  textProperty,
  valueProperty,
  onSelectGenre,
}) {
  return (
    <ListGroup as="ul">
      {Items.map((item) => (
        <ListGroup.Item
          as="li"
          key={item[valueProperty]}
          active={item[valueProperty] === ItemActive ? 'active' : ''}
          onClick={() => onSelectGenre(item)}
        >
          {item[textProperty]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
Genre.defaultProps = { textProperty: 'name', valueProperty: '_id' }

export default Genre
