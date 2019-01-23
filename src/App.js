import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import './App.css';
import Column from './Column';
/*
Todo
XXX 1. make components, make sure they're all connected
2. make methods (add todo, delete todo, move todo)
3. style
*/

const data = {
  columns: [
    { id: uuidv4(), name: 'To Do', todos: [{ id: uuidv4(), content: 'wake' }] },
    { id: uuidv4(), name: 'In Progress', todos: [] },
    { id: uuidv4(), name: 'Done', todos: [] }
  ]
};

class App extends Component {
  state = data;

  // event handler, passed to Column
  // needs to return column identifier and new todo content
  addTodo = (colId, content) => {
    this.setState(prev => {
      let updatedColumns = prev.columns.map(column => {
        let { id, todos } = column;
        if (id === colId) {
          column.todos = todos.concat([{ id: uuidv4(), content }]);
        }
        return column;
      });
      return { columns: updatedColumns };
    });
  };

  // event handler, passed to todo
  // needs to return column identifier and todo identifier
  deleteTodo = (colId, todoId) => {
    this.setState(prev => {
      let updatedColumns = prev.columns.map(column => {
        let { id, todos } = column;
        if (id === colId) {
          column.todos = column.todos.filter(todo => todo.id !== todoId);
        }
        return column;
      });
      return { columns: updatedColumns };
    });
  };

  // event handler, passed to todo
  // needs to return column identifier, todo identifier, and updated content
  updateTodo = (colId, todoId, newContent) => {};

  // event handler, passed to todo
  // needs to return column identifier, todo identifier, and new column identifier
  moveTodo = (colId, todoId, newColName) => {
    debugger;
    this.setState(prev => {
      let index = null;
      let todo = null;
      prev.columns.forEach((column, i) => {
        if (column.name === newColName) index = i
          // column.todos = column.todos.concat(todo);
      });
      if (index === null) return {}
      let updatedColumns = prev.columns.map(column => {
        debugger;
        let { id, todos } = column;
        if (id === colId) {
          todo = column.todos.find(todo => todo.id === todoId);
          column.todos = column.todos.filter(todo => todo.id !== todoId);
        }
        return column;
      });
      updatedColumns[index].todos.push(todo)
      // debugger;
      return { columns: updatedColumns };
    });
  };

  render() {
    console.log('App');
    let columnsUI = this.state.columns.map(({ id, name, todos }) => {
      return (
        <Column
          id={id}
          key={id}
          name={name}
          todos={todos}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
          moveTodo={this.moveTodo}
        />
      );
    });
    return (
      <div className="App">
        <h1>Trello</h1>
        <div className="Columns">{columnsUI}</div>
      </div>
    );
  }
}

export default App;
