//import liraries
import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { Context } from '../context/BlogContext'

// create a component
const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')

    const { state } = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>{blogPost.title}</Text>

            {/* Social media icons */}
            <View style={styles.socialIcons}>
                <TouchableOpacity>
                    <FontAwesome5 name="twitter" size={22} color="#757575" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="facebook" size={22} color="#757575" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="linkedin" size={22} color="#757575" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="bookmark" size={22} color="#757575" />
                </TouchableOpacity>
            </View>

            <View style={styles.profileContainer}>
                <Image style={styles.profileImage} source={{ uri: "https://picsum.photos/536/354" }}/>
                <View style={styles.profileInfo}>
                    <Text style={styles.profileInfo_Name}>Chandler Muriel Bing</Text>
                    <Text style={styles.profileInfo_Date}>Jan 01, 2021 · 5 min Read</Text>
                </View>
            </View>

            <Text style={styles.content}>{blogPost.content}</Text>
        </ScrollView>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <Feather style={styles.editIcon} name="edit" size={24} color="black" />
            </TouchableOpacity>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 8,
        flex: 1,
        backgroundColor: '#fff',
    },
    editIcon: {
        paddingRight: 12
    },
    title: {
        fontWeight: '600',
        fontSize: 32,
        marginVertical: 5
    },
    content: {
        fontSize: 16,
        marginVertical: 16
    },
    socialIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 15,
    },
    profileImage: {
        width: 48,
        height: 48,
        borderRadius: 50,
        marginLeft: 4
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 12
    },
    profileInfo: {
        justifyContent: 'center',
        paddingLeft: 12
    },
    profileInfo_Name: { 
        fontSize: 16, 
        fontWeight: '600' 
    },
    profileInfo_Date: { 
        color: '#757575',
        fontSize: 13 
    },
});

//make this component available to the app
export default ShowScreen