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
      <Peekable.Preview ref={PREVIEW_REF} onPop={this.props.onPop}>
        {this.props.renderPreview()}
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
    this.refs[PREVIEW_REF].activate({
      sourceView: React.findNodeHandle(this._root)
    });
  },
});

module.exports = Peekable;
