import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Profile} from '../profile';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const DrawerNav = createDrawerNavigator();
// Important NOTE : SET THE DRAWER TO CONTAIN BOTTOM  TAB
export default class Drawer extends Component {
  render() {
    return (
      <DrawerNav.Navigator initialRouteName="Home">
        <DrawerNav.Screen name="homeView" component={HomeScreen} />
        <DrawerNav.Screen name="Notifications" component={Profile} />
      </DrawerNav.Navigator>
    );
  }
}
