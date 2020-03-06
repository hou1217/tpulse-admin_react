// 生命周期-useEffect
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
function Index() {
  useEffect(() => {
    console.log('useEffect=>老弟，你来了！Index页面')
    return()=>{
      console.log('老弟，你走了！Index页面')
    }
  },[])
  return <h2>JSPang.com</h2>;
}

function List() {
  useEffect(() => {
    console.log('useEffect=>老弟，你来了！List页面')
    return ()=>{
      console.log('老弟，你走了！List页面')
    }
  },[])
  //如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。
  // 这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。

  return <h2>List-Page</h2>;
}
function TodoList() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Update the document title using the browser API
    console.log(`现在你点击了${count}次`)
    return ()=>{
      console.log(`上一次你点击了${count}次`)
    }
  },[count]);//这里传入一个状态，只有状态发生变化才会调用effect
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>Click me</button>
      <Router>
        <ul>
          <li> <Link to="/">首页</Link> </li>
          <li><Link to="/list/">列表</Link> </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  );
}
export default TodoList;