import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Container, Content} from 'native-base';
import {GlobalSheet, Colors} from '../../config';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
/****************************************************************** */
const locationIcon = <FontAwesome5 name={'map-marker-alt'} />;
const calendarIcon = <FontAwesome5 name={'calendar-alt'} />;
const event = require('../../assets/event.jpg');
// /**********************************************************************/
function getDate(date) {
  date = new Date(date * 1000);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = '0' + date.getMinutes();
  var realDate =
    month + '-' + day + '-' + year + ' ' + hours + ':' + minutes.substr(-2);
  return realDate;
}
/*****************************************************************/
function EventModal(props) {
  let token = AsyncStorage.getItem('@token');
  let content = props.content;
  return (
    <Modal
      hideModalContentWhileAnimating={true}
      deviceWidth={GlobalSheet.width}
      deviceHeight={GlobalSheet.height}
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={() => props.press(false)}
      swipeDirection={'down'}
      onSwipeComplete={() => {
        props.press(false);
        props.dismiss;
      }}
      onBackdropPress={() => {
        props.press(false);
        props.dismiss;
      }}>
      <View style={styles.modalView}>
        <Image
          source={event}
          style={{
            height: '35%',
            width: '100%',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
        <Text style={styles.modalTitle}>{'' || content.name}</Text>
        <Text style={styles.textStyle}>{'' || content.description}</Text>
        <View style={styles.rowItems}>
          <Text style={styles.location}>
            {locationIcon}
            {'\t '}
            {content.location}
          </Text>
          <Text style={styles.date}>
            {calendarIcon}
            {'\t '}
            {getDate(content.date)}
          </Text>
        </View>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: Colors.buttonColor,
            width: '40%',
            borderRadius: 6,
            height: 6 * GlobalSheet.units.vh,
            padding: 1.5 * GlobalSheet.units.vh,
            alignSelf: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 3 * GlobalSheet.units.vh,
          }}
          onPress={() => {
            props.press(false);
            props.dismiss;
          }}>
          <Text
            style={{
              color: Colors.whiteTextColor,
              fontFamily: 'Montserrat-Regular',
            }}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    borderRadius: 12,
    top: '20%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 100 * GlobalSheet.units.vw,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 2 * GlobalSheet.units.vh,
    fontFamily: 'Montserrat-Light',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 4 * GlobalSheet.units.vh,
    fontFamily: 'Montserrat-Bold',
  },
  rowItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    padding: 1 * GlobalSheet.units.vh,
    fontFamily: 'Montserrat-Light',
    color: Colors.secondaryTextColor,
  },
  date: {
    padding: 1 * GlobalSheet.units.vh,
    textAlign: 'right',
    alignSelf: 'flex-end',
    fontFamily: 'Montserrat-Light',
    color: Colors.secondaryTextColor,
  },
});
export default EventModal;
