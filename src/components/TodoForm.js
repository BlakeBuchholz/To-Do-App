import React, { useState } from 'react'

function TodoForm(props) {
const [input, setInput] = useState('');

const handleChange = e => {
  setInput(e.target.value);
}

const handleSubmit = e => {
  e.preventDefault();

  props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    text: input
  });

  setInput('');
};

  return (
    <form className='todo-list' onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Add a task' 
        value={input} name="text" 
        className='todo-list'
        onChange={handleChange}
        />
        <button className='todo-button'>Add task</button>
    </form>
  )
}

export default TodoForm