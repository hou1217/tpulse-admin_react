import React from 'react';
import {connect} from 'react-redux'
import {Button,Input} from 'antd'
const Index = (props) => {
  return (  
    <div>
      <h1>看板</h1>
      <Input placeholder="请输入内容" onChange={(e)=>props.dispatch({
        type:"CHANGE_INPUT",
        value:e.target.value
      })}></Input>
      <Button >按钮1</Button>
    </div>
  );
}

export default connect(state=>state)(Index);
