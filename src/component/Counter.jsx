import React,{Component} from 'react';

class Counter extends Component{
  state = {
    count:0
  }
  render(){
    return(
      <React.Fragment>
       <button className='btn btn-danger'>Increment</button>
       <span>{this.state.count}</span>
       <button className='btn btn-warning'>Decrement</button>
      </React.Fragment>
    );
    }
}

export default Counter;
