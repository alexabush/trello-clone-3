import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class Column extends Component {
  handleAdd = content => {
    this.props.addTodo(this.props.id, content);
  };

  handleDelete = todoId => {
    this.props.deleteTodo(this.props.id, todoId);
  };

  // handleUpdate = (content) => {
  //   this.props.addTodo(this.props.id, content)
  // };

  handleMove = (todoId, newColName) => {
    this.props.moveTodo(this.props.id, todoId, newColName);
  };

  render() {
    console.log('Column');
    let todosUI = this.props.todos.map(({ id, content }) => {
      return (
        <Todo
          key={id}
          id={id}
          content={content}
          handleDelete={this.handleDelete}
          updateTodo={this.updateTodo}
          handleMove={this.handleMove}
        />
      );
    });
    return (
      <div className="Column">
        <h3>{this.props.name}</h3>
        {todosUI}
        <TodoForm text="New Todo" handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default Column;
