import React, { Component } from "react";
import Draggable from "react-draggable";
import SubItem from "../SubItem/SubItem";
import "../App.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subItem: [],
      value: ""
    };
    this.subItem = this.subItem.bind(this);
    // this.handleChange = this.handleChange.bind(this)
  }
  subItem(e) {
    console.log(e.target);
    let array = this.state.subItem.slice(0);
    let subTask = <SubItem />;
    array.push(subTask);
    this.setState({
      subItem: array
    });
  }

  render() {
    let subTasks = this.state.subItem.slice(0);
    return (
      <div className="task-box">
        <div className="task-main">
          <div className="task">
            <i class="far fa-square" onClick={e => this.props.mark(e)}></i>
            <p>{this.props.task.title}</p>
          </div>
          <div className="task-icons">
            <i class="fas fa-plus" onClick={this.subItem}></i>
            <i
              class="fas fa-times"
              onClick={() => this.props.onClick(this.props.index)}
            ></i>
          </div>
        </div>
        {subTasks}
      </div>
    );
  }
}

export default Task;
