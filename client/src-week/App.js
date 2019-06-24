import React from 'react';
import "./static/css/style.min.css"
import Router from "./router/index"
import {Provider} from "react-redux"
import store from "./store/index"
function App() {
  return (
    <div className="App" id="app">
       <Provider store ={store}>
         <Router/>
       </Provider>
    
    </div>
  )

}

export default App;
