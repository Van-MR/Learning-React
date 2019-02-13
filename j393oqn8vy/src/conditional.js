import React from "react";

function Conditional(props) {
  console.log(props.isLoading);
  //condition render  if else   三元表达式  逻辑运算

  // if (props.isLoading) {
  //   return <h3>try to loading ...</h3>;
  // } else {
  //   return <h3>some cool stuff about conditional rendering</h3>;
  // }

  return <h3>some cool stuff about conditional rendering</h3>;
}

export default Conditional;
