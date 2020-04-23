import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Text} from 'native-base';
import {Colors, GlobalSheet} from '../../config';
import {Avatar} from 'react-native-paper';

function UserInfo(props) {
  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderRadius: 32,
        padding: 1 * GlobalSheet.units.vw,
      }}
      onPress={props.onPress}>
      <Avatar.Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          alignSelf: 'flex-start',
          left: '5%',
          marginTop: 2 * GlobalSheet.units.vh,
        }}
        size={12 * GlobalSheet.units.vh}
        source={{uri: props.avatar}}
      />
      <Text style={{left: '5%', fontSize: 3 * GlobalSheet.units.vh}}>
        {props.name}
        {'\t'}
        {props.lastName}
      </Text>
      <Text
        style={{
          left: '5%',
          fontSize: 2 * GlobalSheet.units.vh,
          color: Colors.grey2,
        }}>
        {'@' + props.username}
      </Text>
    </TouchableOpacity>
  );
}
export default UserInfo;
