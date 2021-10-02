import React, { useState } from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image, FlatList } from 'react-native'
import { Avatar } from 'react-native-elements'
import Logo1 from '../assets/posts/logos/logo1.png'
import Logo2 from '../assets/posts/logos/logo2.jpg'
import Logo3 from '../assets/posts/logos/logo3.png'
import Logo4 from '../assets/posts/logos/logo4.png'
import Logo5 from '../assets/posts/logos/logo5.png'
import Post1 from '../assets/posts/posts/post1.jpg'
import Post2 from '../assets/posts/posts/post2.png'
import Post3 from '../assets/posts/posts/post3.png'
import Post4 from '../assets/posts/posts/post4.png'
import Post5 from '../assets/posts/posts/post5.png'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const postList = [
    {
        accountName: "HighBro",
        accountPic: Logo1,
        post: Post1,
        caption: 'chilling with friends 😄😉',
        views: "1002",
        comments:'89'
    },
    {
        accountName: "Bharat joshi",
        accountPic: Logo2,
        post: Post2,
        caption: 'Yara da group 🤑🥳',
        views: "1202",
        comments:'95'
    },
   
    {
        accountName: "sidhu_moosewala ✅",
        accountPic: Logo4,
        post: Post4,
        caption: 'YOU EITHER AT THE TABLE OR ON THE MENU 👑📀',
        views: "122092",
        comments:'1025'
    },
    {
        accountName: "savii.in",
        accountPic: Logo5,
        post: Post5,
        caption: 'ਵੰਡਦੇ ਆ ਯਾਦਾਂ ਨੀਂਦਾ ਖੋ ਲੈਨੇ ਆ🌪',
        views: "122",
        comments:'25'
    },
]



const Post = () => {
    const [like, setLike] = useState(false)
    const [save, setsave] = useState(false)

    const changeSave = () => {
        return setsave(!save)
    }
    const changeLike = () => {
        return setLike(!like)
    }
    const renderItem = ({ item }) => (
        <View style={styles.postContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.accountName}>
                    <Image source={item.accountPic} style={styles.AccountPic} />
                    <Text style={styles.userName}>{item.accountName}</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={24} color="#fff" />
            </View>
            <View style={styles.postData}>
                <Image source={item.post} style={styles.postFeed} resizeMode="cover" />
            </View>
            <View style={styles.icons}>
                <View style={styles.leftAligned}>
                    <TouchableOpacity onPress={changeLike} style={styles.leftBtn}>
                        {like ? <AntDesign name="hearto" size={24} color="#fff" /> : <AntDesign name="heart" size={24} color="red" />}
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.leftBtn}>
                        <FontAwesome name="comment-o" size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftBtn}>
                        <Ionicons name="paper-plane-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.RightBtn} onPress={changeSave}>
                    {
                        save ? <Ionicons name="bookmarks" size={24} color="red" /> : <Ionicons name="bookmarks-outline" size={24} color="#fff" />
                    }

                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.viewsStyle}>{item.views} views</Text>
                <View style={styles.captionsStyle}>
                    <Text style={styles.accountNameStyle}>{item.accountName}</Text>
                    <Text style={styles.captionText}>{item.caption}</Text>
                </View>
                <Text style={styles.comments}>View all {item.comments} comments</Text>
            </View>
        </View>
    )
    return (
        <FlatList
            data={postList}
            keyExtractor={item => item.accountName}
            renderItem={renderItem}
            style={styles.containerPost}
            showsVerticalScrollIndicator={false}
        />

    )
}

export default Post

const styles = StyleSheet.create({
    containerPost: {
        // flex: 1,
        top: hp('2.5%')
    },
    postContainer: {
        width: wp('100%'),
        marginVertical: 8,
        borderRadius: 18

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12
    },

    accountName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        color: '#fff',
        padding: 12
    },
    AccountPic: {
        width: wp('8%'),
        height: hp('4%'),
        borderRadius:50
    },
    postFeed: {
        width: wp('100%'),
        height: hp('50%')
    },
icons:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:12
},
leftAligned:{
    flexDirection:'row',
    alignItems:'center'
},
leftBtn:{
    margin:7
},
viewsStyle:{
    color:'#fff',
    fontWeight:'600'
},
captionsStyle:{
    flexDirection:'row',
    alignItems:'center'
},
accountNameStyle:{
    color:'#fff',
    fontWeight:'700'
},
captionText:{
    color:'#fff',
    padding:12,
    fontWeight:'500'
},
comments:{
    color:'#fff'
},
textContainer:{
    left:wp('6%')
}

})
