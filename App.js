import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  //array of objects w key and value properties
  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, { 
      id: Math.random().toString(), value:enteredGoal}]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value ={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} //data to output
        renderItem={itemData => ( //fx to render data
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    padding: 50, 
    width:'80%',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    flex: 1
  },
  listItem:{
    padding:10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: 'black',
    borderWidth: 1

  }
});
