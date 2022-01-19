
import { StyleSheet, View, Button, TextInput, SafeAreaView, Alert, Platform, PlatformColor, Text } from 'react-native';
import AppButton from './app/Components/AppButton';


export default function App() {


  return (

    <View style={styles.container}>
      <AppButton title="Log in" onPress={() => console.log("Button worked")} color2="green"></AppButton>
    </View>
  );
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
})


