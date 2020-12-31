import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import style from './StyleSheet.css.js';

const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text>Hi "user", today de menu is, "Monday."</Text>
      {/* Button to send to page Breakfast */}
      <Button
        color="blue"
        mode="contained"
        style={style.button}
        onPress={() => navigation.navigate('Breakfast')}
      >
        Breakfast
      </Button>
      {/* Button to send to page Lunch */}
      <Button
        color="blue"
        mode="contained"
        style={style.button}
        onPress={() => navigation.navigate('Lunch')}
      >
        Lunch
      </Button>
      {/* Button to send to page Lunch */}
      <Button
        color="blue"
        mode="contained"
        style={style.button}
        onPress={() => navigation.navigate('Evening')}
      >
        Evening
      </Button>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
