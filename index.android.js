import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import SceneryNavigator from './sceneryNavigator.js'

export default class Scenery extends Component {
  render() {
    return (
      <SceneryNavigator />
    );
  }
}

AppRegistry.registerComponent('Scenery', () => Scenery);
