import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

import Screen from "../Components/Screen";

function BookDetails(props) {
  return (
    <Screen>
      <View style={styles.topDetails}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={styles.image}
            source={require("../assets/0786693412.jpg")}
          />
          <Text>Beautiful World</Text>
        </View>
        <View style={styles.buttons}>
          <View style={{ flexDirection: "row", marginRight: 50 }}>
            <Text>Writen By</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Button title="Download" backgroundColor="dodgerblue" />
            <Button title="Download" backgroundColor="dodgerblue" />
          </View>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.leftBox}>
          <Text>Pages:</Text>
          <Text>Language:</Text>
          <Text>Catagory:</Text>
          <Text>Downloads:</Text>
          <Text>Rate This Book:</Text>
        </View>
        <View style={styles.rightBox}></View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  topDetails: {
    flex: 0.3,
    justifyContent: "space-between",
  },
  details: {
    flex: 0.5,
    flexDirection: "row",
  },
  rightBox: {
    flex: 0.5,
    backgroundColor: "red",
  },
  leftBox: {
    flex: 0.5,
    borderTopWidth: 1,
    borderTopColor: "lightgrey",
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "dodgerblue",
  },
  content: { flexDirection: "row" },
  buttons: {
    flexDirection: "row",
    marginTop: 50,
  },
});
export default BookDetails;
