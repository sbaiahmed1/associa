import React, {Component} from 'react';
import {Thumbnail, Container, Content, H1, H3, Button, View} from 'native-base';
import profileStyle from './profileStyle';
import {Colors} from '../../config';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: 'Ahmed',
      LastName: 'SBai',
      ImageUri:
        'https://facebook.github.io/react-native/docs/assets/favicon.png',
      role: 'Dev Com',
    };
  }
  render() {
    console.log(this.props);
    return (
      <Container>
        <Content>
          <FontAwesome5
            size={35}
            name={'bars'}
            onPress={() => this.props.navigation.toggleDrawer()}
          />
          <Thumbnail
            style={profileStyle.thumbnail}
            source={{uri: this.state.ImageUri}}
          />
          <H1 style={profileStyle.Name}>
            {this.state.Name}
            {'\t'}
            {this.state.LastName}
          </H1>
          <H3 style={profileStyle.Role}>{this.state.role}</H3>
          <View style={profileStyle.buttonsContainer}>
            <LinearGradient
              colors={[Colors.linearButton1, Colors.linearButton2]}
              start={{x: 0, y: 0.0}}
              end={{x: 1, y: 1}}
              style={profileStyle.linearGradient}>
              <Button
                textStyle={{alignSelf: 'center'}}
                style={profileStyle.button}>
                <H3 style={profileStyle.textInsideBtn}>Tasks</H3>
              </Button>
            </LinearGradient>
            <LinearGradient
              colors={[Colors.linearButton1, Colors.linearButton2]}
              start={{x: 0, y: 0.0}}
              end={{x: 1, y: 1}}
              style={profileStyle.linearGradient}>
              <Button style={profileStyle.button}>
                <H3 style={profileStyle.textInsideBtn}>Subscriptions</H3>
              </Button>
            </LinearGradient>
            <LinearGradient
              colors={[Colors.linearButton1, Colors.linearButton2]}
              start={{x: 0, y: 0.0}}
              end={{x: 1, y: 1}}
              style={profileStyle.linearGradient}>
              <Button style={profileStyle.button}>
                <H3 style={profileStyle.textInsideBtn}>Light</H3>
              </Button>
            </LinearGradient>
            <LinearGradient
              colors={[Colors.linearButton1, Colors.linearButton2]}
              start={{x: 0, y: 0.0}}
              end={{x: 1, y: 1}}
              style={profileStyle.linearGradient}>
              <Button style={profileStyle.button}>
                <H3 style={profileStyle.textInsideBtn}>Light</H3>
              </Button>
            </LinearGradient>
          </View>
        </Content>
      </Container>
    );
  }
}
