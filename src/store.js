import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { Affirmations } from "./texts.js";
import {signInWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from './firebaseConfig.js';

import React, { useEffect } from 'react';
import OneSignal from './onesignal'; // Path to your onesignal.js file



const initialState = {
  email: "",
  password: "",
  quote: Affirmations[Math.floor(Math.random() * 22)],
  page:2,
  error:"",
  user:null
};



const scheduleNotification = () => {
  if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        const now = new Date();
        const timeUntil8AM = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 3, 52, 0) - now;

        if (timeUntil8AM > 0) {
          setTimeout(() => {
            new Notification(Affirmations[Math.floor(Math.random() * 22)].text, {
              body: "Hey Kim"
            });
          }, timeUntil8AM);
        }
      }
    });
  }
};



scheduleNotification();

export const SelectPage=(page)=>{

  return{
    type:"PAGE",
    page:page
  }
}
export const Login =  (email,password) =>{
    return (dispatch)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(data=>{
            return dispatch({
            type: "LOGIN",
            page:0,
            user:"active"
            
         
          });

            }
        ).catch(error=>{
          
            return dispatch({
                type: "LOGIN_ERROR",

       
             
              });
            
        })
        



     /*try {
    const loginUser = signInWithEmailAndPassword(auth,"xolani@gmail.com","1234ten");
    return {
        type:"LOGIN"
    }
    
  }catch(error){
    console.log(error)
  }*/
    }
       
    }
    


    function onAuthStateChangePromise() {
        return new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(
                auth,(currentUser) => {
                    if (auth) {
                        resolve(auth);
                    } else {
                        resolve(null);
                    }
                    unsubscribe();
                },
                error => {
                    reject(error);
                }
            );
        });
    }

export const SendAuth=()=>{
    return (dispatch)=>{

        
    onAuthStateChangePromise()
    .then(currentUser => {
        
        if (currentUser.currentUser != null) {
            console.log('User is authenticated:', currentUser);
            return dispatch({
                type:"LOGIN",
                page:0,
                user:"active"
            })
           
        } else {
            console.log('User is not authenticated.');
            return dispatch({
                type:"LOGIN",
                page:2,
                user:null
            })
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });


    }
}






/*onAuthStateChanged(auth, (currentUser) =>{
 
let user =currentUser
onStateChange(user)
    
//console.log(currentUser)
})*/



export const Logout = () => {
return (dispatch)=>{
signOut(auth)

    return dispatch({
    type:"LOGOUT",
   
    })
}
 
};

export const PostTweet = () => {
  return (dispatch) => {};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.e };

    case "RANDOM_QUOTE":
      let num = Math.floor(Math.random() * 22);

      return { ...state, quote: Affirmations[num] };

      case 'PAGE':
        let page=2;
        if (state.user != null){
            page=action.page;
        }
        return{... state,page:page}
    case "LOGIN":
        return{...state,page:action.page, user:action.user}

    case "LOGIN_ERROR":
        return{...state,error:"EMAIL OR PASSWORD INCORRECT"}

    case "LOGOUT":
        return {...state, page:2}

    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
