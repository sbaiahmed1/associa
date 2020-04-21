import React, {Component} from 'react';
import {View, Text, Icon, Header, Left} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {GlobalSheet} from '../../config';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';

class MainHome extends Component {
  renderGreet = () => {
    let current = new Date().toLocaleTimeString();
    if (current > '18:00:00') {
      return 'Good evening';
    } else {
      return 'Good Morning';
    }
  };
  render() {
    // console.log(this.props);
    console.log(this.renderGreet());
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
              this.props.navigation.toggleDrawer();
            }}>
            <Icon type={'FontAwesome5'} name="bars" />
          </TouchableOpacity>
          <Text style={{fontSize: 2.5 * GlobalSheet.units.vh}}>
            {this.renderGreet()}
            {'\t'}
            <Text
              style={{
                fontSize: 2.5 * GlobalSheet.units.vh,
                fontWeight: 'bold',
              }}>
              {'@' + this.props.isLogged.userName}
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state);
  return {
    isLogged: state.login,
  };
};
export default compose(connect(mapStateToProps))(MainHome);
