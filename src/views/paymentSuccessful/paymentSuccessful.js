import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors, GlobalSheet} from '../../config';
import {View, Text, TouchableOpacity} from 'react-native';

export default class PaymentSuccessful extends Component {
  render() {
    return (
      <Container style={{backgroundColor: Colors.backgroundSecond}}>
        <Content>
          <View
            style={{
              alignSelf: 'center',
              //   justifyContent: 'center',
              alignContent: 'center',
              paddingTop: 10 * GlobalSheet.units.vh,
            }}>
            <FontAwesome5
              name={'check-circle'}
              size={30 * GlobalSheet.units.vh}
              color={Colors.accentColor}
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{
                fontSize: 5 * GlobalSheet.units.vh,
                fontFamily: 'Montserrat-Regular',
              }}>
              Payment Successful
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('home');
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Montserrat-SemiBold',
                  color: Colors.secondaryTextColor,
                  fontSize: 2.5 * GlobalSheet.units.vh,
                }}>
                Back to home
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}
