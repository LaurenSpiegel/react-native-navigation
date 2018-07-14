import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from'redux';
import reducers from './reducers';
import firebase from 'firebase';
import firebaseConfig from '../config/firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(firebaseConfig)
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello!!</Text>
                </View>
            </Provider>
        )
    }
}

export default App;