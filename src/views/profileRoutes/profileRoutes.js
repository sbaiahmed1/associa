import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import profile from '../profile/profile';
import PastPolls from '../pastPolls/pastPolls';
import PastEvents from '../pastEvents/pastEvents';
import PastTasks from '../pastTasks/pastTasks';
const Stack = createStackNavigator();

export default function ProfileRoutes(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'profile'}
        component={profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'pastEvents'}
        component={PastEvents}
        options={{
          headerStyle: {elevation: 0, backgroundColor: 'transparent'},
          title: 'Past Events',
        }}
      />
      <Stack.Screen
        name={'pastPolls'}
        component={PastPolls}
        options={{
          headerStyle: {elevation: 0, backgroundColor: 'transparent'},
          title: 'Past Polls',
        }}
      />
      <Stack.Screen
        name={'pastTasks'}
        component={PastTasks}
        options={{
          headerStyle: {elevation: 0, backgroundColor: 'transparent'},
          title: 'Past Tasks',
        }}
      />
    </Stack.Navigator>
  );
}
