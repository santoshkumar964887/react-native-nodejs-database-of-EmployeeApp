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
       <Button style={styles.uploadIcon}   theme={themeColor} icon="upload" mode="contained" onPress={() => setModel(true)}>
   Upload Image
  </Button>
  <Button style={styles.uploadIcon}   theme={themeColor} icon="content-save" mode="contained" onPress={() =>console.log("santosh")}>
  Save
  </Button>
  <Modal
  animationType="slide"
  visible={model}
  transparent={true}
  onRequestClose={()=>setModel(false)}
  >
      <View style={styles.modelContainer}> 
          <View style={styles.modelView}>
      <Button style={styles.modelButton}   theme={themeColor} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Camera
  </Button>
  <Button style={styles.modelButton}   theme={themeColor} icon="image-area" mode="contained" onPress={() => console.log('Pressed')}>
    Gallery
  </Button>
  </View>
  <Button    theme={themeColor} onPress={() => setModel(false)}>
    Cancel
  </Button>
      </View>

  </Modal>

     
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
