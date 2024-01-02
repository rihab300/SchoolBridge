import React, { FunctionComponent, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import axios from 'axios'; 

interface ProfileItemProps {
  label: string;
  value: string;
}

const ProfileItem: FunctionComponent<ProfileItemProps> = ({ label, value }) => {
  const [profileData, setProfileData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api');
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <View style={profileItemStyles.container}>
      <Text style={profileItemStyles.label}>{label}</Text>
      {profileData[value] !== undefined && (
        <Text style={profileItemStyles.value}>{profileData[value]}</Text>
      )}
    </View>
  );
};

const profileItemStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    marginTop: 5,
  },
});

export default ProfileItem;
