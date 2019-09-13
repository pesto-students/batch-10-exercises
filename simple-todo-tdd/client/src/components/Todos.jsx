import React from 'react';

export default function Todos({ todos, deleteTodo }) {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <li className="list-group-item" key={todo.id}>
          <span>{todo.content}</span>
          <button
            className="btn btn-danger float-right"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            Delete
          </button>
        </li>
      );
    })
  ) : (
    <p className="text-center">You have no to todos</p>
  );
  return <ul className="todos list-group">{todosList}</ul>;
}
