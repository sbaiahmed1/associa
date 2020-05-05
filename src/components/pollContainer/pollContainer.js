/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
        margin: 1 * GlobalSheet.units.vh,
        padding: 1 * GlobalSheet.units.vh,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Montserrat-Regular',
          alignSelf: 'center',
          fontSize: 2 * GlobalSheet.units.vh,
          padding: 1 * GlobalSheet.units.vh,
        }}>
        {props.question}
      </Text>
      {answers &&
        answers.map(answer => {
          return (
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{padding: 1 * GlobalSheet.units.vh}}>
                {answer.option}
              </Text>
              <RadioButton
                value={answer.option}
                status={checked === answer.option ? 'checked' : 'unchecked'}
                onPress={() => setchecked(answer.option)}
                color={Colors.accentColor}
              />
              <View style={{padding: 1 * GlobalSheet.units.vh, width: '50%'}}>
                <ProgressBar
                  style={{
                    height: 1 * GlobalSheet.units.vh,
                    margin: 0.5 * GlobalSheet.units.vh,
                  }}
                  progress={answer.votes / totalVotes}
                  color={Colors.accentColor}
                />
              </View>
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
        }}
        disabled={props.disabled}>
        <Text style={{color: Colors.whiteTextColor}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
export default PollContainer;
