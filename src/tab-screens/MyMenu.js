import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { List, RadioButton } from 'react-native-paper';
import day from '../services/date.js';
import style from '../StyleSheet.css.js';
import api from '../services/api';

const MyMenu = () => {
  let [menuroom, setMenuRoom] = useState('');

  //get method
  useEffect(() => {
    api
      .GET('/menuroom', {
        menu: [],
      })
      .then((response) => response.json())
      .then((json) => setMenuRoom(json));
  }, []);
  return (
    <View style={style.container}>
      {menuroom &&
        menuroom
          .filter((item) => item.menu.includes('Breakfast'))
          .map((item, key) => (
            <View key={key}>
              {/* Breakfast list */}
              <List
                style={style.list}
                titleStyle={{
                  color: '#FF3366',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
                title="Breakfast"
                id={'item '}
              ></List>
            </View>
          ))}
    </View>
  );
};

export default MyMenu;
