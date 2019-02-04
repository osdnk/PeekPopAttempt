'use strict';

import React from 'react'
import {
  NativeModules,
  requireNativeComponent,
  findNodeHandle
} from 'react-native';

import PropTypes from 'prop-types'

const  { RNPreviewViewManager } = NativeModules;


export default class Preview extends React.Component {
  propTypes: {
    onPop: PropTypes.func,
    onPeek: PropTypes.func,
  }

  activate({sourceView}) {
    RNPreviewViewManager.setSourceViewAndActivate(sourceView, findNodeHandle(this.previewView.current));
  }

  previewView = React.createRef()
  render() {
    return (
      <RNPreviewView ref={this.previewView} onPop={this.props.onPop} onPeek={this.props.onPeek} style={{position: 'absolute'}}>
        {React.Children.map(this.props.children,React.cloneElement)}
      </RNPreviewView>
    );
  }
};

const RNPreviewView = requireNativeComponent('RNPreviewView', Preview);
