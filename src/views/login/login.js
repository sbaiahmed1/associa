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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, GlobalSheet} from '../../config';

const facebook = (
  <FontAwesome name={'facebook-f'} size={3 * GlobalSheet.units.vh} />
);
const google = <FontAwesome name={'google'} size={3 * GlobalSheet.units.vh} />;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 15 * GlobalSheet.units.vh,
    };
    this.setState = this.setState.bind(this);
  }
  componentDidMount(): void {
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
          />
          <TextInput
            onSubmitEditing={Keyboard.dismiss}
            style={loginStyle.textInputStyle}
            placeholder="********"
            secureTextEntry={true}
            returnKeyType={'send'}
          />
          <View style={loginStyle.loginMethods}>
            <TouchableOpacity style={loginStyle.facebook}>
              <Text style={loginStyle.textFacebook}>{facebook}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={loginStyle.signInButton}
              onPress={_ => this.props.navigation.navigate('home')}>
              <LinearGradient
                colors={[Colors.linearButton1, Colors.linearButton2]}
                start={{x: 0, y: 0.0}}
                end={{x: 1, y: 1}}
                style={loginStyle.gradientStyle}>
                <Text style={loginStyle.textInsideGradient}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={loginStyle.facebook}>
              <Text style={loginStyle.textFacebook}>{google}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{top: 30 * GlobalSheet.units.vh, alignSelf: 'center'}}>
            <Text>Forgot Your Password?</Text>
          </TouchableOpacity>
        </View>
        {/**************************************************************/}
      </View>
    );
  }
}

export default Login;
