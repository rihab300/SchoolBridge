import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface DocumentItemProps {
  title: string;
}

const DocumentItem: FunctionComponent<DocumentItemProps> = ({ title }) => {
  return (
    <View style={documentItemStyles.container}>
      <Text style={documentItemStyles.title}>{title}</Text>
    </View>
  );
};

interface DocumentItemStyles {
  container: ViewStyle;
  title: TextStyle;
}

const documentItemStyles = StyleSheet.create<DocumentItemStyles>({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DocumentItem;