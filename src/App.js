import React from "react"
import Router from "./Router"
import "./components/@vuexy/rippleButton/RippleButton"

import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"
import {store} from "./redux/storeConfig/store"
import {setCurrentUser} from "./redux/actions/auth/loginActions";
import {setAuthToken} from "./utility/setAuthToken"
import {logout} from "./redux/actions/auth/loginActions"
import jwt_decode from "jwt-decode"

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken)
  const decode = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decode.user))
   let currentTime = Date.now() / 100;
   console.log(decode);
   if(decode.exp > currentTime){
     
    //  store.dispatch(clearCurrentProfile());
     store.dispatch(logout());
     
     window.location.href = '/'
   }
}

const App = props => {
  return <Router />
}

export default App
