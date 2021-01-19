import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Breakfast from './screens/Breakfast';
import Lunch from './screens/Lunch';
import Evening from './screens/Evening';
import MyMenu from './screens/MyMenu';
import Settings from './screens/Settings';
import style from '../../StyleSheet.css.js';

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

const PrivateStack = () => {
  return (
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
  );
};

export default PrivateStack;
