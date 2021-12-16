import React, { Component } from "react";

class Counter extends React.Component {
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     console.log("constructor", this);
  //   }

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold",
  //   };

  // handleIncrement = (product) => {
  //   //console.log("Increment Clicked", this);
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h4>{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          <li>
            {this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </li>
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
