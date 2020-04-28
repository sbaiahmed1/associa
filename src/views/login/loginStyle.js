import {StyleSheet} from 'react-native';
import {Colors, GlobalSheet} from '../../config';
import colors from '../../config/colors';

let loginStyle = StyleSheet.create({
  titleStyle: {
    alignSelf: 'center',
    top: 10 * GlobalSheet.units.vh,
    height: 15 * GlobalSheet.units.vh,
    width: 43 * GlobalSheet.units.vw,
  },
  textInputStyle: {
    borderBottomColor: Colors.textColor,
    borderBottomWidth: 0.5,
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

export default loginStyle;
