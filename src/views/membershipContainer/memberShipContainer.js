import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MembershipStatus from '../membershipStatus/membershipStatus';
import Payment from '../payment/payment';
import PaymentSuccessful from '../paymentSuccessful/paymentSuccessful';

const Stack = createStackNavigator();
function MembershipContainer() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MembershipStatus}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'paymentChoosingPage'}
        component={Payment}
        options={{
          title: 'Choose a payment method',
          headerStyle: {
            elevation: 0,
            backgroundColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name={'success'}
        component={PaymentSuccessful}
        options={{
          title: 'Payment Successful',
          headerStyle: {
            elevation: 0,
            backgroundColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  );
}
export default MembershipContainer;
