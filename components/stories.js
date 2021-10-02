import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import colors from './colors'
import Story1 from '../assets/stories/story1.jpg'
import Story2 from '../assets/stories/story2.jpg'
import Story3 from '../assets/stories/story3.jpg'
import Story4 from '../assets/stories/story4.jpg'
import Story5 from '../assets/stories/story5.jpg'
import { Ionicons } from '@expo/vector-icons';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const stories = [
    {
        name: "bharat",
        source: Story1
    },
    {
        name: "Shubham",
        source: Story2
    },
    {
        name: "Amit",
        source: Story3
    },
    {
        name: "Aakriti",
        source: Story4
    },
    {
        name: "Nitin",
        source: Story5
    },
]
const Stories = () => {

    const renderItem = Item => (
        <LinearGradient
            colors={colors.Gradiant.primary}
            key={Item.name}
            style={styles.linearStyle}
        >
            <TouchableOpacity>
                <View style={styles.storyContainer}>
                    <Image source={Item.source} style={styles.imgStyle} resizeMode="cover" />

                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
    return (

        <View style={styles.stories}>
            <View>

                <TouchableOpacity style={styles.borderStories}>
                    <View style={styles.storyContainer}>
                        <Image source={require('../assets/posts/logos/proPic.jpg')} style={styles.imgStyle} resizeMode="cover" />
                        <Ionicons name="add-circle-sharp" size={30} color="#fff" style={{ bottom: 30, left: 50 }} />
                    </View>
                </TouchableOpacity>

            </View>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                contentContainerStyle={styles.container}
                horizontal
            >
                {stories.map(renderItem)}
            </ScrollView>
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        // paddingTopx: hp('1%'),
        // paddingBottom: hp('0.5%')
    },
    stories: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    linearStyle: {
        width: wp('19%'),
        height: hp('9.2%'),
        borderRadius: 40.15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: wp('2%')
    },

    imgStyle: {
        width: wp('18%'),
        height: hp('9%'),
        borderRadius: 50
    },
    storyContainer: {
        width: wp('18%'),
        height: hp('9%')
    },
    borderStories: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 40.15
    }
})
