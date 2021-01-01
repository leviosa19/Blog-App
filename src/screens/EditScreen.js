//import liraries
import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

// create a component
const EditScreen = ({ navigation }) => {

    const { state } = useContext(Context)
    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'))

    return (
            <BlogPostForm 
                initialValues={{ title: blogPost.title, content: blogPost.content }}
                onSubmit={(title, content) => {
                    
                }}
            />
    );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default EditScreen;
