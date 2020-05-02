import React from 'react';
import {GlobalSheet} from '../../config';
import {Image, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
const logoWithoutText = require('../../assets/noTextLogo.png');
function HeaderInTabs(props) {
  return (
    <TouchableOpacity
      style={{
        elevation: 0,
        backgroundColor: 'transparent',
        padding: 2 * GlobalSheet.units.vh,
        flexDirection: 'row',
      }}
      onPress={() => {
        props.navigation.toggleDrawer();
      }}>
      <Icon
        style={
          props.route.name === 'profile' ? {color: '#ffffff'} : {color: '#000'}
        }
        type={'FontAwesome5'}
        name="bars"
      />
      <Image
        source={logoWithoutText}
        style={{
          height: 4.5 * GlobalSheet.units.vh,
          width: 4.5 * GlobalSheet.units.vh,
          marginLeft: 2 * GlobalSheet.units.vh,
          marginTop: -0.3 * GlobalSheet.units.vh,
        }}
      />
    </TouchableOpacity>
  );
}
export default HeaderInTabs;
