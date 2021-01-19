import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { List, RadioButton } from 'react-native-paper';
import day from '../../../services/date.js';
import style from '../../../StyleSheet.css.js';
import api from '../../../services/api';

const MyMenu = () => {
  const [menuroom, setMenuRoom] = useState([]);

  //get method
  useEffect(() => {
    api
      .GET('/menuroom/305/12345')
      .then((response) => response.json())
      .then((json) => setMenuRoom(json));
  }, []);

  return (
    <View style={style.container}>
      {menuroom &&
        menuroom.map((item, key) => (
          <View key={key}>
            {item.menu.map((menu, index) => (
              <View style={style.mymenucontainer}>
                <Text style={style.title}>{Object.keys(menu)[0]}</Text>
                {Object.values(menu).map((val) => (
                  <Text>
                    {Object.values(val)
                      .filter(Boolean)
                      .map((menuitem) => (
                        <View style={style.mymenuitem}>
                          <Text style={style.text}>{menuitem}</Text>
                        </View>
                      ))}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        ))}
    </View>
  );
};

export default MyMenu;
