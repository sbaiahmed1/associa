import React, {Component} from 'react';
import {View, Text, Icon, Header, Left} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {GlobalSheet} from '../../config';
import {SafeAreaView} from 'react-native';

class AddActivity extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity
            style={{
              elevation: 0,
              backgroundColor: 'transparent',
              padding: 2 * GlobalSheet.units.vh,
            }}
            onPress={() => {
              this.props.navigation.push('home');
            }}>
            <Icon name="md-arrow-back" />
          </TouchableOpacity>
          <Text>Payment</Text>
          <Text>ADD GO HERE</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default AddActivity;
