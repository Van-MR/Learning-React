import React from 'react'
import ReactDom from 'react-dom'
import img from './asset/01.png'
import './index.scss'

const HelloWorld = () => {
   return (
     <div>
        <h1>hello there world</h1>
        <img src={img} alt="pic"/>
     </div>
   )

}


ReactDom.render(
  <HelloWorld/>,
  document.getElementById('root')
)
