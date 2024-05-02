// ProfileStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Signup from './Signup';
import Welcome from './Welcome';

const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
        navigation={navigation} // Pass navigation prop
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
        navigation={navigation} // Pass navigation prop
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
        navigation={navigation} // Pass navigation prop
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
