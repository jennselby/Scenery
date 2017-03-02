import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

// Code based on example at https://facebook.github.io/react-native/docs/navigator.html

export default class SceneryNavigator extends Component {
  render() {
    const routes = [
        {
         text: 'You are in the woods, and you hear a river nearby, out of sight.',
         nextText: 'Go to river',
         nextScene: 1,
        },
        {
         text: 'You are standing next to a river.',
         nextText: 'Swim',
         nextScene: 2,
        },
        {
         text: 'You are swimming!',
         nextText: '',
         nextScene: undefined,
        },

    ];
    return (
        <Navigator
            style={styles.navigator}
            initialRoute={routes[0]}
            renderScene={(route, navigator) => 
                <Text style={styles.mainText}>{route.text}</Text>
            }
            navigationBar={
                <Navigator.NavigationBar
                    style={styles.navBar}
                    routeMapper={{
                        LeftButton: (route, navigator, index, navState) => {
                            if (index === 0) {
                                return null;
                            } else {
                                return (
                                    <TouchableHighlight onPress={() => navigator.pop()}>
                                        <Text style={styles.menuText}>Back</Text>
                                    </TouchableHighlight>
                                );
                            }
                        },
                        RightButton: (route, navigator, index, navState) => {
                            if (route.nextScene === undefined) {
                                return null;
                            } else {
                                return (
                                    <TouchableHighlight onPress={() => navigator.push(routes[route.nextScene])}>
                                        <Text style={styles.menuText}>{route.nextText}</Text>
                                    </TouchableHighlight>
                                );
                            }
                        },
                        Title:  (route, navigator, index, navState) => {
                            return null;
                        },
                    }}
                />
            }
        />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    paddingTop: 100,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#b4e6e8',
  },
  mainText: {
    fontSize: 36,
    textAlign: 'center',
  },
  menuText: {
    fontSize: 24,
    padding: 10,
  },
  navBar: {
    backgroundColor: '#117377',
  },
});

AppRegistry.registerComponent('SceneryNavigator', () => SceneryNavigator);
