// 上下文-useContext
import React, { useState, createContext,useContext } from 'react';
const CounterContext = createContext() //声明一个新的Context
function Counter(){
  let count = useContext(CounterContext)
  return(
    <p>{count}</p>
  )
}
function TodoList() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>Click me</button>
      <CounterContext.Provider value={count}>
        <Counter/>
      </CounterContext.Provider>
    </div>
  );
}
export default TodoList;