
import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Navigation from './navigation/navigation';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content"/>
      <Navigation/>
    </>
  );
}

