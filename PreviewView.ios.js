'use strict';

import React from 'react'
import createClass from 'create-react-class'
import {
  View,
  StyleSheet,
  NativeModules,
  requireNativeComponent,
  findNodeHandle
} from 'react-native';

import PropTypes from 'prop-types'

var { RNPreviewViewManager } = NativeModules;


class PreviewView extends React.Component {
  propTypes: {
    onPop: PropTypes.func,
  }

  activate({sourceView}) {
    RNPreviewViewManager.setSourceView(sourceView);
    RNPreviewViewManager.activate(this.getRootNodeHandle());
  }

  getRootNodeHandle() {
    return findNodeHandle(this.previewView.current);
  }

  previewView = React.createRef()
  render() {
    return (
      <RNPreviewView ref={this.previewView} onPop={this.props.onPop} style={{position: 'absolute'}}>
        {React.Children.map(this.props.children,React.cloneElement)}
      </RNPreviewView>
    );
  }
};

var RNPreviewView = requireNativeComponent('RNPreviewView', PreviewView);

module.exports = PreviewView;
