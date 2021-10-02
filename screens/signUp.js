import React, { useLayoutEffect } from 'react'
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Entypo,AntDesign } from '@expo/vector-icons'

const SignUp = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: '',
        })
    }, [navigation])
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.signUpForm}>
                <Image source={require('../assets/logo/signup.png')} style={styles.signupImage} />
                <View style={styles.signUpContainer}>
                    <TextInput placeholder="Enter Email" style={styles.inputBox} placeholderTextColor="#fff" />
                    <TextInput placeholder="Enter Password" style={styles.inputBox} placeholderTextColor="#fff" />
                    <TouchableOpacity style={styles.registerBtn}>
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.facebookSignup}>
                    <TouchableOpacity style={styles.fbLoginBtn}>
                        <Entypo name="facebook-with-circle" size={29} color="#fff" />
                        <Text style={styles.fbLogin}>Login with faceBook</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textOr}>Or</Text>
                <View style={styles.GoogleSignup}>
                    <TouchableOpacity style={styles.fbLoginBtn}>
                        <AntDesign name="google" size={29} color="#fff" />
                        <Text style={styles.fbLogin}>Login with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SignUp

const styles = StyleSheet.create({
    signUpForm: {
        flex: 1,
        backgroundColor: '#131316'
    },
    signUpContainer: {
        alignItems: 'center',
        top: hp('8%')
    },
    inputBox: {
        backgroundColor: 'grey',
        padding: wp('5%'),
        width: wp('80%'),
        margin: 12,
        color: '#fff',
        fontSize: hp('2%'),
        borderRadius: 12
    },
    registerBtn: {
        borderWidth: 1,
        backgroundColor: '#CF2A68',
        padding: hp('2%'),
        width: wp('80%'),
        borderRadius: 12,
    },
    registerText: {
        textAlign: 'center',
        fontSize: hp('2.2%'),
        color: '#fff',
        fontWeight: '600'
    },
    signupImage: {
        width: wp('30%'),
        height: hp('15%'),
        left: wp('34%'),
        top: hp('6%')
    },
    facebookSignup: {
        top: hp('17%'),
        alignItems: 'center'
    },
    GoogleSignup: {
        top: hp('22%'),
        alignItems: 'center'
    },
    fbLoginBtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    fbLogin: {
        color: '#fff',
        marginLeft: wp("2%"),
        fontSize: hp('2%')

    },
    textOr: {
        color: '#fff',
        top: hp('20%'),
        textAlign: 'center',
        fontSize: hp('2.4%')

    }
})
