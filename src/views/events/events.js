/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Icon, Header, Left, Content, Container} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {Colors, GlobalSheet} from '../../config';
import {SafeAreaView} from 'react-native';
import PTRView from 'react-native-pull-to-refresh';
import {FlatList} from 'react-native-gesture-handler';
import EventContainer from '../../components/eventContainer/eventContainer';
import EventModal from '../../modals/eventModal/eventModal';
import TaskModal from '../../modals/taskModal/taskModal';
import HeaderInTabs from '../../components/headerInTabs/headerInTabs';
const DATA = [
  {
    _id: '5e8bb2f998571c7a788c62d2',
    name: 'Festival Yoo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit ut aliquam purus. Donec ac odio tempor orci dapibus. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
    date: '1561061455',
    location: 'Monastir',
    createdAt: '2020-04-06T22:53:45.593Z',
    updatedAt: '2020-04-12T20:56:27.431Z',
    __v: 0,
  },
  {
    _id: '5e8fa3b11cc731392c7bf329',
    name: 'hello',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit ut aliquam purus. Donec ac odio tempor orci dapibus. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
    date: '1592683855',
    location: 'Monastir',
    createdAt: '2020-04-09T22:37:37.131Z',
    updatedAt: '2020-04-09T22:37:37.131Z',
    __v: 0,
  },
];

function Events(props) {
  const [ModalContent, setModalContent] = useState({});
  let [, setState] = useState();
  const [modalVisible, setModal] = useState(false);
  const [events, setEvents] = useState({
    past: [],
    upcoming: [],
  });
  const separateDataByStamp = async () => {
    let dateNow = Math.floor(new Date().getTime() / 1000.0);
    events.upcoming = [];
    events.past = [];
    await DATA.map(single => {
      if (single.date > dateNow) {
        events.upcoming.push(single);
      } else {
        events.past.push(single);
      }
      console.log('upcoming :' + events.upcoming);
      console.log('past :' + events.past);
    });
  };
  useEffect(() => {
    separateDataByStamp();
    // console.log(props.route.name);
    return () => {
      console.log(props.navigation.dangerouslyGetParent().isFocused());
      console.log('unmounting');
    };
  });
  function handleUpdate() {
    //passing empty object will re-render the component
    setState({});
  }
  return (
    <Container style={{backgroundColor: 'transparent'}}>
      <Content>
        <PTRView
          onRefresh={() => {
            separateDataByStamp();
            handleUpdate();
          }}>
          <HeaderInTabs {...props} />
          <Text
            style={{
              marginLeft: 10 * GlobalSheet.units.vw,
              fontSize: 2.5 * GlobalSheet.units.vh,
              fontFamily: 'Montserrat-Bold',
              paddingBottom: 3 * GlobalSheet.units.vh,
              paddingTop: 1 * GlobalSheet.units.vh,
            }}>
            Upcoming Events
          </Text>
          <EventModal
            isVisible={modalVisible}
            press={setModal}
            content={ModalContent}
            dismiss={separateDataByStamp()}
          />
          <FlatList
            data={events.upcoming}
            renderItem={({item}) => (
              <EventContainer
                id={item._id}
                name={item.name}
                description={item.description}
                date={item.date}
                location={item.location}
                press={() => {
                  setModalContent({
                    _id: item._id,
                    name: item.name,
                    description: item.description,
                    date: item.date,
                    location: item.location,
                  });
                  setModal(true);
                }}
              />
            )}
            keyExtractor={item => item._id}
            // ItemSeparatorComponent={renderSeparator}
            ListEmptyComponent={EmptyList}
          />
          <Text
            style={{
              marginLeft: 10 * GlobalSheet.units.vw,
              fontSize: 2.5 * GlobalSheet.units.vh,
              fontFamily: 'Montserrat-Bold',
              paddingBottom: 3 * GlobalSheet.units.vh,
              paddingTop: 1 * GlobalSheet.units.vh,
            }}>
            Past Events
          </Text>
          <FlatList
            data={events.past}
            renderItem={({item}) => (
              <EventContainer
                id={item._id}
                name={item.name}
                description={item.description}
                date={item.date}
                location={item.location}
                press={() => {
                  setModalContent({
                    _id: item._id,
                    name: item.name,
                    description: item.description,
                    date: item.date,
                    location: item.location,
                  });
                  setModal(true);
                }}
              />
            )}
            keyExtractor={item => item._id}
            ListEmptyComponent={EmptyList}
          />
        </PTRView>
      </Content>
    </Container>
  );
}
function EmptyList() {
  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: 'white',
        height: 15 * GlobalSheet.units.vh,
        width: 75 * GlobalSheet.units.vw,
        alignSelf: 'center',
        borderRadius: 32,
        elevation: 5,
        margin: 3 * GlobalSheet.units.vw,
      }}>
      <Text
        style={{
          textAlign: 'center',
          padding: 10 * GlobalSheet.units.vw,
          fontWeight: 'bold',
        }}>
        You have no Events.
      </Text>
    </TouchableOpacity>
  );
}
export default Events;
