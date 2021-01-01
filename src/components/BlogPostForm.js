//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Textarea from 'react-native-textarea';

// create a component
const BlogPostForm = ({ onSubmit, initialValues }) => {

    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title</Text>
            <View style={styles.inputView}>

                <Textarea
                    containerStyle={styles.textareaContainer}
                    style={styles.textarea}
                    onChangeText={(newTitle) => setTitle(newTitle)}
                    defaultValue={title}
                    maxLength={200}
                    placeholder={'Enter Title...'}
                    placeholderTextColor={'#c7c7c7'}
                    underlineColorAndroid={'transparent'}
                />
            </View>

            <Text style={styles.label}>Enter Content</Text>
            <View style={styles.inputView}>
                {/* <TextInput
                style={styles.input}
                value={content}
                onChangeText={(content) => setContent(content)} /> */}
                <Textarea
                    containerStyle={styles.textareaContainer}
                    style={styles.textarea}
                    onChangeText={(newContent) => setContent(newContent)}
                    defaultValue={content}
                    maxLength={5000}
                    placeholder={'Enter Content...'}
                    placeholderTextColor={'#c7c7c7'}
                    underlineColorAndroid={'transparent'}
                />
            </View>

            <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={() => onSubmit(title, content)}
            >
                <Text style={styles.appButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

// Default props
BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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
        marginBottom: 15,
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
    },
    textareaContainer: {
        // height: 180,
        padding: 5,
        marginLeft: 7,
        marginRight: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        backgroundColor: '#fff',
        width: '94%',
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        // height: 170,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center'
    },
});

//make this component available to the app
export default BlogPostForm;
