import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Alert,
  TouchableHighlight,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Container, Content} from 'native-base';
import {GlobalSheet} from '../config';
import Modal from 'react-native-modal';

/****************************************************************** */

function TaskModal(props) {
  let content = props.content;
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
          <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#2196F3',
                flexDirection: 'row',
                width: '40%',
              }}
              onPress={() => {
                props.press(false);
                props.dismiss;
              }}>
              <Text>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#2196F3',
                flexDirection: 'row',
                width: '40%',
              }}>
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
    marginBottom: '40%',
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
