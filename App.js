import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button,Alert } from 'react-native';
import Inventory from './components/Inventory';
import LocationAccess from './components/location-access';

export default function App() {
  const fnOnPress = () =>{
    Alert.alert(`Time is now : ${new Date().toLocaleTimeString()} `);
  }
  return (
    <View style={styles.container}>
      <Text>Welcome to Vazhar Creators Demo App</Text>
      <StatusBar style="auto" />
      <Button title="Submit" onPress={fnOnPress}>Submit</Button>
      <LocationAccess></LocationAccess>
     <Inventory></Inventory>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
