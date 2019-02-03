/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  NativeModules,
  Image,
} from 'react-native';

import PropTypes from 'prop-types'
import createClass from 'create-react-class'

var Peekable = require('./Peekable');


class PeekPopAttempt extends React.Component {
  _renderPreviewOne() {
    return (
      <Image source={{uri: 'https://osdnk.github.io/static/media/picture.b54004e8.jpg'}} style={{width: 400, height: 400}} />
    )
  }

  _handlePopOne() {
    alert('pop first one!');
  }

  _renderPreviewTwo = () => {
    return (
      <View style={{width: 250, height: 250, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 16}}>Peeked!</Text>
      </View>
    )
  }

  _handlePopTwo() {
    alert('pop secondsd    one!');
  }
  render() {
    return (
      <View style={styles.container}>
        <Peekable.View
          renderPreview={this._renderPreviewOne}
          onPop={this._handlePopOne}>
          <View style={styles.button}>
            <Text>Tap me to peek!</Text>
          </View>
        </Peekable.View>
        <Peekable.View
          renderPreview={this._renderPreviewTwo}
          onPop={this._handlePopTwo}>
          <View style={styles.button}>
            <Text>Or maybe tap me to peek!?</Text>
          </View>
        </Peekable.View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 3,
  }
});

AppRegistry.registerComponent('example', () => PeekPopAttempt);
