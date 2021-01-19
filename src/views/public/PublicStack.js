import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';

const LoginStack = createStackNavigator();
const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator initialRouteName="Login">
      <LoginStack.Screen
        name="Login"
        component={Login}
        option={{
          title: 'Login',
          headerTitleStyle: { alignSelf: 'center' },
        }}
      />
    </LoginStack.Navigator>
  );
};

const PublicStack = () => {
  return <LoginStackScreen />;
};

export default PublicStack;
