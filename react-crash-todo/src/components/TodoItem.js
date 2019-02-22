import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  getStyle = () => {
    return {
     background: '#f4f4f4',
     padding: '10px',
     borderBottom: '1px #ccc dotted',
     textDecoration: this.props.todo.complete ? 'line-through' : 'none'
   }
  }

  render () {
      const { id, title } = this.props.todo;
      const { markComplete,deleteItem } = this.props;
      return (
         <div style={this.getStyle()}>
            <p>
              <input type="checkbox"  onChange={() => {markComplete(id)}}/> {' '}
               { title }
              <button style={btnStyle} onClick={() => {deleteItem(id)}}>x</button>
            </p>
         </div>
      )
  }
}


TodoItem.propTypes = {
  todo:PropTypes.object.isRequired,
  markComplete:PropTypes.func.isRequired,
  deleteItem:PropTypes.func.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
