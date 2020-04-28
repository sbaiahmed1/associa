import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
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
    console.log(totalVotes);
  }, [checked]);
  return (
    <View>
      <Text>{props.question}</Text>
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
              <View style={{padding: 2.5 * GlobalSheet.units.vh, width: '50%'}}>
                <ProgressBar
                  style={{height: 1 * GlobalSheet.units.vh}}
                  progress={answer.votes / totalVotes}
                  color={Colors.accentColor}
                />
              </View>
            </View>
          );
        })}
    </View>
  );
}
export default PollContainer;
