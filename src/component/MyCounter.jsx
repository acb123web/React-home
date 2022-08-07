import React, {useState} from "react";





function MyCounter(){
    
    let [count,setcount] = useState(0);
   
   
    return(   
    <React.Fragment>
     <button className="btn btn-secondary mx-2" onClick={() => setcount(count - 1)}>Decrement</button>
     <span>{count}</span>
     <button className="btn btn-success mx-2" onClick={() => setcount(count + 1)}>Increment</button>
    </React.Fragment>
    )
}

export default MyCounter;