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
} = React;
var Peekable = require('./Peekable');

var PeekPopAttempt = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Peekable.View
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          renderPreview={this._renderPreviewOne}
          onPop={this._handlePopOne}>
          <Text>Tap me to peek!</Text>
        </Peekable.View>

        <Peekable.View
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          renderPreview={this._renderPreviewTwo}
          onPop={this._handlePopTwo}>
          <Text>Or maybe tap me to peek!?</Text>
        </Peekable.View>
      </View>
    );
  },

  _renderPreviewOne() {
    return (
      <View style={{width: 250, height: 250, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 16}}>Peeked!</Text>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PeekPopAttempt', () => PeekPopAttempt);
