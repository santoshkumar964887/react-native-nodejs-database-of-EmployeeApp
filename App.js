import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Card} from 'react-native-paper';
import Constant from "expo-constants";
import HomePage from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
   flex: 1,
   backgroundColor: "#fef7ff",
   marginTop:Constant.statusBarHeight

  }
});
