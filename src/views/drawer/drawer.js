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
import {StyleSheet, ScrollView} from 'react-native';
import DrawerOne from '../../components/drawerItem/drawerItem';
import {GlobalSheet} from '../../config';
import MembershipContainer from '../membershipContainer/memberShipContainer';
const options = {
  mainRoutes: [
    {
      routeName: 'mainHome',
      label: 'Home',
      iconName: 'home',
    },
    {
      routeName: 'tasks',
      label: 'Tasks',
      iconName: 'tasks',
    },
    {
      routeName: 'events',
      label: 'Events',
      iconName: 'calendar-day',
    },
    {
      routeName: 'polls',
      label: 'Polls',
      iconName: 'poll',
    },
  ],
  paymentAndStuff: [
    {
      routeName: 'payments',
      label: 'Payments and Subscription',
      iconName: 'money-check',
    },
    {
      routeName: 'help',
      label: 'Help And FAQ',
      iconName: 'info-circle',
    },
  ],
};

function DrawerContent(props) {
  return (
    <ScrollView style={styles.drawerContent} {...props}>
      <View>
        <View>
          <UserInfo
            onPress={() => props.navigation.navigate('profile')}
            avatar={props.isLogged.imageName}
            name={props.isLogged.name}
            lastName={props.isLogged.lastName}
            username={props.isLogged.userName}
          />
        </View>
        <View style={drawerStyle.separator} />
        <View>
          {options.mainRoutes.map(singleRoute => {
            return (
              <DrawerOne
                {...props}
                label={singleRoute.label}
                routeName={singleRoute.routeName}
                iconName={singleRoute.iconName}
              />
            );
          })}
        </View>
        <View style={drawerStyle.separator} />
        <View>
          {options.paymentAndStuff.map(singleRoute => {
            return (
              <DrawerOne
                {...props}
                label={singleRoute.label}
                routeName={singleRoute.routeName}
                iconName={singleRoute.iconName}
              />
            );
          })}
        </View>
        <View style={drawerStyle.separator} />
        <DrawerOne
          {...props}
          press={removeToken}
          iconName={'sign-out-alt'}
          label={'Logout'}
        />
      </View>
    </ScrollView>
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
    console.log(this.props);
    return (
      <DrawerNav.Navigator
        // eslint-disable-next-line react-native/no-inline-styles
        drawerStyle={{
          width: 80 * GlobalSheet.units.vw,
        }}
        drawerType={'slide'}
        initialRouteName="home"
        drawerContent={() => <DrawerContent {...this.props} />}>
        <DrawerNav.Screen name="home" component={HomeTabs} />
        <DrawerNav.Screen name="payments" component={MembershipContainer} />
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

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default compose(connect(mapStateToProps))(Drawer);
