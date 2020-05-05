import React, {useState} from 'react';
import {Container, Content} from 'native-base';
import EventContainer from '../../components/eventContainer/eventContainer';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import EventModal from '../../modals/eventModal/eventModal';
import {GlobalSheet, Colors} from '../../config';
const pastEvents = [
  {
    _id: '5e8bb2f998571c7a788c62d2',
    name: 'Festival Yoo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit ut aliquam purus. Donec ac odio tempor orci dapibus. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
    date: '1580518800',
    location: 'Monastir',
    createdAt: '2020-04-06T22:53:45.593Z',
    updatedAt: '2020-04-12T20:56:27.431Z',
    __v: 0,
  },
  {
    _id: '5e8fa3b11cc731392c7bf329',
    name: 'Festival Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit ut aliquam purus. Donec ac odio tempor orci dapibus. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
    date: '1580518800',
    location: 'Monastir',
    createdAt: '2020-04-09T22:37:37.131Z',
    updatedAt: '2020-04-09T22:37:37.131Z',
    __v: 0,
  },
];
export default function PastEvents(props) {
  const [eventModalVisible, setEventModal] = useState(false);
  const [eventModalContent, setEventModalContent] = useState({});

  return (
    <Container style={{backgroundColor: Colors.backgroundSecond}}>
      <Content>
        <View
          style={{
            marginLeft: 10 * GlobalSheet.units.vw,
            marginRight: 10 * GlobalSheet.units.vw,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 1 * GlobalSheet.units.vh,
            marginBottom: 1 * GlobalSheet.units.vh,
          }}
        />
        <EventModal
          isVisible={eventModalVisible}
          press={setEventModal}
          content={eventModalContent}
        />
        <FlatList
          data={pastEvents}
          renderItem={({item}) => (
            <EventContainer
              id={item._id}
              name={item.name}
              description={item.description}
              date={item.date}
              location={item.location}
              press={() => {
                setEventModalContent({
                  _id: item._id,
                  name: item.name,
                  description: item.description,
                  date: item.date,
                  location: item.location,
                });
                setEventModal(true);
              }}
            />
          )}
          keyExtractor={item => item._id}
          // ItemSeparatorComponent={renderSeparator}
          // ListEmptyComponent={EmptyList}
        />
      </Content>
    </Container>
  );
}
