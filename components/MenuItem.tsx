import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface MenuItemProps {
  title: string;
  onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
