import React from "react";
export const NavBar = ({props}) => {

  return (
    <nav className="">
      <div> <h2 onClick={()=>props.actionSelectPage(0)}>Dope Affirmations</h2></div>
      <div className="logout-con">
        <p onClick={()=>props.actionSelectPage(1)}>Need</p>
        <button onClick={()=>{props.actionLogout()}} className="btn">LOGOUT</button>
      </div>
  </nav>
  );
};
