import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
import PTRView from 'react-native-pull-to-refresh';
import Icon from 'react-native-vector-icons/FontAwesome';
import TaskContainer from '../../components/taskContainer/taskContainer';
import taskStyle from './tasksStyle';
import {Colors, GlobalSheet} from '../../config';
import {Container, Content} from 'native-base';
import {WaveIndicator} from 'react-native-indicators';
import TaskModal from '../../modals/taskModal/taskModal';
import AsyncStorage from '@react-native-community/async-storage';
import jwt from 'react-native-pure-jwt';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//****************************************** */
function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
//********************************************* */
const done = <FontAwesome5 name={'check-double'} />;
function Tasks(props) {
  let [, setState] = useState();
  const [isLoading, setLoading] = useState(true);
  const [modalVisible, setModal] = useState(false);
  const [DATA, fillData] = useState({
    done: [],
    undone: [],
  });
  const [refreshFlat, setRefreshFlat] = useState(false);
  const [ModalContent, setModalContent] = useState({});
  function handleUpdate() {
    //passing empty object will re-render the component
    setState({});
  }
  var getData = async () => {
    const token = await AsyncStorage.getItem('@token');
    if (token !== null && token) {
      if (jwt.decode(token, 'secret')) {
        var options = {
          accept: '*/*',
          headers: {
            token: token,
          },
        };
        var url = 'https://nodebackend-pfe.herokuapp.com/task';
        axios
          .get(url, options)
          .then(Response => {
            let datas = Response.data;
            DATA.done = [];
            DATA.undone = [];
            console.log(datas);
            datas.map(data => {
              if (data.checked === true) {
                DATA.done.push(data);
              } else {
                DATA.undone.push(data);
              }
            });
            console.log('undone : ' + DATA.undone);
            console.log('done : ' + DATA.done);
            setLoading(false);
          })
          .catch(err => {
            console.log(err);
            // eslint-disable-next-line no-alert
            alert('Session expired TASKS');
            props.navigation.navigate('login');
          });
      } else {
        console.log(false);
        // eslint-disable-next-line no-alert
        alert('Session expired here');
        this.props.navigation.navigate('login');
      }
    } else {
      alert('Session expired here');
      props.navigation.navigate('login');
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <WaveIndicator animating={isLoading} />
  ) : (
    <Container style={{backgroundColor: Colors.backgroundSecond}}>
      <Content>
        <PTRView
          onRefresh={() => {
            getData();
            handleUpdate();
          }}
          colors={Colors.textColor}>
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              elevation: 0,
              backgroundColor: 'transparent',
              padding: 2 * GlobalSheet.units.vh,
            }}
            onPress={() => props.navigation.toggleDrawer()}>
            <Icon type={'FontAwesome5'} name="bars" size={25} />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 5 * GlobalSheet.units.vw,
              fontSize: 2.5 * GlobalSheet.units.vh,
            }}>
            Upcoming Tasks
          </Text>
          <FlatList
            data={DATA.undone}
            renderItem={({item}) => (
              <TaskContainer
                id={item._id}
                title={item.title}
                checked={item.checked}
                press={() => {
                  setModalContent({
                    _id: item._id,
                    title: item.title,
                    checked: item.checked,
                  });
                  setModal(true);
                }}
              />
            )}
            keyExtractor={item => item._id}
            ItemSeparatorComponent={renderSeparator}
            ListEmptyComponent={EmptyList}
          />
          <Text
            style={{
              marginLeft: 5 * GlobalSheet.units.vw,
              fontSize: 2.5 * GlobalSheet.units.vh,
            }}>
            Done Tasks
          </Text>
          <TaskModal
            isVisible={modalVisible}
            press={setModal}
            content={ModalContent}
            dismiss={getData()}
          />
          <FlatList
            data={DATA.done}
            renderItem={({item}) => (
              <TaskContainer
                id={item._id}
                title={item.title}
                checked={item.checked}
                press={() => {
                  setModalContent({
                    _id: item._id,
                    title: item.title,
                    checked: item.checked,
                    content: item.content,
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
function renderSeparator() {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        // height: 3 * GlobalSheet.units.vh,
        width: '100%',
        backgroundColor: Colors.backgroundSecond,
      }}
    />
  );
}
function EmptyList() {
  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: 'white',
        height: 25 * GlobalSheet.units.vw,
        width: 75 * GlobalSheet.units.vw,
        alignSelf: 'center',
        borderRadius: 32,
        elevation: 5,
        margin: 3 * GlobalSheet.units.vw,
      }}>
      <Text style={{textAlign: 'center', padding: 6 * GlobalSheet.units.vw}}>
        All Done {done} {'\n'}You have no pending tasks
      </Text>
    </TouchableOpacity>
  );
}
export default Tasks;
