import React, {Component} from 'react';
import {View, Toast} from 'native-base';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {HomeTabs} from '../homeTabs';
import UserInfo from '../../components/userInfo/userInfo';
import drawerStyle from './drawerStyle';
import AsyncStorage from '@react-native-community/async-storage';
import jwt from 'react-native-pure-jwt';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native';
import DrawerOne from '../../components/drawerItem/drawerItem';
const options = {
  mainRoutes: [
    {
      routeName: 'tasks',
      label: 'Tasks',
    },
    {
      routeName: 'events',
      label: 'Events',
    },
  ],
};

function DrawerContent(props) {
  return (
    <View {...props}>
      <UserInfo
        onPress={() => props.navigation.navigate('profile')}
        avatar={props.avatar.imageUri}
        name={props.isLogged.name}
        lastName={props.isLogged.lastName}
        username={props.isLogged.userName}
      />
      <View style={drawerStyle.separator} />
      <View>
        {options.mainRoutes.map(singleRoute => {
          return (
            <DrawerOne
              {...props}
              label={singleRoute.label}
              routeName={singleRoute.routeName}
            />
          );
        })}
      </View>
      <View style={drawerStyle.separator} />
      <View>
        {options.mainRoutes.map(singleRoute => {
          return (
            <DrawerOne
              {...props}
              label={singleRoute.label}
              routeName={singleRoute.routeName}
            />
          );
        })}
      </View>
      <View style={drawerStyle.separator} />
      <View>
        {options.mainRoutes.map(singleRoute => {
          return (
            <DrawerOne
              {...props}
              label={singleRoute.label}
              routeName={singleRoute.routeName}
            />
          );
        })}
      </View>
    </View>
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
        Toast.show({text: 'Session Expired'});
        this.props.navigation.navigate('login');
      }
    } catch (e) {
      Toast.show({text: 'Session Expired'});
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
