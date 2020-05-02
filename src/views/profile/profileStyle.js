import {StyleSheet} from 'react-native';
import {Colors, GlobalSheet} from '../../config';

const profileStyle = StyleSheet.create({
  thumbnail: {
    alignSelf: 'center',
    height: 60 * GlobalSheet.units.vh,
    width: '100%',
    // borderRadius: 100,
    resizeMode: 'cover',
  },
  Name: {
    position: 'absolute',
    bottom: 3 * GlobalSheet.units.vh,
    padding: 1 * GlobalSheet.units.vh,
    color: Colors.whiteTextColor,
    fontFamily: 'Montserrat-SemiBold',
  },
  Role: {
    position: 'absolute',
    bottom: 0 * GlobalSheet.units.vh,
    padding: 1 * GlobalSheet.units.vh,
    color: Colors.whiteTextColor,
    fontFamily: 'Montserrat-Light',
  },
  ButtonStyles: {
    width: 100 * GlobalSheet.units.vw,
    borderRadius: 6,
    height: 8 * GlobalSheet.units.vh,
    padding: 2.5 * GlobalSheet.units.vh,
    backgroundColor: Colors.backgroundFirst,
    borderBottomColor: Colors.dividerColor,
    borderBottomWidth: 0.2 * GlobalSheet.units.vh,
  },
  textInsideBtn: {
    color: Colors.textColor,
    fontSize: 2.7 * GlobalSheet.units.vh,
    fontFamily: 'Montserrat-Regular',
  },
  camera: {
    position: 'absolute',
    bottom: 2 * GlobalSheet.units.vh,
    alignSelf: 'flex-end',
    padding: 2 * GlobalSheet.units.vh,
  },
});
export default profileStyle;
