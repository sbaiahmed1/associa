import React, {Component} from 'react';
import {View, Text, Icon, Header, Left} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {GlobalSheet} from '../../config';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';

class MainHome extends Component {
  render() {
    // console.log(this.props);
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
          <Text onPress={() => this.props.navigation.navigate('forgotLogin')}>
            THis is the Main home
          </Text>
          <Text>Main tasks and shit</Text>
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
