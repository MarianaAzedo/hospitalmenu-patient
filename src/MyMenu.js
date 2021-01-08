import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { List, RadioButton, Button, TextInput } from 'react-native-paper';
import day from './date.js';
import style from './StyleSheet.css.js';

const MyMenu = () => {
  let [menuroom, setMenuRoom] = useState('');

  useEffect(() => {
    fetch(`http://0.0.0.0:3000/menuroom`)
      .then((response) => response.json())
      .then((json) => setMenuRoom(json));
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.text}>This is choosen menu for</Text>
      <Text style={style.title}>{day}</Text>
      {menuroom &&
        menuroom
          .filter((item) => item.description.includes('Breakfast'))
          .map((item, key) => (
            <View key={key}>
              {/* Breakfast list */}
              <List.AccordionGroup>
                <List.Accordion
                  style={style.list}
                  titleStyle={{
                    color: '#FF3366',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}
                  title="Breakfast"
                  id={'item '}
                ></List.Accordion>
              </List.AccordionGroup>
            </View>
          ))}
    </View>
  );
};

export default MyMenu;
