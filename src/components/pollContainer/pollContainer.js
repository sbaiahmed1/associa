/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {RadioButton, ProgressBar} from 'react-native-paper';
import {GlobalSheet, Colors} from '../../config';

function PollContainer(props) {
  const [checked, setchecked] = useState();
  const [totalVotes, settotalVotes] = useState(0);
  let answers = props.pollAnswers;
  useEffect(() => {
    for (let i = 0, to = 0; i < answers.length; i++) {
      to = to + answers[i].votes;
      console.log('to' + to);
      settotalVotes(to);
    }
  }, [checked]);
  return (
    <View
      style={{
        borderRadius: 6,
        elevation: 5,
        width: 80 * GlobalSheet.units.vw,
        alignSelf: 'center',
        margin: 0.5 * GlobalSheet.units.vh,
        padding: 1 * GlobalSheet.units.vh,
        shadowOpacity: Platform.OS === 'ios' ? 0.3 : 1,
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontFamily: 'Montserrat-Medium',
          alignSelf: 'flex-start',
          fontSize: 2.5 * GlobalSheet.units.vh,
          padding: 1 * GlobalSheet.units.vh,
          paddingLeft: 3 * GlobalSheet.units.vh,
          paddingRight: 3 * GlobalSheet.units.vh,
        }}>
        {props.question}
      </Text>
      {answers &&
        answers.map(answer => {
          return (
            <View
              style={{
                flexDirection: 'row',
                paddingRight: 3 * GlobalSheet.units.vh,
                paddingLeft: 3 * GlobalSheet.units.vh,
              }}>
              <RadioButton
                value={answer.option}
                status={checked === answer.option ? 'checked' : 'unchecked'}
                onPress={() => setchecked(answer.option)}
                color={Colors.accentColor}
              />
              <View style={{padding: 1 * GlobalSheet.units.vh, width: '75%'}}>
                <ProgressBar
                  style={{
                    height: 1 * GlobalSheet.units.vh,
                    margin: 0.5 * GlobalSheet.units.vh,
                  }}
                  progress={answer.votes / totalVotes}
                  color={Colors.accentColor}
                />
              </View>
              <Text style={{padding: 1 * GlobalSheet.units.vh}}>
                {answer.option}
              </Text>
            </View>
          );
        })}
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          backgroundColor: props.disabled
            ? Colors.lightButtonColor
            : Colors.buttonColor,
          padding: 1 * GlobalSheet.units.vh,
          borderRadius: 6,
          width: '85%',
        }}
        disabled={props.disabled}>
        <Text style={{color: Colors.whiteTextColor}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PollContainer;
