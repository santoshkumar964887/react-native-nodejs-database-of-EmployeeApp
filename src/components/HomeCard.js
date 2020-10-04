import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import Constant from "expo-constants";

export default function HomeCard() {
  return (
    <View style={styles.card}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg",
            width: 70,
            height: 70,
          }}
        />
      </View>

      <View>
        <Text style={styles.title}>jgkjsgdklfdknsfkjlnfdkfgkklfgk</Text>
        <Text style={styles.dic}>sgjhgjfgjfgjkltklhtklkgkk</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    elevation: 6,
    backgroundColor: "#e5dae6",
    margin: 10,
    borderRadius: 3,
  },
  image: {
    borderRadius: 35,
    margin: 2,
  },
  title: {
    paddingTop: 15,
    fontSize: 14,
    fontWeight: "700",
    color: "#3d3f40",
  },
  dic: {
    fontSize: 12,
    fontWeight: "700",
    color: "#6f7070",
  },
});
