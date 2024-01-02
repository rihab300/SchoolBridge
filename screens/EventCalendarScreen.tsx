import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
import EventItem from '../components/EventItem';
import eventCalendarStyles from '../styles/eventCalendarStyles';

const EventCalendarScreen = () => {
  return (
    <View style={eventCalendarStyles.container}>
      <Header title="Event Calendar" />
      
      <EventItem 
        title="School Meeting - Parent-Teacher Conference" 
        date="January 15, 2024" 
      />
      <EventItem 
        title="Final Exams" 
        date="February 3-7, 2024" 
      />
      <EventItem 
        title="Annual Science Fair" 
        date="March 10, 2024" 
      />

    </View>
  );
};

export default EventCalendarScreen;
