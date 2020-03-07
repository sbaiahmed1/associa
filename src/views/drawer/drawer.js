import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Profile} from '../profile';
import {HomeTabs} from '../homeTabs';

const DrawerNav = createDrawerNavigator();
// Important NOTE : SET THE DRAWER TO CONTAIN BOTTOM  TAB
export default class Drawer extends Component {
  render() {
    return (
      <DrawerNav.Navigator
        drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 240,
        }}
        initialRouteName="home">
        <DrawerNav.Screen name="home" component={HomeTabs} />
        <DrawerNav.Screen name="settings" component={HomeTabs} />
        <DrawerNav.Screen name="payments" component={Profile} />
        <DrawerNav.Screen name="help" component={Profile} />
      </DrawerNav.Navigator>
    );
  }
}
