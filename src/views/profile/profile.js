import React, {Component} from 'react';
import {Thumbnail, Container, Content, H1, H3, View} from 'native-base';
import profileStyle from './profileStyle';
import {Colors, GlobalSheet} from '../../config';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  TouchableOpacity,
  Text,
  ImageBackground,
  ImageBackgroundBase,
} from 'react-native';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {tokens} from '../../../values';
import {Avatar} from '../../redux/actions/avatar';
import HeaderInTabs from '../../components/headerInTabs/headerInTabs';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageUri: this.props.avatar.imageUri,
    };
    this.getAvatar = this.getAvatar.bind(this);
  }
  getAvatar = () => {
    const props = this.props;
    const imageName = this.props.isLogged.imageName;
    const set = params => this.setState(params);
    dbx
      .filesListFolder({path: ''})
      .then(function(response) {
        let data = response.entries;
        data.map(single => {
          console.log(single);
          if (single.path_lower == imageName) {
            dbx
              .filesGetTemporaryLink({path: single.path_lower})
              .then(function(ImageResponse) {
                console.log(ImageResponse.link);
                set({ImageUri: ImageResponse.link});
                props.avatar({uri: ImageResponse.link});
              })
              .catch(error => {
                console.log(error);
              });
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getAvatar();
  }
  render() {
    return (
      <Container style={{backgroundColor: Colors.backgroundSecond}}>
        <Content>
          <ImageBackground
            style={profileStyle.thumbnail}
            source={{uri: this.state.ImageUri}}>
            <HeaderInTabs {...this.props} />
            <H1 style={profileStyle.Name}>
              {this.props.isLogged.name}
              {'\t'}
              {this.props.isLogged.lastName}
            </H1>
            <H3 style={profileStyle.Role}>{this.props.isLogged.role}</H3>
          </ImageBackground>
          <View style={profileStyle.buttonsContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('tasks')}
              style={profileStyle.ButtonStyles}>
              <Text style={profileStyle.textInsideBtn}>Past Events</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('tasks')}
              style={profileStyle.ButtonStyles}>
              <Text style={profileStyle.textInsideBtn}>Past Polls</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('tasks')}
              style={profileStyle.ButtonStyles}>
              <Text style={profileStyle.textInsideBtn}>Past Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('tasks')}
              style={profileStyle.ButtonStyles}>
              <Text style={profileStyle.textInsideBtn}>Settings</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({
  accessToken: tokens.dropBoxApi,
  fetch: fetch,
});

const mapStateToProps = state => {
  console.log(state);
  return {
    isLogged: state.login,
    avatar: state.avatar,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    avatar: state => {
      dispatch(Avatar(state));
    },
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Profile);
