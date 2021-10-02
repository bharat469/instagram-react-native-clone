import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login'
import SignUp from '../screens/signUp';
import Home from '../screens/tabNavigation/home';
import Search from '../screens/tabNavigation/search';
import Upload from '../screens/tabNavigation/upload'
import Notification from '../screens/tabNavigation/notification'
import Account from '../screens/tabNavigation/account'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import ChatScreen from '../screens/chatScreen';
import Messager from '../screens/messager';


const Stack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const homeScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <Stack.Screen name="Instagram" component={Home} options={{
        headerStyle:{backgroundColor:'#1C1E1D'}
      }} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Upload" component={Upload} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Account" component={Account} />
    </HomeStack.Navigator>)
}

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor:'#1C1E1D' },
      tabBarShowLabel: false,
      
    }}>
      <Tab.Screen name="Home" component={homeScreenStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Entypo name="home" size={30} color="#fff" />
            )
          },

        }}
      />
      <Tab.Screen name="Search" component={Search}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <FontAwesome name="search" size={30} color="#fff" />
            )
          },

        }}
      />
      <Tab.Screen name="Upload" component={Upload}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Ionicons name="add-circle" size={40} color="#fff" />
            )
          },

        }} />
      <Tab.Screen name="Notification" component={Notification}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <AntDesign name="heart" size={30} color="#fff" />
            )
          },

        }} />
      <Tab.Screen name="Account" component={Account}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Avatar rounded title="BJ" size="medium" />
            )
          },

        }} />
    </Tab.Navigator>)
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={SignUp} options={{ headerTintColor: '#fff', headerStyle: { backgroundColor: '#131316' } }} />
        <Stack.Screen name="Tab" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen}  />
        <Stack.Screen name="Message" component={Messager}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})
