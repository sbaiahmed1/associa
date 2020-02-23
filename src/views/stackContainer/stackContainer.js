import React, {Component} from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../login';
import {ForgotLogin} from '../forgotLogin';

const Stack = createStackNavigator();

class StackContainer extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'login'}
            options={{headerShown: false}}
            component={Login}
          />
          <Stack.Screen
            name={'forgotLogin'}
            component={ForgotLogin}
            options={{
              headerStyle: {
                elevation: 0,
                backgroundColor: 'transparent',
              },
              headerTitleStyle: {
                left: '50%',
              },
            }}
          />
          <Stack.Screen name={'home'} options={{header:null}} component={}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default StackContainer;
