import './App.css';
import React from "react";

function App() {
  const add = "Bharath";
  const app = "Welcome " + add;
  const lang = ["html","css","kotlin","javascript"];
  const menus = ["Masaladosa","panipuri","gobi"];

  /*list rendering*/
  for(var i=0; i<lang.length; i++){
    console.log(lang[i]);
  }
  /*end list rendering*/

  /*conditional rendering*/
  function conditionalRendering(){
  const menu = menus.length === 0?<p>List is empty</p>:menus.map(menuss => <li>{menuss}</li>)
  return menu;
  }
  /*end conditional rendering*/

  console.log(app);
  console.log(lang[0]);

  return (
  <div className="App">
  <button type="button" className="btn btn-danger">This Server Running with Bootstrap v.5.0.2</button>
   <p>{app}</p>
   <ul style={{textAlign:'left'}}>
    {lang.map(langs => <li>{langs}</li>)}
   </ul>
   <ul style={{textAlign:'left'}}>
   {conditionalRendering()}
   </ul>
  </div>
  );
}

export default App;
