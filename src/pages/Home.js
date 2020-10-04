import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,FlatList,SafeAreaView} from 'react-native';
import HomeCard from '../components/HomeCard';
import Model from './Model';
export default function Home() {
  return (
    <View style={styles.container}>
         {/* <SafeAreaView>
            <FlatList
            data={}
            />
        </SafeAreaView>  */}
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      {/* <Model/> */}

    </View>
  );
}

const styles = StyleSheet.create({
    
  
});
