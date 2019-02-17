import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, Redirect, Switch} from "react-router-dom";
import Auth from "./Auth"
import Dashboard from "./Dashboard"
import reducers from './reducer'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => {}
  )
);

function render() {
  ReactDom.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/auth/' component={Auth}></Route>
          <Route path='/dashboard/' component={Dashboard}></Route>
          <Redirect to='/auth/'></Redirect>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
}
render();
store.subscribe(render);
