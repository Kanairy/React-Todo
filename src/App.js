import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, List } from 'immutable';

//components

import TodoList from './TodoList';
import TodoForm from './TodoForm';


// var store = JSON.parse(localStorage.getItem('todos')) || { todos: [] };

// store = Immutable.fromJS(store, function (key, value) {
//   var isIndexed = Immutable.Iterable.isIndexed(value);
//   return isIndexed ? value.toList() : value.toOrderedMap();
// });


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { data: Map({todos: List()}) };
  }

  toggleComplete(todoId) {
    this.setState(({data}) => {
      const todos = data.get('todos').map(t => todoId === t.get('timeAdded') ? t.update('complete', v => !v) : t);
      return { data: data.update('todos', v => todos) }
    });
  }

  addTodo(title) {
    this.setState(({data}) => {
      const todos = data.get('todos').push(Map({
        title: title,
        timeAdded: Date.now(),
        complete: false  
      }));
      return { data: data.update('todos', v => todos) }
    });
  }

  removeTodo(todoId) {
    this.setState(({data}) => {
      return {data: data.update('todos', v => data.get('todos').filter(t => t.get('timeAdded') !== todoId))};
    });
  }

  edit(todoId, val) {
    this.setState(({data}) => {
      const todos = data.get('todos').map(t => todoId === t.get('timeAdded') ? t.update('title', v => val) : t);
      return {data: data.update('todos', v => todos)};
    });
  }

  // componentDidUpdate() {
  //   localStorage.setItem('todos', JSON.stringify(store));
  //   console.log('localstorage fed!');
  //   // console.log(JSON.parse(localStorage.getItem('todos')));
  // }

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
                  todos={this.state.data.get('todos')} />
      </div>
    );
  }
}

export default App;
