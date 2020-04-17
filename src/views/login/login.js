import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import loginStyle from './loginStyle';
import {connect} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, GlobalSheet} from '../../config';
import axios from 'axios';
import {baseUrl} from '../../config/const';
import {Toast} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {WaveIndicator} from 'react-native-indicators';
import store from '../../redux/store/store';
import {loggedIn} from '../../redux/actions/login';

const facebook = (
  <FontAwesome5 name={'facebook-f'} size={3 * GlobalSheet.units.vh} />
);
const google = <FontAwesome5 name={'google'} size={3 * GlobalSheet.units.vh} />;

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
            name: response.data.userData.name,
            lastName: response.data.userData.lastName,
            type: response.data.userData.type,
            role: response.data.userData.role,
            imageName: response.data.userData.imageName,
            email: response.data.userData.email,
            userName: response.data.userData.username,
          },
        });
        console.log(response.data);
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
      position: -5 * GlobalSheet.units.vh,
    });
  };
  keyboardDismissed = () => {
    this.setState({
      position: 70,
    });
  };
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {/************************************************************************/}
        <View style={{marginTop: this.state.position}}>
          <Text style={loginStyle.titleStyle}>AssociaGest</Text>
          <TextInput
            style={loginStyle.textInputStyle}
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
              style={loginStyle.textInputStyle}
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
                top: 10.5 * GlobalSheet.units.vh,
                left: -7 * GlobalSheet.units.vw,
              }}
              name={this.state.passwordHidden ? 'eye' : 'eye-slash'}
              size={2.5 * GlobalSheet.units.vh}
            />
          </View>
          <View style={loginStyle.loginMethods}>
            <TouchableOpacity
              style={loginStyle.signInButton}
              onPress={_ => this.login()}
              disabled={this.state.password === '' ? true : false}>
              <LinearGradient
                colors={
                  this.state.password === ''
                    ? [Colors.grey4, Colors.grey5]
                    : [Colors.linearButton1, Colors.linearButton2]
                }
                start={{x: 0, y: 0.0}}
                end={{x: 1, y: 1}}
                style={loginStyle.gradientStyle}>
                <Text style={loginStyle.textInsideGradient}>Sign In</Text>
              </LinearGradient>
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
