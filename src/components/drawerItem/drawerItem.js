import drawerStyle from '../../views/drawer/drawerStyle';
import {Text} from 'native-base';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors, GlobalSheet} from '../../config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function DrawerOne(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.routeName) {
          props.navigation.navigate(props.routeName);
        } else {
          props.press(props);
        }
      }}
      style={styles.ButtonStyles}>
      <FontAwesome5
        name={props.iconName}
        size={2.5 * GlobalSheet.units.vh}
        color={Colors.textColor}
        style={{padding: 0.7 * GlobalSheet.units.vh}}
      />
      <Text style={styles.textInsideBtn}>{props.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ButtonStyles: {
    width: '100%',
    alignSelf: 'center',
    height: 8 * GlobalSheet.units.vh,
    elevation: 0,
    paddingTop: 2 * GlobalSheet.units.vh,
    paddingLeft: 1 * GlobalSheet.units.vh,
    backgroundColor: Colors.backgroundFirst,
    flexDirection: 'row',
  },
  textInsideBtn: {
    color: Colors.textColor,
    fontSize: 2.7 * GlobalSheet.units.vh,
    alignContent: 'space-between',
  },
});
export default DrawerOne;
