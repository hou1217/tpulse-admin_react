// useReducer
import React from 'react';
import ShowArea from './children/ShowArea'
import Buttons from './children/Buttons'
import { Color } from './children/Color'

function TodoList() {

  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  )

}
export default TodoList;