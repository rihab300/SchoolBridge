import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import DocumentItem from '../components/DocumentItem';
import  DocumentStyles  from '../styles/documentStyles';

const DocumentSharingScreen: FunctionComponent = () => {
  return (
    <View style={DocumentStyles.container}>
      <Header title="Document Sharing" />
      
      <DocumentItem title="Report Card" />
      <DocumentItem title="Class Schedule" />
      <DocumentItem title="Circulars" />
      <DocumentItem title="Educational Documents" />
    </View>
  );
};

export default DocumentSharingScreen;
