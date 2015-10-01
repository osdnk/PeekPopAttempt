/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PropTypes,
  TouchableWithoutFeedback,
  NativeModules,
  Image,
} = React;
var Peekable = require('./Peekable');

var PeekPopAttempt = React.createClass({
  render: function() {
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
  },

  _renderPreviewOne() {
    return (
      <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 400, height: 400}} />
    )
  },

  _handlePopOne() {
    alert('pop first one!');
  },

  _renderPreviewTwo() {
    return (
      <View style={{width: 250, height: 250, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 16}}>Peeked!</Text>
      </View>
    )
  },

  _handlePopTwo() {
    alert('pop second one!');
  }
});

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

AppRegistry.registerComponent('PeekPopAttempt', () => PeekPopAttempt);
