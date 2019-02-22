import React from 'react'
import PropTypes from 'prop-types'

class AddTodo extends React.Component {
  state = {
    title:'hello world'
  }

  handleSubmmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({
      title:''
    })
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render () {

     return (
        <React.Fragment>
            <form onSubmit={this.handleSubmmit } style={{display:'flex'}}>
               <input
                 type="text"
                 name="title"
                 style={{ flex: '7', padding: '5px' }}
                 placeholder="Add Todo ..."
                 onChange={this.handleChange}
                 value={this.state.title}
                 />
               <input
                 type="submit"
                 className="btn"
                 style={{ flex: '3', padding: '5px' }}
                 value="add title"
                 />
            </form>
        </React.Fragment>
     )
  }
}

// PropTypes
AddTodo.propTypes = {
  addItem: PropTypes.func.isRequired
}


export default AddTodo;
