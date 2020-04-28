/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-input-credit-card';
import {Container, Content} from 'native-base';
import {GlobalSheet} from '../../config';

export default class Payment extends Component {
  _onChange = form => {
    console.log(form);
  };
  render() {
    return (
      <Container>
        <Content>
          <View
            style={{
              marginLeft: -1 * GlobalSheet.units.vw,
              padding: 1 * GlobalSheet.units.vh,
              alignSelf: 'center',
            }}>
            <CreditCardInput autoFocus={true} onChange={() => this._onChange} />
          </View>
        </Content>
      </Container>
    );
  }
}
