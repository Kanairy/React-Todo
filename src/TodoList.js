import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    
    var todos = this.props.todos;

    return (
      <ul>
        {todos.map((todo) => {
          return <Todo edit={this.props.edit} 
                       click={this.props.clickHandler} 
                       removeTodo={this.props.removeTodo} todo={todo} key={todo.timeAdded} />
        })}
      </ul>
    );
  }
}

export default TodoList;
