import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface UserProfileStyles {
  container: ViewStyle;
  header: TextStyle;
  profileItem: ViewStyle;
  label: TextStyle;
  value: TextStyle;
}

const userProfileStyles = StyleSheet.create<UserProfileStyles>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    marginTop: 5,
  },
});

export default userProfileStyles;
