import React, {Component} from 'react';
import {
  View,
  Text,
  Card,
  CardItem,
  Body,
  Content,
  Container,
  Header,
  Title,
  Left,
  Icon,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {GlobalSheet} from '../../config';

class MembershipStatus extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{flexDirection: 'row', flex: 1}}>
            <TouchableOpacity
              style={{
                elevation: 0,
                backgroundColor: 'transparent',
                padding: 2 * GlobalSheet.units.vh,
              }}
              onPress={() => {
                this.props.navigation.navigate('home');
              }}>
              <Icon name="md-arrow-back" />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',
                marginLeft: 28 * GlobalSheet.units.vw,
                marginRight: 'auto',
                fontSize: 3 * GlobalSheet.units.vh,
              }}>
              Payment
            </Text>
          </View>
          <Card>
            <CardItem>
              <Icon name={'university'} type={'FontAwesome5'} />
            </CardItem>
            <CardItem>
              <Body>
                <Text>Hello</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default MembershipStatus;
