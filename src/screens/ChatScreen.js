import { StyleSheet, ImageBackground, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Message } from '../components/Message';
import bg from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json';
import { InputBox } from '../components/InputBox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useEffect } from 'react';

export const ChatScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: route.params.name });
    }, [route.params.name]);

  return (
    <KeyboardAwareScrollView>
        <ImageBackground source={bg} style={styles.bg}>
            <FlatList 
                data={messages} 
                renderItem={({item}) => <Message message={item}/>} 
                style={styles.list} 
            />
            <InputBox />
        </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    list: {
        padding: 10,
    }
})