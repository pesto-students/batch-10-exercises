import React, { Component } from 'react';

export default class AddTodo extends Component {
  state = {
    content: '',
  };
  this.AddTodo = this.AddTodo.bind(this)

  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state);
    this.setState({ content: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Add a new Todo</label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
        </form>
      </div>
    );
  }
}
