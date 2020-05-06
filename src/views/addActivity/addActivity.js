/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Icon, Header, Left, Content, Container} from 'native-base';
import {TouchableOpacity, FlatList, Image} from 'react-native';
import {GlobalSheet, Colors} from '../../config';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import TaskContainer from '../../components/taskContainer/taskContainer';
import TaskModal from '../../modals/taskModal/taskModal';
import EventModal from '../../modals/eventModal/eventModal';
import EventContainer from '../../components/eventContainer/eventContainer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HeaderInTabs from '../../components/headerInTabs/headerInTabs';
/*********************************************************** */
const arrow = (
  <FontAwesome5
    color={Colors.secondaryTextColor}
    name={'angle-right'}
    size={2.5 * GlobalSheet.units.vh}
  />
);
/********************************************************** */
const undoneTasks = [
  {
    _id: '5e99e5c2eac3b9001s7df510e',
    title: 'Collect neses in da',
    content:
      'Hello this is a simple task we need to achieve in order to success our event.',
    checked: false,
  },
  {
    _id: '5e99e5c2eac3b90017df510e',
    title: 'Collect neses in HOOD',
    content:
      'Hello this is a simple task we need to achieve in order to success our event.',
    checked: false,
  },
];
const upcomingEvents = [
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
    name: 'Festival Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit ut aliquam purus. Donec ac odio tempor orci dapibus. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
    date: '1592683855',
    location: 'Monastir',
    createdAt: '2020-04-09T22:37:37.131Z',
    updatedAt: '2020-04-09T22:37:37.131Z',
    __v: 0,
  },
];
function MainHome(props) {
  const [taskModalContent, setTaskModalContent] = useState({});
  const [eventModalContent, setEventModalContent] = useState({});
  const [taskModalVisible, setTaskModal] = useState(false);
  const [eventModalVisible, setEventModal] = useState(false);
  /**************************************Upcoming Events ***********/
  function UpcomingEventsView() {
    return upcomingEvents.length !== 0 ? (
      <View>
        <View
          style={{
            marginLeft: 10 * GlobalSheet.units.vw,
            marginRight: 10 * GlobalSheet.units.vw,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 1 * GlobalSheet.units.vh,
            marginBottom: 1 * GlobalSheet.units.vh,
          }}>
          <Text
            style={{
              fontSize: 2.5 * GlobalSheet.units.vh,
              fontFamily: 'Montserrat-Bold',
            }}>
            Upcoming Events
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('events');
            }}
            style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 2.5 * GlobalSheet.units.vh,
                fontFamily: 'Montserrat-ExtraLight',
              }}>
              All Events
            </Text>
            <Text style={{padding: 0.5 * GlobalSheet.units.vh}}>{arrow}</Text>
          </TouchableOpacity>
        </View>
        <EventModal
          isVisible={eventModalVisible}
          press={setEventModal}
          content={eventModalContent}
        />
        <FlatList
          data={upcomingEvents}
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
      </View>
    ) : (
      <View />
    );
  }
  /*******************upcoming Events */
  /********************************undone tasks view */
  function undoneTasksView() {}
  /***********************************undone tasks */
  return (
    <Container style={{backgroundColor: Colors.backgroundSecond}}>
      <Content>
        <HeaderInTabs {...props} />
        <TaskModal
          isVisible={taskModalVisible}
          press={setTaskModal}
          content={taskModalContent}
        />
        <View
          style={{
            marginLeft: 10 * GlobalSheet.units.vw,
            marginRight: 10 * GlobalSheet.units.vw,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 1 * GlobalSheet.units.vh,
            marginBottom: 1 * GlobalSheet.units.vh,
          }}>
          <Text
            style={{
              fontSize: 2.5 * GlobalSheet.units.vh,
              fontFamily: 'Montserrat-Bold',
            }}>
            Upcoming Tasks
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('tasks');
            }}
            style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 2.5 * GlobalSheet.units.vh,
                fontFamily: 'Montserrat-ExtraLight',
              }}>
              All Tasks
            </Text>
            <Text style={{padding: 0.5 * GlobalSheet.units.vh}}>{arrow}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={undoneTasks}
          renderItem={({item}) => (
            <TaskContainer
              id={item._id}
              title={item.title}
              checked={item.checked}
              press={() => {
                setTaskModalContent({
                  _id: item._id,
                  title: item.title,
                  checked: item.checked,
                  content: item.content,
                });
                setTaskModal(true);
              }}
            />
          )}
          keyExtractor={item => item._id}
          // ItemSeparatorComponent={renderSeparator}
          // ListEmptyComponent={EmptyList}
        />
        {<UpcomingEventsView />}
      </Content>
    </Container>
  );
}
const mapStateToProps = state => {
  // console.log(state);
  return {
    isLogged: state.login,
  };
};
export default compose(connect(mapStateToProps))(MainHome);
