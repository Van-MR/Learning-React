import React from 'react';



class  Component3 extends React.Component {
  render () {
      return(
         <div style={c3style}>
           <h3>Component3</h3>
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              distinctio quidem, aspernatur ducimus dolor mollitia impedit in aliquid
              perferendis vero, odio eveniet natus alias molestiae laudantium culpa
              consequuntur, at soluta?
           </p>
         </div>
      )
  }
}

const c3style = {
  background:'skyBlue',
  padding:'1.5rem'
}

export  default Component3;
