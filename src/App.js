import React, {useState} from 'react';
import './App.css';
import TodoList from "./Components/TodoList";
import TodoCreateForm from "./Components/TodoCreateForm";

const initialTodos = [
  {id: 1, name: 'Test', done: false },
  {id: 2, name: 'Test 2', done: true },
  {id: 3, name: 'Test 3', done: false },
]

function App() {

  const [todos, setTodos] = useState(initialTodos)

  return (
    <div className="App">
      <TodoCreateForm />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
