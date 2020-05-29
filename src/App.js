import React, {useState} from 'react';
import './App.css';
import TodoList from "./Components/TodoList";
import TodoCreateForm from "./Components/TodoCreateForm";

const initialTodos = [
  {id: 1, name: 'Test', done: false },
  {id: 2, name: 'Test 2', done: true },
  {id: 3, name: 'Test 3', done: false },
];

function App() {

  const [todos, setTodos] = useState(initialTodos);

  const onTaskCreate = (task) => {
    // console.log('APP' + task);
    const updatedTodos = [...todos];
    updatedTodos.push({ id: Math.random(), name: task, done: false });
    setTodos(updatedTodos);
  };

const onTaskDelete = (id) => {
  console.log('APP delete' + id);
  const updatedTodos = todos.filter(el => el.id !== id);
  setTodos(updatedTodos);
};

const onTaskDoneToggle = (id) => {
  console.log('APP done' + id);
  const updatedTodos = todos.map(el => {
    if(el.id === id) return { ...el, done: !el.done };
    else return el;
  });
  setTodos(updatedTodos);
};

const onTaskSave = (task) => {
  const updatedTodos = todos.map(el => {
    if(el.id === task.id) return { ...el, name: task.name };
    else return el;
  });

  setTodos(updatedTodos);
};

  return (
    <div className="App">
      <TodoCreateForm onTaskCreate={onTaskCreate}/>
      <TodoList todos={todos}
                onTaskDelete={onTaskDelete}
                onTaskSave={onTaskSave}
                onTaskDoneToggle={onTaskDoneToggle}/>
    </div>
  );
}

export default App;
