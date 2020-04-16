import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from '..';
import {Drawer} from '../drawer';
import {Root} from 'native-base';
import StackContainer from '../stackContainer/stackContainer';
import PushController from '../../config/notificationHandler';

const Stack = createStackNavigator();
class RootNavigator extends Component {
  constructor() {
    super();
    this.state = {
      init: 'home',
    };
  }

  render() {
    return (
      <Root>
        <PushController nav={this.props.navigation} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName={this.state.init}>
            <Stack.Screen
              name={'login'}
              component={StackContainer}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={'home'}
              component={Drawer}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    );
  }
}

export default RootNavigator;
