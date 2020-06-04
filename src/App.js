import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './containers/TodoList';
import TodoInput from './containers/TodoItem';
import TodoItem from './containers/TodoItem'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    )
  }
}
