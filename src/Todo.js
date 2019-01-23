import React, { Component } from 'react';
import TodoForm from './TodoForm';

class Todo extends Component {
  delete = () => {
    this.props.handleDelete(this.props.id);
  };

  handleUpdate = (e, newContent) => {};

  move = targetCol => {
    debugger
    this.props.handleMove(this.props.id, targetCol);
  };

  render() {
    console.log('Todo');
    return (
      <div className="Todo">
        <p>{this.props.content}</p>
        <button onClick={this.delete}>X</button>
        <TodoForm handleAdd={this.move} />
      </div>
    );
  }
}

export default Todo;
