import './App.css';
import React from "react";
import MyCounter from './component/MyCounter';
import Counter from './component/Counter';


function App() {

  function userName(user){
    return user.welcome+" "+user.firstname +" "+ user.lastname;
  }
  const user ={
    welcome:"Welcome",
    firstname:"Bharath",
    lastname:"Hegde"
  }

  const langs = [
    {"id":"1","langname":"kannada"},
    {"id":"2","langname":"english"},
    {"id":"3","langname":"hindi"},
  ];

const vctools = [
  {"id":"1","vcname":"github"},
  {"id":"2","vcname":"gitlab"},
  {"id":"3","vcname":"bitbucket"}
];
 



  
  /*list rendering vctools normal*/
 for(var i=0; i<vctools.length; i++){
  console.log(vctools[i]);
 }
  /*end list rendering vctools normal end*/

  /*conditional rendering*/
 function conditionalRendering(){
  var languages = langs.length === 0?<p>list is empty</p>:langs.map((langss => <li key={langss.id}>{langss.langname}</li>))
  return languages;
 }
  /*end conditional rendering*/


  return (
  <div className="App">
  <button type="button" className="btn btn-danger">This Server Running with Bootstrap v.5.0.2</button>
   <p>{userName(user)} !</p>
   <ul style={{listStyle:"none",textAlign:"left"}}>
   {vctools.map(vctool => <li key={vctool.id}>{vctool.vcname}</li>)}
   </ul>
   <ul style={{textAlign:"left"}}>
    {conditionalRendering()}
   </ul>
  <MyCounter/>
 <Counter/>
  </div>
  );
}

export default App;
