import React from "react";



export const Login = ({props}) => {
const getDetails=()=>{
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
props.actionLogin(email,password)
    }

  return (
    <div className="main-view">
        <div className="login-con">
            <input id="email" placeholder="Email" className="form-control" type="email"></input>
            <input id="password" placeholder="Password"className="form-control" type="password"></input>
            <div className="login-btn">
                <button className="btn" onClick={()=>{getDetails()}}>Login</button></div>
            <div>
                <br/>
                <p>{props.error}</p>
            </div>

        </div>

 
  </div>
  );
};
