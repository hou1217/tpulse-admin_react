import React, { useState } from 'react';
function TodoList() {
  const [age, setAge] = useState(20);
  const [sex, setSex] = useState('male')
  const [job, setJob] = useState('doctor')

  return (
    <div>
      <p>age: {age} </p>
      <p>sex: {sex} </p>
      <p>job: {job} </p>
    </div>
  );
}
export default TodoList;