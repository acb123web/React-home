import './App.css';
import React from "react";
import MyCounter from './component/MyCounter';

function App() {

  function userName(user){
    return user.welcome+" "+user.firstname +" "+ user.lastname;
  }
  const user ={
    welcome:"Welcome",
    firstname:"Bharath",
    lastname:"Hegde"
  }

const vctools = [
  {"id":"1","vcname":"github"},
  {"id":"2","vcname":"gitlab"},
  {"id":"3","vcname":"bitbucket"}
];
 
   const menus = ["Masaladosa","panipuri","gobi"];


  
  /*list rendering vctools normal*/
 for(var i=0; i<vctools.length; i++){
  console.log(vctools[i]);
 }
  /*end list rendering vctools normal end*/

  /*conditional rendering*/
  function conditionalRendering(){
    const menu = menus.length === 0?<p>List is empty</p>:menus.map((menuss,index) => <li key={index}>{menuss}</li>)
    return menu;
  }
  /*end conditional rendering*/


  return (
  <div className="App">
  <button type="button" className="btn btn-danger">This Server Running with Bootstrap v.5.0.2</button>
   <p>{userName(user)} !</p>
   <ul style={{listStyle:"none",textAlign:"left"}}>
   {vctools.map(vctool => <li key={vctool.id}>{vctool.vcname}</li>)}
   </ul>
   <ul style={{textAlign:'left'}}>
   {conditionalRendering()}
   </ul>
  <MyCounter/>
  </div>
  );
}

export default App;
