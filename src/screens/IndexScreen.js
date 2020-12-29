//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext'

// create a component
const IndexScreen = () => {

    const { data, addBlogPosts } = useContext(BlogContext)

    return (
        <View style={styles.container}>
            <Text>IndexScreen</Text>
            <Button title="Add Post" onPress={addBlogPosts} />
            <FlatList
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) =>
                    <Text>{item.title}</Text>
                }
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default IndexScreen;
