import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';

class ForgotLogin extends Component {
  static navigationOptions = {
    headerStyle: {
      elevation: 0,
    },
  };
  render() {
    return (
      <View>
        <Text>Forgot login</Text>
      </View>
    );
  }
}
export default ForgotLogin;
