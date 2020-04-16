import React, {Component} from 'react';
import {View, Text, Icon, Header, Left} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {GlobalSheet} from '../../config';
import {SafeAreaView} from 'react-native';

class Events extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              elevation: 0,
              backgroundColor: 'transparent',
              padding: 2 * GlobalSheet.units.vh,
            }}
            onPress={() => {
              console.log(this.props.navigation);
              this.props.navigation.push('home');
            }}>
            <Icon name="md-arrow-back" />
          </TouchableOpacity>
          <Text>Events GO HERE</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default Events;
