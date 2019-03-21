import React from 'react'

const Item = (props) => {
    return (
      <li>
          <img src={props.url}  alt="pic"/>
      </li>
    )
}

export default Item;
