import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import ProfileItem from '../components/ProfileItem';
import  UserProfileStyles from '../styles/userProfileStyles';

const UserProfileScreen: FunctionComponent = () => {
  return (
    <View style={UserProfileStyles.container}>
      <Header title={''} /> 
      
      <ProfileItem label="Name" value="John Doe" />
      <ProfileItem label="Role" value="Teacher" />
      <ProfileItem label="Email" value="johndoe@example.com" />
    </View>
  );
};

export default UserProfileScreen;
