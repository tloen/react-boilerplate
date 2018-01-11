import React, { Component } from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import practiceApp from "./redux/reducer";
import MainContainer from "./components/containers/MainContainer";
import { MuiThemeProvider } from "material-ui";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

let store = createStore(
  practiceApp,
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Eric's React Boilerplate</h1>
              </header>
              <MainContainer />
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
