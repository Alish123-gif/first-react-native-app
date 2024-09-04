import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';
import Header from '@/components/Header';
import Task from '@/components/Task';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([
    { name: 'Task 1: Complete the user registration form', done: false, title: "Register Form" },
    { name: 'Task 2: Implement the search functionality', done: true, title: "Search Functionality" },
    { name: 'Task 3: Refactor the code for better performance', done: false, title: "Refactor Code" },
    { name: 'Task 4: Design and implement the login screen', done: true, title: "Login Screen" },
    { name: 'Task 5: Add validation to the input fields', done: false, title: "Validation" },
    { name: 'Task 6: Create a responsive layout for mobile devices', done: true, title: "Responsive Layout" },
    { name: 'Task 7: Integrate with a third-party API', done: false, title: "Third-party API" },
    { name: 'Task 8: Write unit tests for the components', done: true, title: "Unit Tests" },
    { name: 'Task 9: Implement a feature to upload files', done: false, title: "Upload Files" },
    { name: 'Task 10: Improve the error handling mechanism', done: true, title: "Error Handling" },
  ]);

  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  return (
    <View style={styles.titleContainer}>
      <Header title={"Home"} />
      <View style={styles.content}>
        <ThemedText>Welcome to the Home Screen!</ThemedText>
        <ThemedText>Here are some tasks you can complete:</ThemedText>
        <ScrollView style={{ width: '100%' }}>
          {tasks.map((task, index) => (
            <Task key={index} task={task} index={index} toggleTask={toggleTask} />
          ))}
        </ScrollView>
      </View>
    </View>
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