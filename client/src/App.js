import React from 'react';
import Index from "./router/index"
import "./static/css/style.min.css"
import {Provider} from 'react-redux'
import store from "./stort/index"

function App() {
  return (
    <div className="App" id="app">
        <Provider store={store}>
            <Index/>
        </Provider>
    </div>
  )

}

export default App;
