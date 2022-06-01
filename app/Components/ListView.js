import React from 'react';
import { View,StyleSheet,Image,Text } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors, {color} from '../config/colors'

function ListView({title,subTitle,image,language,onPress}) {
    return (
        <TouchableHighlight
        underlayColor={"light-grey"}
        
        
        onPress={onPress}
        >
       <View style={styles.container}>
        <Image style={styles.Image}source={image}/>
        <View style={{marginTop:15}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subTitle}</Text>
            <Text style={styles.subtitle}>{language}</Text>
        </View>
       </View>
       </TouchableHighlight>
    );
}


const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        borderWidth:1,
        backgroundColor:"#FAFAEB",
    borderColor:"lightblue",
    borderRadius:20,
    marginTop:2
        
        
    },
    Image:{
        width: 70,
        height: 70,
        borderRadius:10,
        margin:10,
    },
    subtitle:
    {
        color: "grey"
    },
    title:
    {
        
        fontWeight:"bold"
    },

    
})
export default ListView;