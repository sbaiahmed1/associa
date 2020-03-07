import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login} from '../login';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
import {Colors, GlobalSheet} from '../../config';
import {FloatingButton} from '../../components/floatingButton';
import Profile from '../profile/profile';
import {Drawer} from '../drawer';
import Polls from '../polls/polls';
import Tasks from '../tasks/tasks';
import Events from '../events/events';
import AddActivity from '../addActivity/addActivity';

const Tabs = createBottomTabNavigator();
class HomeTabs extends Component {
  render() {
    return (
      <Tabs.Navigator
        initialRouteName={'add'}
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
        <Tabs.Screen name="events" component={Events} />
        <Tabs.Screen name="tasks" component={Tasks} />
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
          component={AddActivity}
        />
        <Tabs.Screen name="polls" component={Polls} />
        <Tabs.Screen name="profile" component={Profile} />
      </Tabs.Navigator>
    );
  }
}
export default HomeTabs;
