import React, { useState } from "react";
import { Text, View, StyleSheet,Modal } from "react-native";
import { TextInput,Button } from "react-native-paper";
export default Model = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const[salary,setSalary]=useState("");
  // const[name,setName]=useState("");
  const [model, setModel] = useState(false);
  return (
    <View>
      <TextInput
        style={styles.input}
        label="Name"
        value={name}
        mode="outlined"
        theme={themeColor}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        mode="outlined"
        theme={themeColor}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        label="Pnone No"
        value={phone}
        keyboardType="number-pad"
        mode="outlined"
        theme={themeColor}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        label="Salary"
        value={salary}
        mode="outlined"
        theme={themeColor}
        onChangeText={(text) => setSalary(text)}
      />
      

     
    </View>
  );
};
const themeColor = {
  colors: {
    primary: "#86418c",
  },
};
const styles = StyleSheet.create({
  input: {
    margin: 10,
  },
  uploadIcon:{
      margin:10

  },
  modelView:{
     
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around"
     
      
  },
  modelContainer:{
    position:"absolute",
    bottom:1,
    margin:10

  },
  modelButton:{
      width:140,
       margin:15
  }
});
