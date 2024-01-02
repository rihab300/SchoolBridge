import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface DashboardStyles {
  container: ViewStyle;
  header: TextStyle;
  menuItem: ViewStyle;
  menuText: TextStyle;
}

const dashboardStyles = StyleSheet.create<DashboardStyles>({
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
  },
});

export default dashboardStyles;