import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import style from '../../../StyleSheet.css.js';
import api from '../../../services/api';
import { storeDataUser } from '../../../services/users';

const Login = () => {
  const [name, setName] = useState('Alberto Ribeiro');
  const [password, setPassword] = useState('pass1234');

  const authenticate = () => {
    api
      .POST('/authenticate', {
        name,
        password,
      })
      .then((response) => response.json())
      .then((user) => {
        if (user[0]) storeDataUser(user[0]);
      });
  };
  return (
    <View style={style.container}>
      <Text style={style.title2}>Hospital Menu</Text>
      <Text style={style.title}>Login</Text>
      <StatusBar style="auto" />
      <View style={style.inputView}>
        <TextInput
          style={style.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={style.inputView}>
        <TextInput
          style={style.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={style.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        {/* Button Save Submit*/}
        <TouchableOpacity
          onPress={authenticate}
          style={style.button}
          accessibilityLabel="button send"
        >
          <Text style={style.textbutton}>Login</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
