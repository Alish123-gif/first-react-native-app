import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Collapsible } from '@/components/Collapsible';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';

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
            <View style={styles.header}>
                <Collapsible title={task.title}>
                    <View style={styles.taskContainer}>
                        <ThemedText style={[styles.taskText, { textDecorationLine: task.done ? 'line-through' : 'none' }]}>
                            {task.name}
                        </ThemedText>
                    </View>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity
                            style={[styles.button, task.done ? styles.buttonUndo : styles.buttonDone]}
                            onPress={() => toggleTask(index)}
                        >
                            <ThemedText style={styles.buttonText}>{task.done ? 'Undo' : 'Done'}</ThemedText>
                        </TouchableOpacity>
                    </View>
                </Collapsible>
                <TouchableOpacity style={styles.deleteButton}>
                    <AntDesign name="delete" size={24} color={Colors.light.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: Colors.light.border,
        borderRadius: 5,
        backgroundColor: Colors.light.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    taskText: {
        width: '80%',
        color: Colors.light.text,
    },
    actionContainer: {
        flexDirection: 'column',
        padding: 0,
        margin: 0,
        alignItems: 'center',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonDone: {
        backgroundColor: Colors.light.primary,
    },
    buttonUndo: {
        backgroundColor: Colors.light.secondary,
    },
    buttonText: {
        color: Colors.light.buttonText,
    },
    deleteButton: {
        marginLeft: 'auto',
        padding: 10,
    },
    deleteIcon: {
        alignItems: "center",
    },
});

export default Task;