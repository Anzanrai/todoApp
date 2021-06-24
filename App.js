import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Task from './components/Task';

export default App = () => {
  const [task, setTask] = useState();
  const [taskRepos, setTaskRepo] = useState([]);
  useEffect(() => {});
  const handleAddTask = () => {
    // console.log(taskRepos);
    Keyboard.dismiss();
    setTaskRepo([...taskRepos, task]);
    setTask(null);
  };

  const completeTask = index => {
    const updatedTasks = [...taskRepos];
    updatedTasks.splice(index, 1);
    setTaskRepo(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        {taskRepos.map((task, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task taskDescription={task} />
            </TouchableOpacity>
          );
        })}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder={'Add your task.'}
          value={task}
          onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  items: {},
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#55BCF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: '#55BCF6',
  },
});
