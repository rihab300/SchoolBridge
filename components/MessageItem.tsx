import React, { FunctionComponent, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import axios from 'axios';

interface MessageItemProps {
  sender: string;
  message: string;
}

const MessageItem: FunctionComponent<MessageItemProps> = ({ sender, message }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={messageItemStyles.container}>
      <Text style={messageItemStyles.sender}>{sender}</Text>
      <Text style={messageItemStyles.message}>{message}</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

const messageItemStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sender: {
    fontWeight: 'bold',
  },
  message: {
    marginTop: 5,
  },
});

export default MessageItem;
