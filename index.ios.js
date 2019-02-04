import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


import Peekable from './Peekable'


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
        <Peekable
          renderPreview={this._renderPreviewOne}
          onPop={this._handlePopOne}>
          <View style={styles.button}>
            <Text>Tap me to peek!</Text>
          </View>
        </Peekable>
        <Peekable
          renderPreview={this._renderPreviewTwo}
          onPop={this._handlePopTwo}>
          <View style={styles.button}>
            <Text>Or maybe tap me to peek!?</Text>
          </View>
        </Peekable>
        <Peekable
          renderPreview={this._renderPreviewTwo}
          onPress={() => alert('XXX')}
          onPop={this._handlePopTwo}>
          <View style={styles.button}>
            <Text>Or maybe tap me to peek!?</Text>
          </View>
        </Peekable>
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
