import {StyleSheet} from 'react-native';
import {Colors, GlobalSheet} from '../../config';

const profileStyle = StyleSheet.create({
  thumbnail: {
    alignSelf: 'center',
    margin: 3 * GlobalSheet.units.vh,
  },
  Name: {
    alignSelf: 'center',
    padding: 1 * GlobalSheet.units.vh,
    color: Colors.textColor,
  },
  Role: {
    alignSelf: 'center',
    color: Colors.textColor,
  },
  button: {
    backgroundColor: 'transparent',
    width: 85 * GlobalSheet.units.vw,
    borderRadius: 32,
    height: 8 * GlobalSheet.units.vh,
    justifyContent: 'center',
  },
  linearGradient: {
    backgroundColor: 'transparent',
    width: 85 * GlobalSheet.units.vw,
    elevation: 5,
    alignSelf: 'center',
    borderRadius: 32,
    margin: 2 * GlobalSheet.units.vh,
  },
  textInsideBtn: {
    alignSelf: 'center',
    color: 'white',
  },
  buttonsContainer: {
    padding: 10 * GlobalSheet.units.vh,
  },
});
export default profileStyle;
