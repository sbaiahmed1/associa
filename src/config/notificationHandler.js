import React, {Component, useRef} from 'react';
import '../assets/sound.mp3';
import messaging from '@react-native-firebase/messaging';
export default class PushController extends Component {
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    // var {nav} = await this.props;
    await messaging().requestPermission();
    messaging()
      .getToken()
      .then(res => console.log(res))
      .catch(error => console.log(error));
    messaging().onMessage(async remoteMessage => {
      alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
  }

  render() {
    return null;
  }
}
