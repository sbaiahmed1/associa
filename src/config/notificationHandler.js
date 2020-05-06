import React, {Component, useRef} from 'react';
import PushNotification from 'react-native-push-notification';
import '../assets/sound.mp3';
export default class PushController extends Component {
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    var {nav} = await this.props;
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
        if (nav) {
          if (
            notification.userInteraction ||
            notification['google.sent_time']
          ) {
            console.log(nav);
            nav.navigate('events');
          }
        }

        // process the notification here
      },
      // Android only
      senderID: process.env.FCM_KEY,
      // iOS only
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  render() {
    return null;
  }
}
