import { ContactListItem } from '../components/ContactListItem'
import { FlatList } from 'react-native';
import chats from '../../assets/data/chats.json';

export const ContactsScreen = () => {
  return (
    <FlatList 
        data={chats} 
        renderItem={({item}) => <ContactListItem user={item.user} />}
        style={{ backgroundColor: 'white' }}
    />
  )
}
