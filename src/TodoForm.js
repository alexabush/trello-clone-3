import React, { Component } from 'react';

class TodoForm extends Component {
  state = { content: '' };
  // make process add form submission with this
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAdd(this.state.content);
    this.setState({content:''})
  };

  handleChange = e => {
    this.setState({ content: e.target.value });
  };

  render() {
    return (
      <div className="TodoForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            {this.props.text}:
            <input
              type="text"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
