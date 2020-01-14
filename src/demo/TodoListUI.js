import React from 'react';
import {Input,Button,List} from 'antd'
// UI组件使用无状态组件可提升性能
const TodoListUI = (props) => {
  
  return (  
    <div>
      <div style={{margin:'20px'}}>
        <Input
          placeholder={props.inputValue}
          style={{width:'200px',marginRight:'20px'}}
          onChange={props.changeInputValue}
          value={props.inputValue}
        />
        <Button 
          type="primary"
          onClick={props.clickBtn}>
          click
        </Button>
      </div>
      <div style={{margin:'20px',width:'300px'}}>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item,index)=>(
          <List.Item onClick={()=>{
            console.log(index);
            props.deleteItem(index)
          }}>
            {item}
          </List.Item>
        )}
      />
      </div>
    </div>
  );
  
}
 
export default TodoListUI;