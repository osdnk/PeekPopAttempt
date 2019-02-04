import React from 'react'

import {
  View,
  TouchableWithoutFeedback,
  findNodeHandle,
} from 'react-native';

import Preview from './Preview'

import PropTypes from 'prop-types'

export default class Peekable extends React.Component {
  static propTypes = {
    renderPreview: PropTypes.func,
    onPop: PropTypes.func,
    onPeek: PropTypes.func,
    ...View.propTypes,
  }
  previewRef = React.createRef();
  previewContainer = React.createRef();
  render() {
    const preview = (
      <Preview ref={this.previewRef} onPop={this.props.onPop} onPeek={this.onPeek}>
        {this.props.renderPreview()}
      </Preview>
    );

    return (
      <TouchableWithoutFeedback onPressIn={this.handlePressIn} onPress={this.onPress}>
        <View onPop = {this.onPop} ref={(view) => { this._root = view; }}>
          {this.props.children}
          <View ref={this.previewContainer} style={{ width: 0, height: 0, overflow: 'hidden' }}>
           {preview}
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  onPress = () => {
    if (!this.invalidatedPress) {
      this.props.onPress && this.props.onPress()
    }
  }

  onPop = () => {
    this.props.onPop && this.Props.onPop();
  }

  onPeek = () => {
    this.invalidatedPress = true;
    this.props.onPeek && this.Props.onPeek();
  }

  handlePressIn = () => {
    this.invalidatedPress = false;
    this.previewRef.current.activate({
      sourceView: findNodeHandle(this._root)
    });
  }
}
