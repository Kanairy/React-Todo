import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components

import TodoList from './TodoList';
import TodoForm from './TodoForm';


if (!localStorage.getItem('todos')) {
  var store = {
    todos: []
  };  
} else {
  var store = JSON.parse(localStorage.getItem('todos'));
}


class App extends Component {

  constructor() {
    super();
    this.state = store;
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete;
    this.setState({todos: store.todos});
  }

  addTodo(title) {
    store.todos.push({
      title,
      timeAdded: Date.now(),
      complete: false  
    });
    this.setState({todos: store.todos});
  }

  removeTodo(todo) {
    store.todos = store.todos.filter((e) => e.timeAdded !== todo.timeAdded);
    this.setState({todos: store.todos});
  }

  edit(todo, val) {
    todo.title = val;
    this.setState({todos: store.todos});
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(store));
    console.log('localstorage fed!');
    console.log(JSON.parse(localStorage.getItem('todos')));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList removeTodo={this.removeTodo.bind(this)} 
                  clickHandler={this.toggleComplete.bind(this)}
                  edit={this.edit.bind(this)} 
                  todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
