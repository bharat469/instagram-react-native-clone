import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Avatar, ListItem } from 'react-native-elements';



const Name = [
    {
        name: 'Bharatjoshi',
        avatar_url: require('../assets/posts/logos/logo2.jpg'),
        message: 'Aur bhai kya haal he'
    },
    {
        name: 'Sidhu_moossewala ',
        avatar_url: require('../assets/posts/logos/logo4.png'),
        message: 'Bhai karle yar gana mere sath'
    },
    {
        name: 'HighBro',
        avatar_url: require('../assets/posts/logos/logo1.png'),
        message: 'bhai koi memes to dede yr '
    },
    {
        name: 'Savi.in',
        avatar_url: require('../assets/posts/logos/logo5.png'),
        message: 'xyxasasasaaddaaa'
    },
    {
        name: 'clever Programmer',
        avatar_url: require('../assets/posts/logos/logo3.png'),
        message: 'Liked your work bharat'
    },
    {
        name: 'Sidhu_moossewala ',
        avatar_url: require('../assets/posts/posts/post4.png'),
        message: 'Bhai karle yar gana mere sath'
    },
    {
        name: 'Savi Panesar',
        avatar_url: require('../assets/posts/posts/post5.png'),
        message: 'bhai koi memes to dede yr '
    },
    {
        name: 'HighBro',
        avatar_url: require('../assets/posts/posts/post1.jpg'),
        message: 'bhai koi memes to dede yr '
    },
]

const ChatScreen = ({ navigation }) => {
    const [click, setClick] = useState(false)
    useEffect(() => {
        navigation.setOptions({
            headerBackTitle: '',
            headerTitle: 'Chats'
        })
    })
    const ChatMessage = () => {
        // navigation.navigate('Message')
        setClick(!click)
    }

    return (
        <View style={styles.chatContainer}>
            {
                Name.map((item, index) => {
                    return (
                        <TouchableOpacity style={styles.ChatsBtn} onPress={ChatMessage}>

                            <ListItem  >
                                <Avatar
                                    title={item.name[0]}
                                    source={item.avatar_url}
                                    rounded
                                    size='large'
                                />
                                <ListItem.Content>
                                    <ListItem.Title style={styles.nameStyle}>{item.name}</ListItem.Title>
                                    <ListItem.Subtitle style={{  fontWeight:click?'500':'900'}}>{item.message}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        </TouchableOpacity>
                    )
                })
            }

        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,

    },
    nameStyle: {
        color: '#000',
        fontWeight: '700'
    },
  
})
