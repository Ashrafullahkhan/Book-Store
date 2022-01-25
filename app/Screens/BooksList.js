import React from 'react';
import { FlatList ,StyleSheet} from 'react-native';
import AppTextInput from '../Components/AppTextInput';
import ListView from '../Components/ListView';
import Screen from '../Components/Screen'

const Books=[
    {
      id:1,
      name:"Education",
      date: "1/1/2020",
      language:"English",
      image: require("../assets/0786693412.jpg")
    },
    {
      id:2,
      name:"Chemistry",
      date: "1/6/2020",
      language:"English",
      image: require("../assets/0786693412.jpg")
    },
    {
      id:3,
      name:"Math",
      date: "4/5/2020",
      language:"English",
      image: require("../assets/0786693412.jpg")
    },
    {
        id:4,
        name:"Pashto",
        date: "4/5/2020",
        language:"Pashto",
        image: require("../assets/0786693412.jpg")
      }
  
  ];
function BooksList(props) {
    return (
       <Screen>
         <AppTextInput icon={"text-box-search"}  placeholder="Search For Book"></AppTextInput>
          <FlatList
        style={styles.container}
        data={Books}
        keyExtractor={Books=> Books.id.toString()}
        renderItem={({item})=><ListView title={item.name} subTitle={item.date} image={item.image} language={item.language} onPress={()=> console.log("hI")}/>}
        
        >
        </FlatList>
       </Screen>
    );
}
const styles = StyleSheet.create({
 
})

export default BooksList;