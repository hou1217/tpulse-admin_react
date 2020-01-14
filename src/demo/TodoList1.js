import React, { Component } from 'react';

import store from '../store'
import {changeInputAction,addItemAction,deleteItemAction} from '../store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = Object.assign({},store.getState())
    this.changeInputValue = this.changeInputValue.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }

  storeChange(){
    this.setState(store.getState())
  }
  
  changeInputValue(e){
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  clickBtn(){
    const action = addItemAction()
    store.dispatch(action)
  }
  deleteItem(index){
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  
  render() { 
    return <TodoListUI
      inputValue={this.state.inputValue}
      list={this.state.list}
      changeInputValue={this.changeInputValue}
      clickBtn={this.clickBtn}
      deleteItem={this.deleteItem}
    />;
  }
}

export default TodoList;