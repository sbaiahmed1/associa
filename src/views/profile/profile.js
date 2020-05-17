import React, {Component} from 'react';
import {Thumbnail, Container, Content, H1, H3, View, Toast} from 'native-base';
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
import NotificationSetting from 'react-native-open-notification';
import {connect} from 'react-redux';
import {Avatar} from '../../redux/actions/avatar';
import HeaderInTabs from '../../components/headerInTabs/headerInTabs';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import {loggedIn} from '../../redux/actions/login';
/********************************************* */
const avatar = require('../../assets/avatar.png');
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

/********************************************* */

class Profile extends Component {
  constructor(props) {
    super(props);
    // this.getAvatar = this.getAvatar.bind(this);
  }
  // getAvatar = () => {
  //   const props = this.props;
  //   const imageName = this.props.isLogged.imageName;
  //   const set = params => this.setState(params);
  //   dbx
  //     .filesListFolder({path: ''})
  //     .then(function(response) {
  //       let data = response.entries;
  //       data.map(single => {
  //         console.log(single);
  //         if (single.path_lower == imageName) {
  //           dbx
  //             .filesGetTemporaryLink({path: single.path_lower})
  //             .then(function(ImageResponse) {
  //               console.log(ImageResponse.link);
  //               set({ImageUri: ImageResponse.link});
  //               props.avatar({uri: ImageResponse.link});
  //             })
  //             .catch(error => {
  //               console.log(error);
  //             });
  //         }
  //       });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // };
  // componentDidMount() {
  //   this.getAvatar();
  // }
  /***************************************************************** */
  showImagePicker = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setNewAvatar(response.data);
      }
    });
  };
  /***************************************************************** */
  setNewAvatar = source => {
    var body = {
      userId: this.props.isLogged.id,
      imageName: source,
    };
    axios
      .put('https://nodebackend-pfe.herokuapp.com/user/', body)
      .then(response => response)
      .then(result => {
        console.log(result);
        this.props.login({
          email: result.data.email,
          imageName: result.data.imageName,
          lastName: result.data.lastName,
          name: result.data.name,
          role: result.data.role,
          type: result.data.type,
          username: result.data.username,
          id: result.data._id,
        });
      })
      .catch(error => {
        if (error.response.status === 413) {
          Toast.show({
            text: 'File too big, Choose another one please',
            style: {backgroundColor: Colors.accentColor, alignSelf: 'center'},
          });
        } else {
          Toast.show({
            type: 'danger',
            text: 'File too big, Choose another one please',
            textStyle: {alignSelf: 'center'},
          });
        }
      });
  };

  /**************************************************************** */
  render() {
    console.log(this.props);
    return (
      <Container style={{backgroundColor: Colors.backgroundSecond}}>
        <Content>
          <ImageBackground
            style={profileStyle.thumbnail}
            source={{
              uri: 'data:image/jpeg;base64,' + this.props.isLogged.imageName,
            }}>
            <LinearGradient
              colors={['transparent', 'black']}
              locations={[0.4, 1.2]}
              style={profileStyle.linearGradient}>
              <HeaderInTabs {...this.props} />
              <H1 style={profileStyle.Name}>
                {this.props.isLogged.name}
                {'\t'}
                {this.props.isLogged.lastName}
              </H1>
              <H3 style={profileStyle.Role}>{this.props.isLogged.role}</H3>
              <TouchableOpacity
                onPress={() => this.showImagePicker()}
                style={profileStyle.camera}>
                <FontAwesome5
                  size={3 * GlobalSheet.units.vh}
                  name={'camera'}
                  color={Colors.whiteTextColor}
                />
              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>
          <View style={profileStyle.buttonsContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('pastEvents')}
              style={profileStyle.ButtonStyles}>
              <Text style={profileStyle.textInsideBtn}>Past Events</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('pastPolls')}
              style={profileStyle.ButtonStyles}>
              <Text style={profileStyle.textInsideBtn}>Past Polls</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('pastTasks')}
              style={profileStyle.ButtonStyles}>
              <Text style={profileStyle.textInsideBtn}>Past Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => NotificationSetting.open()}
              style={profileStyle.ButtonStyles}>
              <Text style={profileStyle.textInsideBtn}>
                Notification Settings
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}
// var Dropbox = require('dropbox').Dropbox;
// var dbx = new Dropbox({
//   accessToken: tokens.dropBoxApi,
//   fetch: fetch,
// });

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
    login: state => {
      dispatch(loggedIn(state));
    },
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Profile);
