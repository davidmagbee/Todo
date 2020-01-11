import React, { Component } from "react";
import "../App.css";

class SubItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subItem: [],
      value: ""
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    let subTasks = this.state.subItem.slice(0);
    return (
      <div className="task-box sub">
        <div className="task-main sub">
          <div className="task sub">
            <i class="far fa-square" onClick={e => this.props.mark(e)}></i>
            <form className="input-form" onSubmit={props.add}>
              <input
                className="input-box"
                type="text"
                value={props.value}
                onChange={props.change}
                placeholder="Type a Task!"
              />
              <input className="submit-box" type="submit" value="Submit" />
            </form>
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

export default SubItem;
