import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import MaterialCheckBox from '../materialCheckBox/materialCheckBox';
import {Colors, GlobalSheet} from '../../config';
import {fontSize} from '../../config/const';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
/////*///////////////////////////////////
const locationIcon = <FontAwesome5 name={'map-marker-alt'} />;
const calendarIcon = <FontAwesome5 name={'calendar-alt'} />;
const event = require('../../assets/event.jpg');
/************************************* */
function getDate(date) {
  date = new Date(date * 1000);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = '0' + date.getMinutes();
  var realDate =
    month + '-' + day + '-' + year + ' ' + hours + ':' + minutes.substr(-2);
  return realDate;
}

function EventContainer(props) {
  var data = props;
  return (
    <TouchableOpacity style={styles.container} onPress={data.press}>
      <Image
        style={{
          height: '100%',
          width: '35%',
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
        }}
        source={event}
      />
      <View style={{width: '65%'}}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {data.description}
        </Text>
        <View style={styles.rowItems}>
          <Text style={styles.location}>
            {locationIcon}
            {'\t '}
            {data.location}
          </Text>
          <Text style={styles.date}>
            {calendarIcon}
            {'\t '}
            {getDate(data.date)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 20 * GlobalSheet.units.vh,
    backgroundColor: Colors.backgroundFirst,
    borderRadius: 6,
    shadowOpacity: 1,
    alignSelf: 'center',
    width: '80%',
    elevation: 5,
    margin: 1 * GlobalSheet.units.vh,
    // padding: 3 * GlobalSheet.units.vh,
    flexDirection: 'row',
  },
  name: {
    fontFamily: 'Montserrat-Regular',
    fontSize: fontSize * GlobalSheet.units.vh,
    padding: 1 * GlobalSheet.units.vh,
  },
  date: {
    padding: 0.5 * GlobalSheet.units.vh,
    textAlign: 'right',
    color: Colors.secondaryTextColor,
    fontFamily: 'Montserrat-Light',
  },
  location: {
    padding: 0.5 * GlobalSheet.units.vh,
    color: Colors.secondaryTextColor,
    fontFamily: 'Montserrat-Light',
  },
  rowItems: {
    position: 'absolute',
    bottom: 0.5 * GlobalSheet.units.vh,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  description: {
    fontFamily: 'Montserrat-Light',
  },
});

export default EventContainer;
