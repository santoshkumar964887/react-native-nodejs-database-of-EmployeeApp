import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default Employee=()=>{
    return(
        <View style={styles.container}>
           
               <LinearGradient 
               colors={["#86418c","#f6dcfa"]}
               style={{
                height:"25%",
              }}
               />
               <View style={styles.image}>
               <Image style={{borderRadius:80}} source={{uri:"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=339&q=80",height:160,width:160}}/>
               </View>
            
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        alignItems:"center",
        marginTop:-87
    }
})