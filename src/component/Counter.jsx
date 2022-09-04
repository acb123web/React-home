import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  }

  /*increment operation*/
  Increment() {
    let message = "This is increment Operation";
    this.state.count++;
    console.log(message);
    console.log(this.state.count);
  }

  /*Decrement Operation*/
  Decrement() {
    let message = "This is decrement Operation";
    this.state.count--;
    console.log(message);
    console.log(this.state.count);
  }

  /*Check count operation*/
  checkCounter() {
    const checkCount = this.state.count === 0 ? "btn btn-success mx-2" : "btn btn-danger mx-2";
    return checkCount;
  }

  render() {
    return (
      <React.Fragment>
        <button className='btn btn-primary' onClick={() => this.Increment()}>Increment</button>
        <span className={this.checkCounter()}>{this.state.count}</span>
        <button className='btn btn-danger' onClick={() => this.Decrement()}>Decrement</button>
      </React.Fragment>
    );
  }
}

export default Counter;
