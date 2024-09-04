import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Collapsible } from '@/components/Collapsible';
const propsType = {
    task: {
        name: 'Task 1: Complete the user registration form',
        done: false,
        title: "Register Form"
    },
    index: 0,
    toggleTask: (index: number) => { }
};
const Task = ({ task, index, toggleTask }: typeof propsType) => {
    return (
        <View key={index} style={styles.list}>
            <Collapsible title={task.title}>
                <View style={styles.taskContainer}>
                    <ThemedText style={[styles.taskText, { textDecorationLine: task.done ? 'line-through' : 'none' }]}>
                        {task.name}
                    </ThemedText>
                    <Button
                        title={task.done ? 'Undo' : 'Done'}
                        onPress={() => toggleTask(index)}
                    />
                </View>
            </Collapsible>
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    taskText: {
        width: '80%',
    },
});

export default Task;