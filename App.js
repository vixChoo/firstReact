import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert
} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState ([
    {id: uuidv4(), text: 'Read Book'},
    {id: uuidv4(), text: 'Do Chores'},
    {id: uuidv4(), text: 'Walk Dog'},
]);

const deleteItem = (id) => {
  setItems(previousItems => {
    return previousItems.filter(item => item.id != id);
  });
}

const addItem = (text) => {
  if(!text){
    createAlert('Error', 'Please enter a valid to-do');
  }else{
    setItems(previousItems => {
      return [{id: uuidv4(),text:text}, ...previousItems];
    })
  }
}
  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem ={({item}) => 
        <ListItem item={item} deleteItem={deleteItem} />
      } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
})


export const createAlert = (title, msg) => {
  Alert.alert(
    title,
    msg,
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: true }
  );
}