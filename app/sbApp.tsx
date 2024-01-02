import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';
import MessagesScreen from '../screens/MessagesScreen';
import UserProfileScreen from '../screens/UserProfileScreen'; // Import UserProfileScreen

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  Messages: { messageId: string };
  UserProfile: undefined; // Add UserProfile to RootStackParamList
};

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
