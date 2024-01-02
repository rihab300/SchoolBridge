import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface MessagesStyles {
  container: ViewStyle;
  header: TextStyle;
  messageList: ViewStyle;
  messageItem: ViewStyle;
  sender: TextStyle;
  message: TextStyle;
}

const messagesStyles = StyleSheet.create<MessagesStyles>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageList: {
    marginBottom: 20,
  },
  messageItem: {
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

export default messagesStyles;