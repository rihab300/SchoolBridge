import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import MessageItem from '../components/MessageItem';
import MessagesStyles from '../styles/MessagesStyles';

const MessagesScreen: FunctionComponent = () => {
  return (
    <View style={MessagesStyles.container}>
      <Header title="Messages" />
      
      <MessageItem sender="John Doe" message="Hello there!" />
      <MessageItem sender="Jane Smith" message="Hi, how are you?" />

      {/* ... */}
    </View>
  );
};

export default MessagesScreen;
