import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
function AppButton({ title, onPress, color2 }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appbutton, { backgroundColor: color2 }} />
        <Text style={styles.text}>{title}</Text>
        </TouchableOpacity >
    );
}
const styles = StyleSheet.create({
    appbutton:
    {
        backgroundColor: "tomato",
        width: "100%",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
    },
    text:
    {
        fontStyle: "normal",
        fontWeight: "bold",
        color: "white",
        fontSize: 18,


    }

})
export default AppButton;