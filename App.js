import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableNativeFeedback, 
  SafeAreaView, 
  Button,
  Alert
} from 'react-native';

export default function App() {
console.log("App executed"); 

//const handlePress = () => console.log("Text pressed");

console.log(require('./assets/icon.png'));

  return (
    <SafeAreaView style={styles.container}>
      <Button 
      title="Click Me" 
      color="black"
      onPress={() => Alert.alert("My title", "My Message", [
        {text: "Yes", onPress: () => console.log("Yes pressed")},
        {text: "No", onPress: () => console.log("No pressed")}
        ])} />

    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
