import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>{title}</Text>
    </View>
  );
};

interface HeaderStyles {
  container: ViewStyle;
  title: TextStyle;
}

const headerStyles = StyleSheet.create<HeaderStyles>({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
