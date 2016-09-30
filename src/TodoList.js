import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    
    var todos = this.props.todos;

    return (
      <ul>
        {todos.map((todo, i) => {
          return <Todo edit={this.props.edit} 
                       click={() => this.props.clickHandler(todo.get('timeAdded'))} 
                       removeTodo={this.props.removeTodo} todo={todo} key={todo.get('timeAdded')} />
        })}
      </ul>
    );
  }
}

export default TodoList;
