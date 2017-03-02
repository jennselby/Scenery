import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SceneryNavigator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          TODO: Fill in this component.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('SceneryNavigator', () => SceneryNavigator);
