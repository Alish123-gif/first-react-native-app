import { StyleSheet, View, ScrollView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';
import Header from '@/components/Header';
import Task from '@/components/Task';
import AddTask from '@/components/AddTask';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([
    { name: 'Task 1: Complete the user registration form', done: false, title: "Register Form" },
    { name: 'Task 2: Implement the search functionality', done: true, title: "Search Functionality" },
    { name: 'Task 3: Refactor the code for better performance', done: false, title: "Refactor Code" },
    { name: 'Task 4: Design and implement the login screen', done: true, title: "Login Screen" },
    { name: 'Task 5: Add validation to the input fields', done: false, title: "Validation" },
    { name: 'Task 6: Create a responsive layout for mobile devices', done: true, title: "Responsive Layout" },
    { name: 'Task 7: Integrate with a third-party API', done: false, title: "Third-party API" },
  ]);

  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const addTask = (task: string): undefined => {
    if (!task) {
      Alert.alert('No Tasks? ', 'Please enter a task', [{ text: 'OK' }]);
    } else {
      setTasks([...tasks, { name: task, done: false, title: task }]);
    }
  }

  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.titleContainer}>
        <Header title={"Home"} />
        <View style={styles.content}>
          <ThemedText>Welcome to the Home Screen!</ThemedText>
          <ThemedText>Here are some tasks you can complete:</ThemedText>
          <ScrollView style={{ width: '100%' }}>
            <AddTask onSave={addTask} />
            {tasks.map((task, index) => (
              <Task key={index} task={task} index={index} toggleTask={toggleTask} />
            ))}

          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});