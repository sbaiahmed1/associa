import React, {Component} from 'react';
import {View, Text, Icon} from 'native-base';
import {GlobalSheet} from '../../config';
import {TouchableOpacity} from 'react-native';

class Tasks extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            elevation: 0,
            backgroundColor: 'transparent',
            padding: 2 * GlobalSheet.units.vh,
          }}
          onPress={() => this.props.navigation.navigate('home')}>
          <Icon name="md-arrow-back" />
        </TouchableOpacity>
        <Text>TASKS GO HERE</Text>
      </View>
    );
  }
}
export default Tasks;
