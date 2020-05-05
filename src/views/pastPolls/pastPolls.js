import React from 'react';
import {Container, Content} from 'native-base';
import PollContainer from '../../components/pollContainer/pollContainer';
import {Colors} from '../../config';
const pollQuestion = 'kiki do you love me ?';
const pollAnswers = [
  {option: 'Yes', votes: 8},
  {option: 'No', votes: 2},
  {option: 'Si', votes: 5},
  {option: 'Ha', votes: 3},
];
export default function PastPolls(props) {
  return (
    <Container style={{backgroundColor: Colors.backgroundSecond}}>
      <Content>
        <PollContainer
          disabled={true}
          question={pollQuestion}
          pollAnswers={pollAnswers}
        />
        <PollContainer
          disabled={true}
          question={pollQuestion}
          pollAnswers={pollAnswers}
        />
      </Content>
    </Container>
  );
}
