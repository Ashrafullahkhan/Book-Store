import React from 'react';
import { View,StyleSheet } from 'react-native';

function ListSwiping(props) {
    return (
    <View style={styles.Swiping} ></View>
    );
}
const styles = StyleSheet.create({
    Swiping:{
        backGroundColor:"red",
        borderTopEndRadius:20,
        borderBottomRightRadius:20
    }
})
export default ListSwiping;