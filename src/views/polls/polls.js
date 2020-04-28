import React, {Component} from 'react';
import {View, Text} from 'native-base';
import SplashScreen from '../spalshScreen/splashScreen';
import PollContainer from '../../components/pollContainer/pollContainer';
const pollQuestion = 'Is react-polls useful?';
const pollAnswers = [{option: 'Yes', votes: 8}, {option: 'No', votes: 2}];
class Polls extends Component {
  render() {
    return (
      <View>
        <PollContainer question={pollQuestion} pollAnswers={pollAnswers} />
      </View>
    );
  }
}
export default Polls;
