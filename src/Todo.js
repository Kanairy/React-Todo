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

    const editingTodo = <input onKeyDown={(e) => e.which === ENTER_KEY ? this.setState({editing: false}) : null} 
                               onChange={() => this.props.edit((this.props.todo.get('timeAdded')), this.refs.editingBox.value)} 
                               ref="editingBox" 
                               value={ this.props.todo.get('title') }/>

    const main = <span onDoubleClick={ this.enableEditing.bind(this) }>{this.props.todo.get('title')} - </span>
    
    return (
      <li className={this.props.todo.get('complete') ? 'Todo-complete': 'Todo-incomplete'}>
        {this.state.editing ? editingTodo : main}
        <span>{(new Date(this.props.todo.get('timeAdded'))).toString()}</span>
        <button onClick={() => this.props.removeTodo(this.props.todo.get('timeAdded'))}>delete</button>
        <input onClick={ this.props.click } type="checkbox"/>
      </li>
    );
  }
};

export default Todo;
