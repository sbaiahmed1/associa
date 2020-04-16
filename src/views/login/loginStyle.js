import {StyleSheet} from 'react-native';
import {Colors, GlobalSheet} from '../../config';
import colors from '../../config/colors';

let loginStyle = StyleSheet.create({
  titleStyle: {
    color: Colors.textColor,
    fontSize: 5 * GlobalSheet.units.vh,
    alignSelf: 'center',
    top: 10 * GlobalSheet.units.vh,
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
    top: 20 * GlobalSheet.units.vh,
    alignSelf: 'center',
  },
  facebook: {
    borderRadius: 50,
    borderColor: Colors.textColor,
    borderWidth: 1,
    padding: 1 * GlobalSheet.units.vw,
    height: 7 * GlobalSheet.units.vh,
    width: 7 * GlobalSheet.units.vh,
    margin: 1.5 * GlobalSheet.units.vh,
  },
  textFacebook: {
    textAlign: 'center',
    justifyContent: 'center',
    padding: 2 * GlobalSheet.units.vw,
  },
  signInButton: {
    top: 1 * GlobalSheet.units.vh,
    width: (50 * GlobalSheet.width) / 100,
    height: 7 * GlobalSheet.units.vh,
  },
  gradientStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },
  textInsideGradient: {
    color: 'white',
  },
});

export default loginStyle;
