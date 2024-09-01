import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Header = ({ title }: { title: String }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {

        height: 100,
        width: '100%',
        backgroundColor: 'darkblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;