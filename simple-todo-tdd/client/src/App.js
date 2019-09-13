import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'water plants' },
      { id: 2, content: 'drink alcohol' },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  };
  render() {
    return (
      <div className="container ">
        <h1 className="text-primary text-center">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    );
  }
}

export default App;
