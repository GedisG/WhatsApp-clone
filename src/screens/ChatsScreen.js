import { ChatListItem } from '../components/ChatListItem'
import { FlatList } from 'react-native';
import chats from '../../assets/data/chats.json';

export const ChatsScreen = () => {
    return <FlatList 
        data={chats} 
        renderItem={({item}) => <ChatListItem chat={item} />}
        style={{ backgroundColor: 'white' }}
    />
}
