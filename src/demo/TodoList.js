import React from 'react';
import {connect} from 'react-redux'
import {changeInputAction,addItemAction,deleteItemAction} from '../store/actionCreators'
import TodoListUI from './TodoListUI'

const TodoList = (props)=> {
  let {inputValue,list,changeInputValue,clickBtn,deleteItem} = props;
  return <TodoListUI
    inputValue={inputValue}
    list={list}
    changeInputValue={changeInputValue}
    clickBtn={clickBtn}
    deleteItem={deleteItem}
  />;
  
}
const stateToProps = (state)=>{
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const dispatchToProps = (dispatch)=>{
  return{
    changeInputValue(e){
      const action = changeInputAction(e.target.value)
      dispatch(action)
    },
  
    clickBtn(){
      const action = addItemAction()
      dispatch(action)
    },

    deleteItem(index){
      const action = deleteItemAction(index)
      dispatch(action)
    }
  }
}
export default connect(stateToProps,dispatchToProps)(TodoList)