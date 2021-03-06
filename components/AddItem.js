
import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem = (props) => {
    const [text, setText] = useState ('');

    const saveItem = textValue => setText(textValue);
  return (
    <View>
        <TextInput placeholder='Add Item' style={styles.input} 
            onChangeText={saveItem}
        />
            <TouchableOpacity style={styles.btn} onPress={() => props.addItem(text)} >
                <Text style={styles.btnText}> 
                <Icon name="plus" size={20} />  
                Add Item</Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
 input: {
     height: 60,
     padding: 8,
     fontSize: 16,
 },
 btn: {
     // Light purple background
     backgroundColor: '#c2bad8',
     padding: 9,
     margin: 5,
 },
 btnText: {
     color: 'darkslateblue',
     fontSize: 20,
     textAlign: 'center',
 },
})

export default AddItem;