//import liraries
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm';

// create a component
const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context)

    return (
        <BlogPostForm
            onSubmit={(title, content) => {
                addBlogPost(title, content, () => navigation.navigate('Index'))
            }}
        />
    );
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default CreateScreen
