import React from 'react';
import { ImageBackground, StyleSheet, Button, View, Text, Image } from 'react-native';

function WelcomeScreen(props) {
    return (


        <ImageBackground style={styles.BackGroundimage} source={require('../assets/wall.jpg')}>
            <Image style={styles.images} source={require("../assets/logo.png")}></Image>
            <Text style={{ color: "white", alignSelf: "center", marginBottom: 400, }}>Welcome To My New App</Text>

            <View>
                <Button color="red" title="Log In" />
                <Button title="Sign In" />
                <Text>ahmad</Text>
            </View>
        </ImageBackground >

    );
}
const styles = StyleSheet.create({
    BackGroundimage:
    {

        flex: 1,
        paddingBottom: 10,
        justifyContent: "flex-end",

    },
    buttonwe: {
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    images:
    {
        width: 100,
        height: 100,
        alignSelf: "center",

    }
})
export default WelcomeScreen;