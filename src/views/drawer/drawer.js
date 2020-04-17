import React, {Component} from 'react';
import {View, Text, Toast, Root} from 'native-base';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Profile} from '../profile';
import {HomeTabs} from '../homeTabs';
import {MembershipStatus} from '../membershipStatus';
import UserInfo from '../../components/userInfo/userInfo';
import colors from '../../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity, ToastAndroid} from 'react-native';
import {Colors} from '../../config';
import drawerStyle from './drawerStyle';
import AsyncStorage from '@react-native-community/async-storage';
import jwt from 'react-native-pure-jwt';
import {compose} from 'redux';
import {connect} from 'react-redux';

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <LinearGradient
        colors={['#FFFFFF', Colors.backgroundSecond]}
        start={{x: 0.5, y: 0}}>
        <View>
          <UserInfo
            onPress={() => props.navigation.navigate('profile')}
            avatar={props.avatar.imageUri}
            name={props.isLogged.name}
            lastName={'Sbai'}
          />
          <View style={drawerStyle.separator} />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('tasks')}
            style={drawerStyle.ButtonStyles}>
            <Text style={drawerStyle.textInsideBtn}>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('events')}
            style={drawerStyle.ButtonStyles}>
            <Text style={drawerStyle.textInsideBtn}>Events</Text>
          </TouchableOpacity>
          <View style={drawerStyle.separator} />
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate('events')}
            style={drawerStyle.ButtonStyles}>
            <Text style={drawerStyle.textInsideBtn}>Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('events')}
            style={drawerStyle.ButtonStyles}>
            <Text style={drawerStyle.textInsideBtn}>Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('events')}
            style={drawerStyle.ButtonStyles}>
            <Text style={drawerStyle.textInsideBtn}>Payments</Text>
          </TouchableOpacity> */}
          <View style={drawerStyle.separator} />
          <TouchableOpacity
            style={drawerStyle.ButtonStyles}
            onPress={() => removeToken(props)}>
            <Text style={drawerStyle.textInsideBtn}>Logout</Text>
          </TouchableOpacity>
          <View style={drawerStyle.separator} />
        </View>
      </LinearGradient>
    </DrawerContentScrollView>
  );
}
const removeToken = async props => {
  try {
    await AsyncStorage.removeItem('@token');
    console.log('logged Out');
    props.navigation.navigate('login');
  } catch (e) {
    console.log(e);
  }
};
const DrawerNav = createDrawerNavigator();
// Important NOTE : SET THE DRAWER TO CONTAIN BOTTOM  TAB
class Drawer extends Component {
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value !== null) {
        jwt
          .decode(value, 'secret')
          .then(res => {
            Toast.show({
              text: 'Welcome Back!',
              textStyle: {textAlign: 'center'},
              type: 'success',
            });
          })
          .catch(err => {
            console.log(err);
            Toast.show({
              text: 'Session Expired!',
              textStyle: {textAlign: 'center'},
              type: 'warning',
            });
            this.props.navigation.navigate('login');
          });
      } else {
        Toast.show({text: 'Session fucked'});
        this.props.navigation.navigate('login');
      }
    } catch (e) {
      Toast.show({text: 'Session fucked'});
      console.log(e);
      this.props.navigation.navigate('login');
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <DrawerNav.Navigator
        // eslint-disable-next-line react-native/no-inline-styles
        drawerStyle={{
          width: 320,
        }}
        drawerType={'slide'}
        initialRouteName="home"
        drawerContent={() => <DrawerContent {...this.props} />}>
        <DrawerNav.Screen name="home" component={HomeTabs} />
      </DrawerNav.Navigator>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    isLogged: state.login,
    avatar: state.avatar,
  };
};
export default compose(connect(mapStateToProps))(Drawer);
