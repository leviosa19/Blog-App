//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context } from '../context/BlogContext'

// create a component
const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')

    const { state } = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <View style={styles.container}>
            <Text>{blogPost.title}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default ShowScreen