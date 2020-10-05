import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
import Logout from './src/components/Logout';
import LoginForm from './src/components/LoginForm';

import config from './src/config'

class App extends Component {
  state = {
    loggedIn: false
  }
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config.firebaseConfig)
    }
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loggedIn: !!user })
    })
  }
  render() {
    return (
      <View>
        <Header title="Product Management" />
    { this.state.loggedIn ? <Logout /> : <LoginForm /> }
      </View>
    )
  }
}

export default App;