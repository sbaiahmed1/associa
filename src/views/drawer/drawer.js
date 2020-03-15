import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Profile} from '../profile';
import {HomeTabs} from '../homeTabs';
import {MembershipStatus} from '../membershipStatus';
import {Text} from 'react-native';
import SideMenu from 'react-native-side-menu';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={({focused, color}) => (
          <Text style={{color}}>
            {focused ? 'Focused text' : 'Unfocused text'}
          </Text>
        )}
        onPress={() => alert('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}
const DrawerNav = createDrawerNavigator();
// Important NOTE : SET THE DRAWER TO CONTAIN BOTTOM  TAB
export default class Drawer extends Component {
  render() {
    return (
      <DrawerNav.Navigator
        drawerStyle={{
          width: 240,
        }}
        initialRouteName="home"
        drawerContent={props => CustomDrawerContent(props)}>
        <DrawerNav.Screen name="home" component={HomeTabs} />
      </DrawerNav.Navigator>
    );
  }
}
