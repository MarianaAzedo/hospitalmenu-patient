import { StatusBar } from 'expo-status-bar';
import React, { accessibilityLabel, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import style from '../StyleSheet.css.js';
import day from '../services/date.js';

const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
      {/* trocar por user */}
      <Text style={style.title}>Mariana,</Text>
      <Text style={style.text}>today the menu is,</Text>
      <Text style={style.title}>{day}</Text>
      {/* Button to send to page Breakfast */}
      <TouchableOpacity
        accessibilityLabel="button to see the breakfast menu"
        style={style.button}
        onPress={() => navigation.navigate('Breakfast')}
      >
        <Text style={style.textbutton}>Breakfast</Text>
      </TouchableOpacity>
      {/* Button to send to page Lunch */}
      <TouchableOpacity
        accessibilityLabel="button to see the lunch menu"
        style={style.button}
        onPress={() => navigation.navigate('Lunch')}
      >
        <Text style={style.textbutton}>Lunch</Text>
      </TouchableOpacity>
      {/* Button to send to page Lunch */}
      <TouchableOpacity
        accessibilityLabel="button to see the Evening menu"
        style={style.button}
        onPress={() => navigation.navigate('Evening')}
      >
        <Text style={style.textbutton}>Evening</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
