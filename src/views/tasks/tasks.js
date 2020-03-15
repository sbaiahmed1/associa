import React from 'react';
import {View, Text, Icon} from 'native-base';
import {GlobalSheet} from '../../config';
import {TouchableOpacity} from 'react-native';

function Tasks(props) {
  return (
    <View>
      <TouchableOpacity
        style={{
          elevation: 0,
          backgroundColor: 'transparent',
          padding: 2 * GlobalSheet.units.vh,
        }}
        onPress={() => props.navigation.toggleDrawer()}>
        <Icon type={'FontAwesome5'} name="bars" />
      </TouchableOpacity>
      <Text>TASKS GO HERE</Text>
    </View>
  );
}
export default Tasks;
