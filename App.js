import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItem: 'center'}}>
        <TextInput placeholder="Course Goal" style={{width:'80%', borderBottomColor: 'black', borderBottomWidth:1, padding:10 }}/>
        <Button title="ADD" />
        
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
