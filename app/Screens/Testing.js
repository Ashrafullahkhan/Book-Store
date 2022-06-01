import React,{useState} from 'react';
import { Text, View,StyleSheet, TextInput } from 'react-native';


import AppTextInput from '../Components/AppTextInput';

function Testing(props) {
   const [name,changeName] =useState("");
   return(

<View> 
       <Text>{name}</Text>
       <TextInput onChangeText={(text) => changeName(text)}></TextInput>
   
   </View>

   )
   
}
const styles = StyleSheet.create({
    
})
export default Testing;