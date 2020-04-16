import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function MaterialCheckBox(props) {
  return (
    <View style={styles.container}>
      <Icon
        name={
          props.checked ? 'checkbox-marked-outline' : 'checkbox-blank-outline'
        }
        style={styles.checkIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 28,
    height: 28,
  },
  checkIcon: {
    color: 'rgba(31,49,74,1)',
    fontFamily: 'Roboto',
    fontSize: 28,
    lineHeight: 28,
    width: 28,
    height: 28,
  },
});

export default MaterialCheckBox;
