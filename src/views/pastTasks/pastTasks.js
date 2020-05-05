import React, {useState} from 'react';
import {Container, Content} from 'native-base';
import TaskModal from '../../modals/taskModal/taskModal';
import {Text, FlatList} from 'react-native';
import {GlobalSheet, Colors} from '../../config';
import TaskContainer from '../../components/taskContainer/taskContainer';

const undoneTasks = [
  {
    _id: '5e99e5c2eac3b9001s7df510e',
    title: 'Collect neses in da',
    content:
      'Hello this is a simple task we need to achieve in order to success our event.',
    checked: true,
  },
  {
    _id: '5e99e5c2eac3b90017df510e',
    title: 'Collect neses in HOOD',
    content:
      'Hello this is a simple task we need to achieve in order to success our event.',
    checked: true,
  },
];
export default function PastTasks(props) {
  const [taskModalVisible, setTaskModal] = useState(false);
  const [taskModalContent, setTaskModalContent] = useState({});

  return (
    <Container style={{backgroundColor: Colors.backgroundSecond}}>
      <Content>
        <TaskModal
          isVisible={taskModalVisible}
          press={setTaskModal}
          content={taskModalContent}
        />
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
      </Content>
    </Container>
  );
}
