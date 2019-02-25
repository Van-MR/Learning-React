import React from 'react'
import PropTypes from 'prop-types'

class Default extends React.Component {
  render () {
       return(
         <div>
             <h3 style={ErrorStyle}>404 Error Your Request Page is Not Found  </h3>
         </div>
       )
  }
}

const ErrorStyle ={
    color:'red',
    fontWeight:700
}

export default Default;
