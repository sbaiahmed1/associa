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
  ButtonStyles: {
    width: 85 * GlobalSheet.units.vw,
    alignSelf: 'center',
    borderRadius: 32,
    height: 8 * GlobalSheet.units.vh,
    elevation: 5,
    padding: 2.5 * GlobalSheet.units.vh,
    margin: 0.5 * GlobalSheet.units.vh,
    backgroundColor: Colors.backgroundFirst,
  },
  textInsideBtn: {
    alignSelf: 'center',
    color: Colors.textColor,
    fontSize: 2.7 * GlobalSheet.units.vh,
  },
  buttonsContainer: {
    padding: 7 * GlobalSheet.units.vh,
  },
});
export default profileStyle;
