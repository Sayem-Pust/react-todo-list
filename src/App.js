import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./containers/TodoList";
import TodoInput from "./containers/TodoInput";
import TodoItem from "./containers/TodoItem";
import { v4 as uuid } from "uuid";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      item: this.state.item
    }

    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      item:'',
      id: uuid(),
      editItem: false,
    }, () => console.log(this.state))
  };
  clearList = () => {
    this.setState({
      items: [],
    })
  };
  handleDelete = (id) => {
    const filterItem = this.state.items.filter(item => item.id !== id )
    this.setState({
      items: filterItem
    })
  };
  handleEdit = (id) => {
    const filterItem = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id)
    console.log(selectedItem)
    this.setState({
      items: filterItem,
      item: selectedItem.item,
      id: id,
      editItem: true,
    })
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
