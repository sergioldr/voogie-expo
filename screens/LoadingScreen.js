import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function(user) {
        //console.log('AUTH STATE CHANGED CALLED ')
        if (user) {
          this.props.navigation.navigate('Dashboard');
        } else {
          this.props.navigation.navigate('Dashboard');
        }
      }.bind(this)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});