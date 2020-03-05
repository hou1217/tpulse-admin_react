// useReducer
import React, { useState, useMemo } from 'react';
function ChildComponent({ name, children }) {
  function changeXiaohong(name) {
    console.log('她来了，她来了。小红向我们走来了')
    return name + ',小红向我们走来了'
  }

  const actionXiaohong = useMemo(() => changeXiaohong(name), [name])
  return (
    <div>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </div>
  )
}
function TodoList() {
  const [xiaohong, setXiaohong] = useState('小红待客状态')
  const [zhiling, setZhiling] = useState('志玲待客状态')
  return (
    <div>
      <button onClick={() => { setXiaohong(new Date().getTime()) }}>小红</button>
      <button onClick={() => { setZhiling(new Date().getTime() + ',志玲向我们走来了') }}>志玲</button>
      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </div>
  )

}
export default TodoList;