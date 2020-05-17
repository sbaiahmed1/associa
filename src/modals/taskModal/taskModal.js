import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Container, Content} from 'native-base';
import {GlobalSheet, Colors} from '../../config';
import Modal from 'react-native-modal';
import axios from 'axios';
import {baseUrl} from '../../config/const';
import AsyncStorage from '@react-native-community/async-storage';
/****************************************************************** */
function TaskModal(props) {
  let token = AsyncStorage.getItem('@token');
  let content = props.content;
  const updateTaskStatus = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var body = {
      checked: content.checked ? 'false' : 'true',
      taskId: content._id,
    };
    axios
      .put('https://nodebackend-pfe.herokuapp.com/task/', body)
      .then(response => response)
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      isVisible={props.isVisible}
      onRequestClose={() => props.press(false)}
      hideModalContentWhileAnimating={true}
      onBackdropPress={() => {
        props.press(false);
        props.dismiss;
      }}>
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>{'' || content.title}</Text>
        <Text style={styles.textStyle}>{'' || content.content}</Text>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            position: 'absolute',
            bottom: 3 * GlobalSheet.units.vh,
          }}>
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: Colors.buttonColor,
              width: '40%',
              borderRadius: 6,
              height: 6 * GlobalSheet.units.vh,
              elevation: 5,
              padding: 1.5 * GlobalSheet.units.vh,
              margin: 1 * GlobalSheet.units.vh,
            }}
            onPress={() => {
              props.press(false);
              props.dismiss;
            }}>
            <Text style={styles.textInsideButton}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: Colors.buttonColor,
              width: '50%',
              borderRadius: 6,
              height: 6 * GlobalSheet.units.vh,
              elevation: 5,
              padding: 1.5 * GlobalSheet.units.vh,
              margin: 1 * GlobalSheet.units.vh,
            }}
            onPress={() => updateTaskStatus()}>
            <Text style={styles.textInsideButton}>
              Mark as {content.checked ? 'undone' : 'done'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.whiteTextColor,
    borderRadius: 6,
    padding: 3 * GlobalSheet.units.vh,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 80 * GlobalSheet.units.vw,
    height: '50%',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 2.5 * GlobalSheet.units.vh,
    fontFamily: 'Montserrat-Regular',
  },
  modalTitle: {
    top: -10 * GlobalSheet.units.vh,
    textAlign: 'center',
    fontSize: 2.5 * GlobalSheet.units.vh,
    fontFamily: 'Montserrat-Bold',
  },
  textInsideButton: {
    color: Colors.whiteTextColor,
    textAlign: 'center',
  },
});
export default TaskModal;
