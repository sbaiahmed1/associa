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
  Platform,
} from 'react-native';
import loginStyle from './loginStyle';
import {connect} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors, GlobalSheet} from '../../config';
import axios from 'axios';
import {baseUrl} from '../../config/const';
import {Toast} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {WaveIndicator} from 'react-native-indicators';
import {loggedIn} from '../../redux/actions/login';
const logo = require('../../assets/logo.png');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 15 * GlobalSheet.units.vh,
      email: '',
      password: '',
      token: null,
      isLoading: false,
      passwordHidden: true,
      data: {
        id: '',
        name: '',
        last: '',
        username: '',
        email: '',
        type: '',
        role: '',
        imageName: '',
      },
    };
    this.setState = this.setState.bind(this);
  }
  storeToken = async () => {
    try {
      await AsyncStorage.setItem('@token', this.state.token);
      console.log(true);
    } catch (e) {
      console.log(e);
    }
  };
  login = async () => {
    var body = {
      email: this.state.email,
      password: this.state.password,
    };
    this.setState({isLoading: true});
    // login Validation :
    axios
      .post(baseUrl + 'login', body, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        this.setState({
          token: response.data.token,
          data: {
            id: response.data.userData.id,
            name: response.data.userData.name,
            lastName: response.data.userData.lastName,
            type: response.data.userData.type,
            role: response.data.userData.role,
            imageName: response.data.userData.imageName,
            email: response.data.userData.email,
            userName: response.data.userData.username,
          },
        });
        console.log(this.state.data);
      })
      .then(() => {
        // store.dispatch(loggedIn(this.state.data));
        this.props.isLogged(this.state.data);
      })
      .then(() => {
        this.storeToken();
      })
      .then(() => {
        this.setState({isLoading: false});
      })
      .then(() => {
        this.props.navigation.navigate('home');
      })
      .then(() => {
        this.setState({
          email: '',
          password: '',
        });
        this.email.clear();
        this.password.clear();
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        if (error) {
          Toast.show({
            text: 'Error, Please try again',
          });
        }
        this.setState({isLoading: false});
      });
  };
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
      position:
        Platform.OS === 'ios'
          ? GlobalSheet.units.vh
          : -9 * GlobalSheet.units.vh,
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
            <Image source={logo} style={loginStyle.titleStyle} />
            <TextInput
              style={loginStyle.LoginInputStyle}
              placeholder="Example@email.com"
              keyboardType={'email-address'}
              onChangeText={text => this.setState({email: text})}
              ref={input => {
                this.email = input;
              }}
            />
            <View>
              <TextInput
                onSubmitEditing={() => this.login}
                style={loginStyle.passwordInputStyle}
                placeholder="********"
                secureTextEntry={this.state.passwordHidden}
                returnKeyType={'send'}
                onChangeText={text => this.setState({password: text})}
                ref={input => {
                  this.password = input;
                }}
              />
              <FontAwesome5
                onPress={() =>
                  this.setState({passwordHidden: !this.state.passwordHidden})
                }
                style={{
                  alignSelf: 'flex-end',
                  top:
                    Platform.OS === 'ios'
                      ? 14 * GlobalSheet.units.vh
                      : 12.5 * GlobalSheet.units.vh,
                  left: -7 * GlobalSheet.units.vw,
                }}
                name={this.state.passwordHidden ? 'eye' : 'eye-slash'}
                size={2.5 * GlobalSheet.units.vh}
              />
            </View>
            <View style={loginStyle.loginMethods}>
              <TouchableOpacity
                style={[
                  loginStyle.signInButton,
                  this.state.password === ''
                    ? {backgroundColor: Colors.lightButtonColor}
                    : {backgroundColor: Colors.buttonColor},
                ]}
                onPress={_ => this.login()}
                disabled={this.state.password === '' ? true : false}>
                <Text style={loginStyle.textInsideGradient}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={{top: '70%'}}>
              <WaveIndicator animating={this.state.isLoading} />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('forgotLogin')}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{top: 30 * GlobalSheet.units.vh, alignSelf: 'center'}}>
              <Text>Forgot Your Password?</Text>
            </TouchableOpacity>
          </View>
          {/**************************************************************/}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = state => {
  return {loginDetails: state.loginDetails};
};
// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = dispatch => {
  return {
    isLogged: state => {
      dispatch(loggedIn(state));
    },
  };
};
export default connect(
  null,
  mapDispatchToProps,
)(Login);
