import './App.css';
import React from "react";

function App() {

  function userName(user){
    return user.welcome+" "+user.firstname +" "+ user.lastname;
  }
  const user ={
    welcome:"Welcome",
    firstname:"Bharath",
    lastname:"Hegde"
  }

  const lang = [
    {id:"1",info:"HTML"},
    {id:"2",info:"CSS"},
    {id:"3",info:"BOOTSTRAP"},
    {id:"4",info:"JAVASCRIPT"}
  ];
   const menus = ["Masaladosa","panipuri","gobi"];


  
  /*list rendering*/
 for(var i=0; i<lang.length; i++){
  console.log(lang[i]);
 }
  /*end list rendering*/

  /*conditional rendering*/
  function conditionalRendering(){
    const menu = menus.length === 0?<p>List is empty</p>:menus.map((menuss,index) => <li key={index}>{menuss}</li>)
    return menu;
  }
  /*end conditional rendering*/

  console.log(lang[0]);

  return (
  <div className="App">
  <button type="button" className="btn btn-danger">This Server Running with Bootstrap v.5.0.2</button>
   <p>{userName(user)} !</p>
   <ul style={{textAlign:'left',listStyle:"none"}}>
   {lang.map(langs => <li className="badge bg-info text-white py-3 px-4 m-2" key={langs.id}>{langs.id}. {langs.info}</li>)}
   </ul>
   <ul style={{textAlign:'left'}}>
   {conditionalRendering()}
   </ul>
  </div>
  );
}

export default App;
