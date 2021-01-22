import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PrivateStack from './src/views/private/PrivateStack';
import Login from './src/views/public/screens/Login';

const Stack = createStackNavigator();

//Navigation between screens
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerTitleStyle: { alignSelf: 'center' },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Private"
          component={PrivateStack}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
