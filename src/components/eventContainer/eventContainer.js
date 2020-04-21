import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import MaterialCheckBox from '../materialCheckBox/materialCheckBox';
import {Colors, GlobalSheet} from '../../config';
import {fontSize} from '../../config/const';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
/////*///////////////////////////////////
const locationIcon = <FontAwesome5 name={'map-marker-alt'} />;
const calendarIcon = <FontAwesome5 name={'calendar-alt'} />;

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
      <Text style={styles.name}>{data.name}</Text>
      <Text numberOfLines={3}>{data.description}</Text>
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 25 * GlobalSheet.units.vh,
    backgroundColor: Colors.backgroundFirst,
    borderRadius: 32,
    shadowOpacity: 1,
    alignSelf: 'center',
    width: '80%',
    elevation: 5,
    margin: 3 * GlobalSheet.units.vh,
    padding: 3 * GlobalSheet.units.vh,
    alignContent: 'center',
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSize * GlobalSheet.units.vh,
    padding: 1 * GlobalSheet.units.vh,
  },
  date: {
    padding: 1 * GlobalSheet.units.vh,
    textAlign: 'right',
  },
  location: {
    padding: 1 * GlobalSheet.units.vh,
  },
  rowItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default EventContainer;
