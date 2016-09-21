import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor() {
    super();
    this.state = {editing: false};
  }

  enableEditing() {
    this.setState({editing: true});
  }

  render() {
    return (
      <li className={this.props.todo.complete ? 'complete': 'incomplete'}>
        { this.state.editing ? <input onKeyDown={(e) => e.which === 13 ? this.setState({editing: false}) : null} onChange={() => this.props.edit(this.props.todo, this.refs.editingBox.value)} ref="editingBox" placeholder={ this.props.todo.title }/> : <span onDoubleClick={ this.enableEditing.bind(this) }>{this.props.todo.title} - </span>
        }
        <span>{(new Date(this.props.todo.timeAdded)).toString()}</span>
        <button onClick={() => this.props.removeTodo(this.props.todo)}>delete</button>
        <input onClick={ () => this.props.click(this.props.todo) } type="checkbox"/>
      </li>
    )
  }
};

export default Todo;
