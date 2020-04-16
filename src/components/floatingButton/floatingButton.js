import React, {Component} from 'react';
import FloatingActionButton from 'react-native-floating-action-button';
import {Colors} from '../../config';

class FloatingButton extends Component {
  render() {
    return (
      <FloatingActionButton
        iconName="plus"
        iconType="FontAwesome"
        iconColor={Colors.textColor}
        rippleColor={Colors.textColor}
        onPress={this.props.press}
      />
    );
  }
}

export default FloatingButton;
