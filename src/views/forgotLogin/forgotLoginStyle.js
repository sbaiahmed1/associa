import {Platform, StyleSheet} from 'react-native';
import {Colors, GlobalSheet} from '../../config';
import colors from '../../config/colors';

let forgotLoginStyle = StyleSheet.create({
  title: {
    alignSelf: 'center',
    // top: 0 * GlobalSheet.units.vh,
    fontFamily: 'Montserrat-Bold',
    fontSize: 2.5 * GlobalSheet.units.vh,
  },
  subtitle: {
    alignSelf: 'center',
    top: 2 * GlobalSheet.units.vh,
    fontFamily: 'Montserrat-Light',
    fontSize: 2 * GlobalSheet.units.vh,
    color: Colors.secondaryTextColor,
  },
  textInputStyle: {
    borderBottomColor: Colors.textColor,
    borderBottomWidth: Platform.OS === 'ios' ? 0.2 : 0.5,
    width: (GlobalSheet.width / 100) * 85,
    color: colors.textColor,
    alignSelf: 'center',
    textAlign: 'center',
    top: 15 * GlobalSheet.units.vh,
  },
  loginMethods: {
    flex: 1,
    flexDirection: 'row',
    top: 18 * GlobalSheet.units.vh,
    alignSelf: 'center',
  },
  signInButton: {
    top: 1 * GlobalSheet.units.vh,
    width: (50 * GlobalSheet.width) / 100,
    height: 7 * GlobalSheet.units.vh,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  gradientStyle: {
    flex: 1,
  },
  textInsideGradient: {
    color: 'white',
    opacity: 1,
  },
});

export default forgotLoginStyle;
