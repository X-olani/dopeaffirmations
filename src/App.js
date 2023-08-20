import "./App.css";
import React from "react";
import { NavBar } from "./navBar";
import { Login } from "./login";
import $ from 'jquery';

export const App = (props) => {

 const fadeOut=()=>{
  console.log("hi")
         $(".fade-sent").fadeIn('fast').delay(1000).fadeOut('fast');
       
      }
  switch (props.page) {
    case 0:
      return(
        <div className="App">
          <NavBar props={props}></NavBar>
          <div className="main-view">  
            <p>{props.quote.text}</p>
          </div>
        </div>
      )
      
      
    case 1:
     
     
    return(

      <div className="App">
         <NavBar props={props}></NavBar>
        <div className="main-view">
<div className="fade-sent"><p>SENT</p></div>
          <div onClick={()=>fadeOut()} className="circle">Press</div>
        </div>
        
      </div>
    )

    case 2:
      return(
        <div className="App">
   <NavBar props={props}></NavBar> 
   <Login props={props}></Login>
        </div>
       
      )
      break;
  
    default:
      break;
  }
   
    
    
    
 
};
