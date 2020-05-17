import React from 'react';
import {TouchableOpacity, ImageBackground} from 'react-native';
import {Container, Text} from 'native-base';
import {Colors, GlobalSheet} from '../../config';
import {Avatar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const avatar = require('../../assets/avatar.png');

function UserInfo(props) {
  return (
    <TouchableOpacity
      style={{height: 20 * GlobalSheet.units.vh}}
      onPress={props.onPress}>
      <ImageBackground
        // eslint-disable-next-line react-native/no-inline-styles
        style={{height: '100%'}}
        source={{uri: 'data:image/jpeg;base64,' + props.avatar}}>
        <LinearGradient
          colors={['transparent', 'black']}
          locations={[0.4, 1.2]}
          style={{
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}>
          <Text
            style={{
              color: Colors.whiteTextColor,
              position: 'absolute',
              bottom: 2 * GlobalSheet.units.vh,
              fontSize: 2.5 * GlobalSheet.units.vh,
              paddingLeft: 1 * GlobalSheet.units.vw,
            }}>
            {props.name}
            {'\t'}
            {props.lastName}
          </Text>
          <Text
            style={{
              color: Colors.whiteTextColor,
              position: 'absolute',
              bottom: 0,
              fontSize: 2 * GlobalSheet.units.vh,
              paddingLeft: 1 * GlobalSheet.units.vw,
            }}>
            {'@' + 'association'}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
export default UserInfo;
