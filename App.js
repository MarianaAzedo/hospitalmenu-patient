import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Breakfast from './src/Breakfast';
import Lunch from './src/Lunch';
import Evening from './src/Evening';
import MyMenu from './src/MyMenu';
import Settings from './src/Settings';

const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();
const MyMenuStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="oi"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Breakfast" component={Breakfast} />
      <HomeStack.Screen name="Lunch" component={Lunch} />
      <HomeStack.Screen name="Evening" component={Evening} />
    </HomeStack.Navigator>
  );
};

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        option={{
          title: 'Settings',
          headerTitleStyle: { alignSelf: 'center' },
        }}
      />
    </SettingsStack.Navigator>
  );
};

const MyMenuStackScreen = () => {
  return (
    <MyMenuStack.Navigator>
      <MyMenuStack.Screen
        name="MyMenu"
        component={MyMenu}
        option={{
          title: 'MyMenu',
          headerTitleStyle: { alignSelf: 'center' },
        }}
      />
    </MyMenuStack.Navigator>
  );
};

export default function App() {
  //Navigations between Screens
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} />
        <Tab.Screen name="MyMenuStackScreen" component={MyMenuStackScreen} />
        <Tab.Screen
          name="SettingsStackScreen"
          component={SettingsStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
