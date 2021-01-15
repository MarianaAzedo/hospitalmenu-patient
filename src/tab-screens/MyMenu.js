import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { List, RadioButton } from 'react-native-paper';
import day from '../services/date.js';
import style from '../StyleSheet.css.js';
import api from '../services/api';

const MyMenu = () => {
  let [menuroom, setMenuRoom] = useState([]);

  //get method
  useEffect(() => {
    api
      .GET('/menuroom/305/12345', {
        menu: [],
      })
      .then((response) => response.json())
      .then((json) => setMenuRoom(json));
  }, []);
  return (
    <View style={style.container}>
      {menuroom &&
        menuroom
          //.filter((item) => item.menuroom.includes('Breakfast'))
          .map((item, key) => (
            <View key={key}>
              <Text>{JSON.stringify(item)}</Text>
            </View>
          ))}
    </View>
  );
};

export default MyMenu;
