import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./containers/TodoList";
import TodoInput from "./containers/TodoItem";
import TodoItem from "./containers/TodoItem";
import { v4 as uuid } from "uuid";

export default class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "wake up",
      },
      {
        id: 2,
        title: "take breakfast",
      },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("handle change");
  };
  handleSubmit = (e) => {
    console.log("handle submit");
  };
  clearList = () => {
    console.log("clear list");
  };
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <div className="text-capitalize text-center">
                <h3>Todo Input</h3>
                <TodoInput
                  item={this.state.item}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  editItem={this.state.editItem}
                />
                <TodoList
                  items={this.state.items}
                  clearList={this.clearList}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
