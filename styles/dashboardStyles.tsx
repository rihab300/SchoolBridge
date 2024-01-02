import { StyleSheet } from 'react-native';

const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default dashboardStyles;
