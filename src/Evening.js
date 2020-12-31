import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Evening = () => {
  let [menu, setMenu] = useState('');

  useEffect(() => {
    fetch(`http://0.0.0.0:3000/menu`)
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);

  return (
    <View style={style.container}>
      {menu &&
        menu
          .filter((item) => item.description.includes('Evening'))
          .map((item, key) => (
            <View key={key}>
              <Text>{item.description}</Text>
            </View>
          ))}
      <StatusBar style="auto" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Evening;
