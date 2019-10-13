import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./redux/reducers.js";
import "./myStyles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Session from "./components/views/Session";
import SessionsContainer from "./components/containers/SessionsContainer";

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware))

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={SessionsContainer}/>
                        <Route path='/sessions/:sessionId' component={Session}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));