import React from 'react'
import { Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo,AntDesign } from '@expo/vector-icons'


const Login = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.signinContainer}>
                <Image source={require('../assets/logo/logo.png')} style={styles.logoStyle} />
                <View style={styles.formStyle}>
                    <Text style={styles.loginHeading}>Sign in and use more features</Text>
                    <TextInput placeholder="Email or username" style={styles.inputStyle} placeholderTextColor='#fff' />
                    <TextInput placeholder="Password" style={styles.inputStyle} secureTextEntry={true} placeholderTextColor='#fff' />
                    <TouchableOpacity style={styles.signinBtn} onPress={()=>navigation.replace('Tab')}>
                        <Text style={styles.signinText}>Sign in</Text>
                    </TouchableOpacity>
                    <View style={styles.signupStyle}>
                        <Text style={styles.signupText}>Forget your login detail?</Text>
                        <TouchableOpacity style={styles.signupBtn} onPress={() => { navigation.navigate('Register') }}>
                            <Text style={styles.signupBtnText}>Get help signing in</Text>
                        </TouchableOpacity>
                    </View>
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

export default Login

const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,
        backgroundColor: '#131316'
    },
    logoStyle: {
        width: wp('90%'),
        height: hp('20%'),
        alignItems: 'center',
        top: hp('13%')
    },
    formStyle: {
        top: hp('13%'),
        alignItems: 'center'
    },
    loginHeading: {
        color: '#fff',
        fontSize: hp('2.3%'),
        padding: 12
    },

    inputStyle: {
        backgroundColor: 'grey',
        padding: wp('5%'),
        width: wp('80%'),
        margin: 12,
        color: '#fff',
        fontSize: hp('2%'),
        borderRadius: 12
    },
    signinBtn: {
        borderWidth: 1,
        backgroundColor: '#CF2A68',
        padding: hp('2%'),
        width: wp('80%'),
        borderRadius: 12,

    },
    signinText: {
        fontSize: hp('2%'),
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    },
    signupStyle: {
        flexDirection: 'row',
        marginTop: 10
    },
    signupText: {
        color: '#fff'
    },
    signupBtnText: {
        color: '#fff',
        textDecorationLine: 'underline',
        textDecorationColor: '#fff'
    },    facebookSignup: {
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
