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

var Peekable = {};

var PREVIEW_REF = 'peekable-preview';

Peekable.Preview = require('./PreviewView');

Peekable.View = React.createClass({
  propTypes: {
    renderPreview: PropTypes.func,
    onPop: PropTypes.func,
    ...View.propTypes,
  },

  render() {
    let preview = (
      <Peekable.Preview ref={PREVIEW_REF}>
        <View style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
          {this.props.renderPreview()}
        </View>
      </Peekable.Preview>
    );

    return (
      <TouchableWithoutFeedback onPressIn={this._handlePressIn}>
        <View {...this.props} ref={(view) => { this._root = view; }}>
          {this.props.children}
          {preview}
        </View>
      </TouchableWithoutFeedback>
    )
  },

  _handlePressIn() {
    this.refs[PREVIEW_REF].activate();
  },
});

module.exports = Peekable;
