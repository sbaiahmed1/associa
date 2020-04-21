import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {Container, Content} from 'native-base';
import {GlobalSheet} from '../../config';
import Modal from 'react-native-modal';
import axios from 'axios';
import {baseUrl} from '../../config/const';
/****************************************************************** */
function TaskModal(props) {
  let token = AsyncStorage.getItem('@token');
  let content = props.content;
  const updateTaskStatus = () => {
    let url = baseUrl + 'task';
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var body = {
      checked: content.checked ? 'false' : 'true',
      taskId: content._id,
    };
    var requestOptions = {
      // headers: myHeaders,
      body: body,
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
      visible={props.isVisible}
      onRequestClose={() => props.press(false)}
      hideModalContentWhileAnimating={true}
      onBackdropPress={() => {
        props.press(false);
        props.dismiss;
      }}>
      <Container style={styles.modalView}>
        <Content>
          <Text style={styles.modalTitle}>{'' || content.title}</Text>
          <Text style={styles.textStyle}>{'' || content.content}</Text>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 1,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
            }}>
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
              }}
              onPress={() => {
                props.press(false);
                props.dismiss;
              }}>
              <Text>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                width: '50%',
                borderRadius: 32,
                height: 6 * GlobalSheet.units.vh,
                elevation: 5,
                padding: 1.5 * GlobalSheet.units.vh,
                margin: 1 * GlobalSheet.units.vh,
              }}
              onPress={() => updateTaskStatus()}>
              <Text>Mark as {content.checked ? 'undone' : 'done'}</Text>
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
    marginTop: 22,
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
    width: 78 * GlobalSheet.units.vw,
    alignSelf: 'center',
    top: '10%',
    marginBottom: '50%',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 2.5 * GlobalSheet.units.vh,
  },
  modalTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 4 * GlobalSheet.units.vh,
  },
});
export default TaskModal;
