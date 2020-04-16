import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Alert,
  TouchableHighlight,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Container, Content} from 'native-base';

function TaskModal(props) {
  let content = props.content;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={() => props.press(false)}>
      <Container>
        <Content>
          <Text>Hello</Text>
          <TouchableOpacity
            style={{backgroundColor: '#2196F3', height: 30}}
            onPress={() => props.press(false)}>
            <Text>{'' || content._id}</Text>
          </TouchableOpacity>
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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default TaskModal;
