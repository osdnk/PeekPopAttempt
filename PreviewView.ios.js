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

var RN_PREVIEW_VIEW_REF = 'native-preview-view-ref';

var PreviewView = createClass({
  propTypes: {
    onPop: PropTypes.func,
  },

  activate({sourceView}) {
    RNPreviewViewManager.setSourceView(sourceView);
    RNPreviewViewManager.activate(this.getRootNodeHandle());
  },

  getRootNodeHandle() {
    return findNodeHandle(this.refs[RN_PREVIEW_VIEW_REF]);
  },

  render() {
    return (
      <RNPreviewView ref={RN_PREVIEW_VIEW_REF} onPop={this.props.onPop} style={{position: 'absolute'}}>
        {React.Children.map(this.props.children,React.cloneElement)}
      </RNPreviewView>
    );
  },
});

var RNPreviewView = requireNativeComponent('RNPreviewView', PreviewView);

module.exports = PreviewView;
