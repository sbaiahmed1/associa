import drawerStyle from '../../views/drawer/drawerStyle';
import {Text} from 'native-base';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, GlobalSheet} from '../../config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {DrawerItem} from '@react-navigation/drawer';

function DrawerOne(props) {
  useEffect(() => {}, []);

  return (
    <DrawerItem
      label={props.label}
      onPress={() => {
        if (props.routeName) {
          props.navigation.navigate(props.routeName);
          // setfocus(true);
        } else {
          props.press(props);
        }
      }}
      icon={() => {
        return (
          <FontAwesome5
            name={props.iconName}
            size={2.5 * GlobalSheet.units.vh}
            color={Colors.textColor}
            style={{padding: 0.7 * GlobalSheet.units.vh}}
          />
        );
      }}
      activeBackgroundColor={Colors.accentColor}
      labelStyle={[
        styles.textInsideBtn,
        props === props.label
          ? {
              color: Colors.whiteTextColor,
            }
          : {
              color: Colors.textColor,
            },
      ]}
      // focused={focus}
    />
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
    flexDirection: 'row',
  },
  textInsideBtn: {
    fontSize: 2.5 * GlobalSheet.units.vh,
    alignContent: 'space-between',
    paddingLeft: 1.3 * GlobalSheet.units.vh,
  },
});
export default DrawerOne;
