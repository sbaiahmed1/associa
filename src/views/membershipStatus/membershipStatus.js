/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Card,
  CardItem,
  Body,
  Content,
  Container,
  Header,
  Title,
  Left,
  Icon,
} from 'native-base';
import {TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import {GlobalSheet, Colors} from '../../config';
import {compose} from 'redux';
import {connect} from 'react-redux';

class MembershipStatus extends Component {
  constructor() {
    super();
  }
  state = {
    currentMonth: '',
    nextOne: '',
    year: '',
  };
  getMonth = () => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    var current = new Date();
    let month = current.getMonth();
    let year = current.getFullYear();
    this.setState({
      currentMonth: monthNames[month],
      nextOne: monthNames[month + 1],
      year: year,
    });
  };
  componentDidMount() {
    this.getMonth();
  }
  render() {
    return (
      <Container style={{backgroundColor: Colors.backgroundSecond}}>
        <Content>
          <View style={{flexDirection: 'row', flex: 1}}>
            <TouchableOpacity
              style={{
                elevation: 0,
                backgroundColor: 'transparent',
                padding: 2 * GlobalSheet.units.vh,
              }}
              onPress={() => {
                this.props.navigation.navigate('home');
              }}>
              <Icon name="md-arrow-back" />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 2.5 * GlobalSheet.units.vh,
              }}>
              Payment
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 15 * GlobalSheet.units.vh,
              elevation: 5,
              borderRadius: 6,
              padding: 4 * GlobalSheet.units.vh,
              height: '40%',
            }}>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                alignSelf: 'flex-start',
                fontSize: 3 * GlobalSheet.units.vh,
              }}>
              You have an amount of
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat-Light',
                color: Colors.secondaryTextColor,
                fontSize: 5 * GlobalSheet.units.vh,
              }}>
              {9.99}$
            </Text>
            <View
              style={{
                position: 'absolute',
                bottom: 1 * GlobalSheet.units.vh,
                left: 7 * GlobalSheet.units.vw,
                marginBottom: 1 * GlobalSheet.units.vh,
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 2.5 * GlobalSheet.units.vh,
                }}>
                Due on {this.state.nextOne} {5}, {this.state.year}
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 1.5 * GlobalSheet.units.vh,
                  color: Colors.secondaryTextColor,
                }}>
                Billing period : 5 {this.state.currentMonth} , 5{' '}
                {this.state.nextOne}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              height: 8 * GlobalSheet.units.vh,
              padding: 2.5 * GlobalSheet.units.vh,
              backgroundColor: Colors.buttonColor,
              borderRadius: 6,
              width: '90%',
              margin: 2 * GlobalSheet.units.vh,
              alignItems: 'center',
              position: 'relative',
              bottom: -9 * GlobalSheet.units.vh,
              marginBottom: 20 * GlobalSheet.units.vh,
            }}
            onPress={() =>
              this.props.navigation.navigate('paymentChoosingPage')
            }>
            <Text style={{color: Colors.whiteTextColor}}>Pay Now</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    isLogged: state.login,
    avatar: state.avatar,
  };
};
export default compose(connect(mapStateToProps))(MembershipStatus);
