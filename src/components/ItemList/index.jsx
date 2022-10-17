import Item from "../Item";
import React from 'react'

const ItemList = ({data = []}) => {
  return (
      data.map(album => <Item key={album.id} info={album}/>)
  )
}

export default ItemList;