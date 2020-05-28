import React from 'react';
import '../App.css';

function TodoList(props) {
  return (


    <div>
      {
        props.todos.map(el => <li key={el.id}>{el.name}</li>)
      }
    </div>
  );
}

export default TodoList;
