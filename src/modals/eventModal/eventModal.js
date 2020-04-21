import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Container, Content} from 'native-base';
import {GlobalSheet} from '../../config';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
/****************************************************************** */
const locationIcon = <FontAwesome5 name={'map-marker-alt'} />;
const calendarIcon = <FontAwesome5 name={'calendar-alt'} />;
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
      <Container style={styles.modalView}>
        <Content>
          <Text style={styles.modalTitle}>{'' || content.name}</Text>
          <Text style={styles.textStyle}>{'' || content.description}</Text>
          <View
          // eslint-disable-next-line react-native/no-inline-styles
          // style={{
          //   flex: 1,
          //   flexDirection: 'row',
          //   width: '100%',
          //   justifyContent: 'space-evenly',
          // }}
          >
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
                backgroundColor: 'white',
                flexDirection: 'row',
                width: '40%',
                borderRadius: 32,
                height: 6 * GlobalSheet.units.vh,
                elevation: 5,
                padding: 1.5 * GlobalSheet.units.vh,
                margin: 1 * GlobalSheet.units.vh,
                alignSelf: 'center',
              }}
              onPress={() => {
                props.press(false);
                props.dismiss;
              }}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 32,
    padding: 5 * GlobalSheet.units.vh,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 100 * GlobalSheet.units.vw,
    alignSelf: 'center',
    top: '30%',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 2 * GlobalSheet.units.vh,
  },
  modalTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 4 * GlobalSheet.units.vh,
  },
  rowItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    padding: 1 * GlobalSheet.units.vh,
  },
  date: {
    padding: 1 * GlobalSheet.units.vh,
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
});
export default EventModal;
