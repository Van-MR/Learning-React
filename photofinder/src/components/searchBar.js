import React from 'react'

const Search = (props) => {
   return (
      <form onSubmit={props.handleSearch}>
          <input onChange={props.handleChange} name="term" value={props.value} placeholder="enter item" />
      </form>
   )
}

export default Search
