import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    var todos = this.props.todos;
    return (
      <ul>
        {todos.map((e) => <Todo edit={this.props.edit} click={this.props.clickHandler} removeTodo={this.props.removeTodo} todo={e} key={e.timeAdded}/>)}
      </ul>
    )
  }
}

export default TodoList;