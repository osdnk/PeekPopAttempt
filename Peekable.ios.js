import React from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  NativeModules,
  findNodeHandle
} from 'react-native';

import createClass from 'create-react-class'

import PropTypes from 'prop-types'


var Peekable = {};

var PREVIEW_REF = 'peekable-preview';

Peekable.Preview = require('./PreviewView');

class PeekableView extends React.Component {
  static propTypes = {
    renderPreview: PropTypes.func,
    onPop: PropTypes.func,
    ...View.propTypes,
  }
  previewRef = React.createRef();
  render() {
    let preview = (
      <Peekable.Preview ref={this.previewRef} onPop={this.props.onPop}>
        {this.props.renderPreview()}
      </Peekable.Preview>
    );

    return (
      <TouchableWithoutFeedback onPressIn={this._handlePressIn}>
        <View {...this.props} ref={(view) => { this._root = view; }}>
          {this.props.children}
          <View style={{ width: 0, height: 0, overflow: 'hidden' }}>
           {preview}
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  _handlePressIn = () => {
    this.previewRef.current.activate({
      sourceView: findNodeHandle(this._root)
    });
  }
}
Peekable.View = PeekableView

module.exports = Peekable;
