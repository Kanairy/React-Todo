import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor() {
    super();
    this.state = { editing: false };
  }

  enableEditing() {
    this.setState({ editing: true });
  }

  render() {

    const ENTER_KEY = 13;
    var main;

    if (this.state.editing) {
      main = <input onKeyDown={(e) => e.which === ENTER_KEY ? this.setState({editing: false}) : null} 
                    onChange={() => this.props.edit(this.props.todo, this.refs.editingBox.value)} 
                    ref="editingBox" 
                    value={ this.props.todo.title }
                    />
    } else {
      main = <span onDoubleClick={ this.enableEditing.bind(this) }>{this.props.todo.title} - </span>
    }

    return (
      <li className={this.props.todo.complete ? 'Todo-complete': 'Todo-incomplete'}>
        {main}
        <span>{(new Date(this.props.todo.timeAdded)).toString()}</span>
        <button onClick={() => this.props.removeTodo(this.props.todo)}>delete</button>
        <input onClick={ () => this.props.click(this.props.todo) } type="checkbox"/>
      </li>
    );
  }
};

export default Todo;
