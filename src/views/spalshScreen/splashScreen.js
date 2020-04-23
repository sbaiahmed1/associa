import React, {Component} from 'react';
import {View, Animated, Image, Easing, StyleSheet} from 'react-native';
import {GlobalSheet} from '../../config';

export default class SplashScreen extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }
  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start(() => this.animate());
  }
  render() {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            opacity,
            height: 15 * GlobalSheet.units.vh,
            width: 43 * GlobalSheet.units.vw,
          }}
          source={require('../../assets/logo.png')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
