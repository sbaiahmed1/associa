import React from 'react';
import {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors, GlobalSheet} from '../../config';
import {FloatingButton} from '../../components/floatingButton';
import {Profile, Tasks, Polls, Events} from '../../views';
import AddActivity from '../addActivity/addActivity';
import PushController from '../../config/notificationHandler';
import {Root} from 'native-base';

const Tabs = createBottomTabNavigator();
class HomeTabs extends Component {
  render() {
    return (
      <Root>
        <PushController nav={this.props.navigation} />
        <Tabs.Navigator
          initialRouteName={'mainHome'}
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
                  iconName = focused ? 'calendar-day' : 'calendar-day';
                  break;
                case 'mainHome':
                  iconName = focused ? 'home' : 'home';
                  break;
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
          <Tabs.Screen name="mainHome" component={AddActivity} />
          <Tabs.Screen name="polls" component={Polls} />
          <Tabs.Screen name="profile" component={Profile} />
        </Tabs.Navigator>
      </Root>
    );
  }
}
export default HomeTabs;
