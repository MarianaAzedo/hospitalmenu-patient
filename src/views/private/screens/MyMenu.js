import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import style from '../../../StyleSheet.css.js';
import api from '../../../services/api';
import { getUser } from '../../../services/users';

const MyMenu = () => {
  const [menuroom, setMenuRoom] = useState([]);
  const [user, setUser] = useState({});

  //get method
  useEffect(() => {
    const setUserMenu = (user) => {
      api
        .GET(`/menuroom/${user.room}/${user.name}`)
        .then((response) => response.json())
        .then((json) => setMenuRoom(json));
    };

    getUser().then((userPromise) => {
      setUser(userPromise);
      setUserMenu(userPromise);
    });
  }, []);

  return (
    <View style={style.container}>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

export default MyMenu;
