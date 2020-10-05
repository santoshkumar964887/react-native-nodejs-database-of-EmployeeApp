import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import HomeCard from "../components/HomeCard";
import { FAB } from "react-native-paper";
import Model from "./Model";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function Home() {
  return (
    <View style={styles.container}>
      {/* {/* <SafeAreaView>
            <FlatList
            data={}
            />
        </SafeAreaView>  
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />*/}
      <Model/>
      <FAB
        style={styles.fab}
        theme={{ colors: { accent: "#86418c" } }}
        icon="plus"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});
