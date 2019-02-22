import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

class Todos extends React.Component {

  render () {
    const { todos, markComplete, deleteItem } =this.props;
    return todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo}  markComplete={markComplete} deleteItem={deleteItem}/>
  ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
}

export default Todos;
