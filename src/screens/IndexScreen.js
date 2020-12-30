//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext'

// create a component
const IndexScreen = () => {

    const { data, addBlogPost } = useContext(BlogContext)

    return (
        <View style={styles.container}>
            <Text>IndexScreen</Text>
            <Button title="Add Post" onPress={addBlogPost} />
            <Text>Data length: {data.length}</Text>
            <FlatList
                data={data}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => { return <Text>{item.title}</Text> }
                }
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
});

//make this component available to the app
export default IndexScreen;
