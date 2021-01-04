import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import day from './date.js';

const MyMenu = () => {
  let [menuroom, setMenuRoom] = useState('');

  useEffect(() => {
    fetch(`http://0.0.0.0:3000/menuroom`)
      .then((response) => response.json())
      .then((json) => setMenuRoom(json));
  }, []);
  console.log(menuroom);

  return (
    <View>
      <Text>My Menu</Text>
    </View>
  );
};

export default MyMenu;
