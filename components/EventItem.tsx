import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface EventItemProps {
  title: string;
  date: string;
}

const EventItem: FunctionComponent<EventItemProps> = ({ title, date }) => {
  return (
    <View style={eventItemStyles.container}>
      <Text style={eventItemStyles.title}>{title}</Text>
      <Text style={eventItemStyles.date}>{date}</Text>
    </View>
  );
};

interface EventItemStyles {
  container: ViewStyle;
  title: TextStyle;
  date: TextStyle;
}

const eventItemStyles = StyleSheet.create<EventItemStyles>({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 5,
  },
});

export default EventItem;