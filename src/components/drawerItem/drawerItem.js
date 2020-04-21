import drawerStyle from '../../views/drawer/drawerStyle';
import {Text} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors, GlobalSheet} from '../../config';

function DrawerOne(props) {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate(props.routeName)}
      style={styles.ButtonStyles}>
      <Text style={styles.textInsideBtn}>{props.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ButtonStyles: {
    width: '100%',
    alignSelf: 'center',
    height: 8 * GlobalSheet.units.vh,
    elevation: 5,
    padding: 2.5 * GlobalSheet.units.vh,
    backgroundColor: Colors.backgroundFirst,
  },
  textInsideBtn: {
    color: Colors.textColor,
    fontSize: 2.7 * GlobalSheet.units.vh,
    alignContent: 'space-between',
  },
});
export default DrawerOne;
