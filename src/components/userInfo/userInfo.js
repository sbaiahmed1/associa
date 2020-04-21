import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Thumbnail, Text, Card} from 'native-base';
import {Colors, GlobalSheet} from '../../config';

function UserInfo(props) {
  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderRadius: 32,
        padding: 1 * GlobalSheet.units.vw,
      }}
      onPress={props.onPress}>
      <Thumbnail
        // eslint-disable-next-line react-native/no-inline-styles
        style={{alignSelf: 'flex-start', left: '5%'}}
        large
        source={{uri: props.avatar}}
      />
      <Text style={{left: '5%', fontSize: 2.5 * GlobalSheet.units.vh}}>
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
