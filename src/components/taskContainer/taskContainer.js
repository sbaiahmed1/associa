import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import MaterialCheckBox from '../materialCheckBox/materialCheckBox';
import {Colors, GlobalSheet} from '../../config';

function TaskContainer(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.press}>
      <Text>{props.title}</Text>
      <MaterialCheckBox checked={props.checked} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10 * GlobalSheet.units.vh,
    backgroundColor: Colors.backgroundFirst,
    borderRadius: 32,
    shadowOpacity: 1,
    alignSelf: 'center',
    width: '80%',
    flexDirection: 'row',
    elevation: 5,
    margin: 3 * GlobalSheet.units.vh,
    justifyContent: 'space-between',
    padding: 3 * GlobalSheet.units.vh,
  },
});

export default TaskContainer;
