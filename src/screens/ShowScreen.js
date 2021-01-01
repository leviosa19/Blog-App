//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';
// create a component
const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')

    const { state } = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <View style={styles.container}>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <Feather style={styles.addIcon} name="edit" size={24} color="black" />
            </TouchableOpacity>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    addIcon: {
        paddingRight: 12
    }
});

//make this component available to the app
export default ShowScreen