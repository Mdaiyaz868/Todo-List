// src/components/TodoItem.js
import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li
        key={item._id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span className="mr-2">
          {item.completed ? <s>{item.title}</s> : item.title}
        </span>
        <span>
          <button className="btn btn-secondary mr-2">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </span>
      </li>
    );
  }
}