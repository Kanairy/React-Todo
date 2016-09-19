import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <div>
        <input ref="mainInput"/>
        <button onClick={() => {this.props.addTodo(this.refs.mainInput.value);this.refs.mainInput.value=""}}>submit</button>
      </div>
    )
  }
}

export default TodoForm;
