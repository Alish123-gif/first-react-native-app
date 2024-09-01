import { Image, StyleSheet, Platform, Button, View, TextInput, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { Collapsible } from '@/components/Collapsible';
import Header from '@/components/Header';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([
    { name: 'Task 1: Complete the user registration form', done: false },
    { name: 'Task 2: Implement the search functionality', done: true },
    { name: 'Task 3: Refactor the code for better performance', done: false },
    { name: 'Task 4: Design and implement the login screen', done: true },
    { name: 'Task 5: Add validation to the input fields', done: false },
    { name: 'Task 6: Create a responsive layout for mobile devices', done: true },
    { name: 'Task 7: Integrate with a third-party API', done: false },
    { name: 'Task 8: Write unit tests for the components', done: true },
    { name: 'Task 9: Implement a feature to upload files', done: false },
    { name: 'Task 10: Improve the error handling mechanism', done: true },
  ]);
  return (
    <View style={styles.titleContainer}>
      <Header title={"Home"} />
      <View style={styles.content}>
        <ThemedText>Welcome to the Home Screen!</ThemedText>
        <ThemedText>Here are some tasks you can complete:</ThemedText>
        <ScrollView>
          {tasks.map((task, index) => (
            <View key={index} style={styles.list}>
              <Collapsible title={"task " + index} >
                <ThemedText style={{ textDecorationLine: task.done ? 'line-through' : 'none', width: '80%' }}>
                  {task.name}
                </ThemedText>
                <View style={{ width: '20%' }}>
                  <Button
                    title={task.done ? 'Undo' : 'Done'}
                    onPress={() => {
                      const newTasks = [...tasks];
                      newTasks[index].done = !newTasks[index].done;
                      setTasks(newTasks);
                    }}
                  />
                </View>
              </Collapsible>
            </View>
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
    justifyContent: 'center',
    marginTop: 50,
  },
  content: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  }
});
