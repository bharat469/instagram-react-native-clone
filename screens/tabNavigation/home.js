import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Entypo, FontAwesome5 } from '@expo/vector-icons'
import { Badge } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Stories from '../../components/stories';
import Post from '../../components/post';

const Home = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity>
                    <Entypo name="camera" size={25} color="#fff" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={()=>navigation.navigate('ChatScreen')}>
                    <FontAwesome5 name="facebook-messenger" size={25} color="#fff" />
                    <Badge
                        value="5"
                        status="error"
                        containerStyle={{ position: 'absolute', top: -4, right: -7 }}
                    />
                </TouchableOpacity>
            ),
            headerTitle: () => (
                <Image source={require('../../assets/logo/header.png')} style={styles.headerImg} />
            )

        })
    })
    return (
        <View style={styles.homeContainer}>
            <Stories />
            <Post />
          </View>
    )
}

export default Home

const styles = StyleSheet.create({
    headerImg: {
        width: wp('32%'),
        height: hp('4%')
    },
    homeContainer: {
        flex: 1,
        backgroundColor: '#08090B',
        alignItems: 'center',
    },


})
