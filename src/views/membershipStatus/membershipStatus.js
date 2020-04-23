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
import {TouchableOpacity} from 'react-native';
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
    this.setState({
      currentMonth: monthNames[month],
      nextOne: monthNames[month + 1],
    });
  };
  componentDidMount() {
    this.getMonth();
  }
  render() {
    return (
      <Container>
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
                marginRight: 'auto',
                fontSize: 2.5 * GlobalSheet.units.vh,
              }}>
              Payment
            </Text>
          </View>
          <Card
            style={{
              width: '90%',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 15 * GlobalSheet.units.vh,
            }}>
            <CardItem>
              <Icon name={'university'} type={'FontAwesome5'} />
            </CardItem>
            <CardItem>
              <Text>
                Hello {this.props.isLogged.name} {this.props.isLogged.lastName}
              </Text>
            </CardItem>
            <CardItem>
              <Text>You have an amount of {500}$ due to the period</Text>
            </CardItem>
            <CardItem footer>
              <Text>
                from {this.state.currentMonth} to {this.state.nextOne}
              </Text>
            </CardItem>
          </Card>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              height: 8 * GlobalSheet.units.vh,
              elevation: 5,
              padding: 2 * GlobalSheet.units.vh,
              backgroundColor: Colors.backgroundFirst,
              borderRadius: 32,
              width: '50%',
              margin: 2 * GlobalSheet.units.vh,
              alignItems: 'center',
            }}>
            <Text>Pay Now</Text>
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
