import { StatusBar } from 'expo-status-bar';
import React, { accessibilityLabel, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import style from './StyleSheet.css.js';
import day from './date.js';

const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={style.title2}>Mariana,</Text>
      <Text style={style.title}>today the menu is,</Text>
      <Text style={style.title2}>{day}</Text>
      {/* Button to send to page Breakfast */}
      <Button
        color="#FF3366"
        mode="contained"
        accessibilityLabel="button to see the breakfast menu"
        style={style.button}
        onPress={() => navigation.navigate('Breakfast')}
      >
        Breakfast
      </Button>
      {/* Button to send to page Lunch */}
      <Button
        color="#FF3366"
        mode="contained"
        accessibilityLabel="button to see the lunch menu"
        style={style.button}
        onPress={() => navigation.navigate('Lunch')}
      >
        Lunch
      </Button>
      {/* Button to send to page Lunch */}
      <Button
        color="#FF3366"
        mode="contained"
        accessibilityLabel="button to see the Evening menu"
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
