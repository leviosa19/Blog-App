//import liraries
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

import { Context } from '../context/BlogContext'

// create a component
const CreateScreen = ({ navigation }) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { addBlogPost } = useContext(Context)

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={(text) => setTitle(text)} />
            </View>

            <Text style={styles.label}>Enter Content</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    value={content}
                    onChangeText={(content) => setContent(content)} />
            </View>

            <TouchableOpacity 
                style={styles.appButtonContainer} 
                onPress={() => addBlogPost(title, content, () => {
                    navigation.navigate('Index')
                })}
            >
                <Text style={styles.appButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        padding: 5,
        margin: 6,
        marginBottom: 15
    },
    inputView: {
        // paddingHorizontal: 15,
    },
    label: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5,
        paddingTop: 12,
        paddingLeft: 4
    },
    appButtonContainer: {
        backgroundColor: "#219ebc",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 100,
        marginTop: 18
    },
    appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

//make this component available to the app
export default CreateScreen
