import React from "react";
import { FlatList, StyleSheet } from "react-native";
import AppTextInput from "../Components/AppTextInput";
import ListView from "../Components/ListView";
import Screen from "../Components/Screen";

import Books from "../Data/Data";
function BooksList(props) {
  return (
    <Screen>
      <AppTextInput
        icon={"text-box-search"}
        placeholder="Search For Book"
      ></AppTextInput>
      <FlatList
        style={styles.container}
        data={Books}
        keyExtractor={(Books) => Books.id.toString()}
        renderItem={({ item }) => (
          <ListView
            title={item.name}
            subTitle={item.date}
            image={item.image}
            language={item.language}
            onPress={() => console.log("hI")}
          />
        )}
      ></FlatList>
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default BooksList;
