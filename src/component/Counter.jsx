import React,{Component} from 'react';

class Counter extends Component{
  state = {
    count:0
   }
  render(){
    return(
        <React.Fragment>
        <button className="btn btn-danger mx-2">Decrement</button>
        <span>{this.state.count}</span>
        <button className="btn btn-warning mx-2">Increment</button>
       </React.Fragment>
    );
  }
}

export default Counter;
