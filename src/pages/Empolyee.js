import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
export default Employee = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#86418c", "#f6dcfa"]}
        style={{
          height: "25%",
        }}
      />
      <View style={styles.image}>
        <Image
          style={{ borderRadius: 80 }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=339&q=80",
            height: 160,
            width: 160,
          }}
        />
        <Title>DOg jeee</Title>
        <Text style={styles.prof}> Software Devloper</Text>
      </View>
      <View style={styles.dataContainer}>
        <MaterialIcons name="email" size={30} color="#86418c" />
        <Text style={styles.dataText}>abc123@gmail.com</Text>
      </View>
      <View style={styles.dataContainer}>
        <MaterialIcons name="email" size={30} color="#86418c" />
        <Text style={styles.dataText}>abc123@gmail.com</Text>
      </View>
      <View style={styles.dataContainer}>
        <MaterialIcons name="email" size={30} color="#86418c" />
        <Text style={styles.dataText}>abc123@gmail.com</Text>
      </View>
      <View style={styles.buttons}> 
        <Button
          icon="account-edit"
          mode="contained"
          style={styles.button}
          onPress={() => console.log("Pressed")}
        >
          Edit
        </Button>
        <Button
          icon="delete"
          mode="contained"
          style={styles.button}
          onPress={() => console.log("Pressed")}
        >
          Fire Employee
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignItems: "center",
    marginTop: -87,
  },
  prof: {
    fontSize: 13,
    fontWeight: "700",
    marginTop: 4,
    marginBottom: 50,
  },
  dataContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#e5dae6",
    margin: 8,
    padding: 7,
    borderRadius: 3,
  },
  dataText: {
    fontSize: 13,
    fontWeight: "700",
    marginTop: 4,
  },
  buttons:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      marginTop:20,
      
  },
  button:{
backgroundColor:"#86418c"
  }
});
