import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Profile} from '../profile';
import {HomeTabs} from '../homeTabs';

const DrawerNav = createDrawerNavigator();
// Important NOTE : SET THE DRAWER TO CONTAIN BOTTOM  TAB
export default class Drawer extends Component {
  render() {
    return (
      <DrawerNav.Navigator initialRouteName="homeDrawer">
        <DrawerNav.Screen name="homeDrawer" component={HomeTabs} />
        <DrawerNav.Screen name="Notifications" component={Profile} />
      </DrawerNav.Navigator>
    );
  }
}
