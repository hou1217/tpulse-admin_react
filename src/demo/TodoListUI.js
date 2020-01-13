import React, { Component } from 'react';
import {Input,Button,List} from 'antd'
class TodoListUI extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <div style={{margin:'20px'}}>
          <Input
            placeholder={this.props.inputValue}
            style={{width:'200px',marginRight:'20px'}}
            onChange={this.props.changeInputValue}
            value={this.props.inputValue}
          />
          <Button 
            type="primary"
            onClick={this.props.clickBtn}>
            click
          </Button>
        </div>
        <div style={{margin:'20px',width:'300px'}}>
        <List
          bordered
          dataSource={this.props.list}
          renderItem={(item,index)=>(
            <List.Item onClick={()=>{
              console.log(index);
              this.props.deleteItem(index)
            }}>
              {item}
            </List.Item>
          )}
        />
        </div>
      </div>
    );
  }
}
 
export default TodoListUI;