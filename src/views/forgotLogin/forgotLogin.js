import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors, GlobalSheet} from '../../config';
import axios from 'axios';
import {baseUrl} from '../../config/const';
import {Toast} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {WaveIndicator} from 'react-native-indicators';
import forgotLoginStyle from './forgotLoginStyle';

class ForgotLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 15 * GlobalSheet.units.vh,
      email: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDismissed,
    );
  }

  keyboardDidShow = () => {
    this.setState({
      position: 2 * GlobalSheet.units.vh,
    });
  };
  keyboardDismissed = () => {
    this.setState({
      position: 15 * GlobalSheet.units.vh,
    });
  };
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{flex: 1}}>
          {/************************************************************************/}
          <View style={{marginTop: this.state.position}}>
            <Text style={forgotLoginStyle.title}>Password Recovery</Text>
            <Text style={forgotLoginStyle.subtitle}>
              We’ll help you create a new password
            </Text>
            <TextInput
              style={forgotLoginStyle.textInputStyle}
              placeholder="Example@email.com"
              keyboardType={'email-address'}
              onChangeText={text => this.setState({email: text})}
              ref={input => {
                this.email = input;
              }}
            />
            <View style={forgotLoginStyle.loginMethods}>
              <TouchableOpacity
                style={[
                  forgotLoginStyle.signInButton,
                  this.state.email === ''
                    ? {backgroundColor: Colors.lightButtonColor}
                    : {backgroundColor: Colors.buttonColor},
                ]}
                onPress={_ => this.login()}
                disabled={this.state.email === '' ? true : false}>
                <Text style={{color: Colors.whiteTextColor}}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={{top: '70%'}}>
              <WaveIndicator animating={this.state.isLoading} />
            </View>
          </View>
          {/**************************************************************/}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ForgotLogin;
