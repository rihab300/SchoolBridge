import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import { useNavigation } from '@react-navigation/native'; 
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Messages: undefined;
  Assignments: undefined;
};

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Messages' | 'Assignments'>;

const DashboardScreen = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const navigateToMessages = () => {
    navigation.navigate('Messages');
  };

  const navigateToAssignments = () => {
    navigation.navigate('Assignments');
  };

  return (
    <View>
      <Header title={''} />
      
      <MenuItem title="Messages" onPress={navigateToMessages} />
      <MenuItem title="Assignments" onPress={navigateToAssignments} />
    </View>
  );
};

export default DashboardScreen;
