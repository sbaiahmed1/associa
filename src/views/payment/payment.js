/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import CreditCard from 'react-native-credit-card';
import {Container, Content, CheckBox} from 'native-base';
import {GlobalSheet, Colors} from '../../config';

export default class Payment extends Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focused: '',
    savePayment: false,
    errorStyle: Colors.textColor,
    allFieldsComplete: false,
  };
  _onChange = form => {
    console.log(form);
  };

  verifyAllComplete = () => {
    if (
      this.state.number === '' ||
      this.state.expiry === '' ||
      this.state.name === '' ||
      this.state.cvc === ''
    ) {
      this.setState({allFieldsComplete: false});
    } else {
      this.setState({
        allFieldsComplete: true,
      });
    }
  };

  render() {
    return (
      <Container style={style.container}>
        <Content>
          <CreditCard
            shiny={false}
            bar={false}
            focused={this.state.focused}
            number={this.state.number}
            name={this.state.name}
            expiry={this.state.expiry}
            cvc={this.state.cvc}
            style={{alignSelf: 'center'}}
          />
          <Text style={style.cardNumberLabel}>Card Number</Text>
          <TextInput
            style={[
              style.textInputStyle,
              {borderBottomColor: this.state.errorStyle},
            ]}
            onChangeText={text => {
              this.setState({
                number: text,
                focused: 'number',
              });
            }}
            keyboardType={'numeric'}
            maxLength={16}
            placeholder={'1111 2222 3333 4444'}
            onEndEditing={() => {
              this.verifyAllComplete();
            }}
          />
          <View style={style.row}>
            <Text style={style.textStyle}>Expiry</Text>
            <Text style={style.textStyle}>CVC/CCV</Text>
            <Text style={style.textStyle}>Full Name</Text>
          </View>
          <View style={style.row}>
            <TextInput
              maxLength={5}
              placeholder={'MM/YY'}
              style={style.expiry}
              onChangeText={text => {
                this.setState({expiry: text, focused: 'expiry'});
              }}
              onEndEditing={() => {
                this.verifyAllComplete();
              }}
            />
            <TextInput
              onChangeText={text => {
                this.setState({cvc: text, focused: 'cvc'});
              }}
              maxLength={3}
              placeholder={'123'}
              style={style.ccv}
              onEndEditing={() => {
                this.verifyAllComplete();
              }}
            />
            <TextInput
              onChangeText={text => {
                this.setState({
                  focused: 'name',
                  name: text,
                });
              }}
              placeholder={'Ahmed Smith'}
              style={style.nameStyle}
              onEndEditing={() => {
                this.verifyAllComplete();
              }}
            />
          </View>
          <View style={style.rowSavePurchase}>
            <CheckBox
              style={{margin: 1 * GlobalSheet.units.vh}}
              checked={this.state.savePayment}
              onPress={() =>
                this.setState({savePayment: !this.state.savePayment})
              }
            />
            <Text style={style.savePayment}>
              Save card for future purchases ?
            </Text>
          </View>
          <TouchableOpacity
            disabled={!this.state.allFieldsComplete}
            style={[
              style.payNow,
              this.state.allFieldsComplete
                ? {backgroundColor: Colors.buttonColor}
                : {backgroundColor: Colors.lightButtonColor},
            ]}
            onPress={() => {
              this.props.navigation.navigate('success');
            }}>
            <Text style={style.payNowText}>Pay now</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
const style = StyleSheet.create({
  container: {
    marginTop: 5 * GlobalSheet.units.vh,
    backgroundColor: Colors.backgroundSecond,
    flex: 1,
  },
  rowSavePurchase: {
    flexDirection: 'row',
    padding: 2 * GlobalSheet.units.vh,
  },
  savePayment: {
    padding: 0.7 * GlobalSheet.units.vh,
    fontFamily: 'Montserrat-Regular',
    fontSize: 2 * GlobalSheet.units.vh,
  },
  textStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 2.5 * GlobalSheet.units.vh,
    // left: 4 * GlobalSheet.units.vh,
    marginLeft: 1 * GlobalSheet.units.vh,
    marginRight: 1 * GlobalSheet.units.vh,
  },
  textInputStyle: {
    borderBottomWidth: 0.5,
    width: (GlobalSheet.width / 100) * 85,
    color: Colors.textColor,
    alignSelf: 'center',
    textAlign: 'center',
    borderBottomColor: Colors.textColor,
  },
  expiry: {
    borderBottomWidth: 0.5,
    color: Colors.textColor,
    width: (GlobalSheet.width / 100) * 15,
    borderBottomColor: Colors.textColor,
    marginLeft: 1 * GlobalSheet.units.vh,
    marginRight: 1 * GlobalSheet.units.vh,
  },
  nameStyle: {
    borderBottomWidth: 0.5,
    color: Colors.textColor,
    width: (GlobalSheet.width / 100) * 44,
    borderBottomColor: Colors.textColor,
    marginLeft: 1 * GlobalSheet.units.vh,
    marginRight: 1 * GlobalSheet.units.vh,
  },

  cardNumberLabel: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 2.5 * GlobalSheet.units.vh,
    left: 4 * GlobalSheet.units.vh,
    paddingTop: 2 * GlobalSheet.units.vh,
  },
  row: {
    flexDirection: 'row',
    left: 3 * GlobalSheet.units.vh,
    paddingTop: 2 * GlobalSheet.units.vh,
  },
  ccv: {
    borderBottomWidth: 0.5,
    color: Colors.textColor,
    width: (GlobalSheet.width / 100) * 20,
    borderBottomColor: Colors.textColor,
    marginLeft: 1 * GlobalSheet.units.vh,
    marginRight: 1 * GlobalSheet.units.vh,
  },
  payNow: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '50%',
    height: 8 * GlobalSheet.units.vh,
    padding: 2.5 * GlobalSheet.units.vh,
    borderRadius: 6,
    marginTop: 2 * GlobalSheet.units.vh,
  },
  payNowText: {
    color: Colors.whiteTextColor,
    fontSize: 2 * GlobalSheet.units.vh,
    fontFamily: 'Montserrat-Regular',
  },
});
