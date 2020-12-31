//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context } from '../context/BlogContext'

// create a component
const CreateScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>CreateScreen</Text>
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default CreateScreen
