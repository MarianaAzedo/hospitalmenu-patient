import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { shouldUseActivityState, ActivityState } from 'react-native-screens';
import Home from './src/Home';
import Breakfast from './src/Breakfast';
import Lunch from './src/Lunch';
import Evening from './src/Evening';
import MyMenu from './src/MyMenu';
import Settings from './src/Settings';
import Login from './src/Login';
import style from './src/StyleSheet.css.js';

const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();
const MyMenuStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Hospital Menu"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Breakfast" component={Breakfast} />
      <HomeStack.Screen style={style.title2} name="Lunch" component={Lunch} />
      <HomeStack.Screen
        style={style.title2}
        name="Evening"
        component={Evening}
      />
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

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'menu-sharp' : 'menu-outline';
            } else {
              iconName = focused ? 'restaurant-sharp' : 'restaurant-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FF3366',
          inactiveTintColor: '#828282',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Menu" component={MyMenuStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
