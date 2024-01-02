import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface DocumentStyles {
  container: ViewStyle;
  header: TextStyle;
}

const documentStyles: DocumentStyles = StyleSheet.create<DocumentStyles>({
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
});

export default documentStyles;
