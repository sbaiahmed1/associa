import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login} from '../login';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
import {Colors, GlobalSheet} from '../../config';
import {FloatingButton} from '../../components/floatingButton';
import Profile from '../profile/profile';
import {Drawer} from '../drawer';

const Tabs = createBottomTabNavigator();
class HomeTabs extends Component {
  render() {
    return (
      <Tabs.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.name) {
              case 'profile':
                iconName = focused ? 'user' : 'user';
                break;
              case 'polls':
                iconName = focused ? 'poll' : 'poll';
                break;
              case 'tasks':
                iconName = focused ? 'tasks' : 'tasks';
                break;
              case 'events':
                iconName = focused ? 'calendar' : 'calendar';
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.textColor,
          inactiveTintColor: 'gray',
        }}>
        <Tabs.Screen name="events" component={Login} />
        <Tabs.Screen name="tasks" component={Login} />
        <Tabs.Screen
          name="add"
          options={{
            tabBarIcon: ({tintColor}) => (
              <FloatingButton
                press={() => this.props.navigation.navigate('add')}>
                <TouchableOpacity />
              </FloatingButton>
            ),
          }}
          component={Login}
        />
        <Tabs.Screen name="polls" component={Drawer} />
        <Tabs.Screen name="profile" component={Profile} />
      </Tabs.Navigator>
    );
  }
}
export default HomeTabs;
