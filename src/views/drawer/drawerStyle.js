import {StyleSheet} from 'react-native';
import {GlobalSheet, Colors} from '../../config';
const drawerStyle = StyleSheet.create({
  ButtonStyles: {
    width: '100%',
    alignSelf: 'center',
    // borderRadius: 32,
    height: 8 * GlobalSheet.units.vh,
    elevation: 5,
    padding: 2.5 * GlobalSheet.units.vh,
    // margin: 0.5 * GlobalSheet.units.vh,
    backgroundColor: Colors.backgroundFirst,
  },
  textInsideBtn: {
    color: Colors.textColor,
    fontSize: 2.7 * GlobalSheet.units.vh,
    alignContent: 'space-between',
  },
  separator: {
    backgroundColor: Colors.backgroundSecond,
    height:'2%',
  },
});
export default drawerStyle;
