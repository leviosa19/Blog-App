//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons';

// create a component
const IndexScreen = () => {

    const { state, addBlogPost, deleteBlogPost } = useContext(Context)

    return (
        <View style={styles.container}>
            <Button title="Add Post" onPress={addBlogPost} />
            <Text>Data length: {state.length}</Text>
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <EvilIcons name="trash" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        // borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
        width: '90%'
    }
});

//make this component available to the app
export default IndexScreen;
