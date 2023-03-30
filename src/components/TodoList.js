import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if(!task.text || /^\s*$/.test(task.text)) {
            return;
        }

        const newTasks = [task, ...tasks]

        setTasks(newTasks)
    };

    const updateTask = (taskId, newValue) => {
        if(!tasks.text || /^\s*$/.test(tasks.text)) {
        return;
    }

    setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item))
    );
   }


    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id)

        setTasks(removeArr)
    };

    


    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

  return (
    <div>
        <h1>Big Plans</h1>
        <TodoForm 
        onSubmit={addTask}
        />
        <Todo 
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        />
    </div>
  );
}

export default TodoList