"use client";

import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const propsType = {
    onSave: (task: string) => { }
};

const AddTask = ({ onSave }: typeof propsType) => {
    const [task, setTask] = useState('');

    const handleInputChange = (text: string) => {
        setTask(text);
    };
    return (
        <View >
            <TextInput
                style={styles.input}
                placeholder="Enter task"
                value={task}
                onChangeText={handleInputChange}
            />
            <Button title="Add Task" color="blue" onPress={() => onSave(task)} />
        </View >
    );
};

const styles = StyleSheet.create({
    input: {
        paddingVertical: 10,
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    button: {
        color: 'white',
        backgroundColor: "white",
    }
});

export default AddTask;