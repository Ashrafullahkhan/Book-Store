import React from 'react';
import { View ,StyleSheet, TextInput} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function AppTextInput({icon , ...otherProps}) {
    return (
       <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={"grey"} style={styles.icon}></MaterialCommunityIcons>} 
           <TextInput style={styles.textInput} {...otherProps}></TextInput>
       </View>
    );
}
const styles = StyleSheet.create({
    container:
    {
        width:'100%',
        borderRadius:25,
        flexDirection:'row',
        backgroundColor: 'lightgrey',
        padding:15,
        marginVertical:10,


    },
    textInput:
    {
      
        fontSize:18,
        color:"#0c0c0c",
       
        
    },
    icon:{
        marginTop: 4,
        marginRight:10,
    }
    
})
export default AppTextInput;