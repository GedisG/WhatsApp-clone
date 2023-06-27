import { StyleSheet, TextInput, View } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const InputBox = () => {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    console.warn('Sending a new message', newMessage);

    setNewMessage('');
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <AntDesign name='plus' size={20} color='royalblue' />
      <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} placeholder='textInput' />
      <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color='white' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
  }
})