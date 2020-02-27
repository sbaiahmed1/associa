import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login} from '../login';

const Tabs = createBottomTabNavigator();
class HomeTabs extends Component {
  render() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Login} />
        <Tabs.Screen name="Settings" component={Login} />
        <Tabs.Screen name="view" options={{}} component={Login} />
      </Tabs.Navigator>
    );
  }
}
export default HomeTabs;
