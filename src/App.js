import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import firebaseConfig from '../config/firebase';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(firebaseConfig)
    }
    render() {
        // empty object is where you could send some initial state
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;