import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';

const LoginStack = createStackNavigator();

const PublicStack = () => {
  return (
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Login',
        headerTitleStyle: { alignSelf: 'center' },
        headerShown: false,
      }}
    />
  );
};

export default PublicStack;
