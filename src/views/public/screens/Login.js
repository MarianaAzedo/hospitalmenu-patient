import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import style from '../../../StyleSheet.css.js';
import api from '../../../services/api';
import { storeDataUser, hasUser } from '../../../services/users';

const Login = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const keepInLoginScreen = route.params?.keepInLoginScreen ?? false;
  const [userHasLoggedIn, setUserHasLoggedIn] = useState(false);

  useEffect(() => {
    if (!keepInLoginScreen) {
      hasUser().then(
        (userLogged) => userLogged && navigation.navigate('Private'),
      );
    }
    return () => {};
  }, [userHasLoggedIn]);

  //Post Method
  const authenticate = () => {
    api
      .POST('/authenticate', {
        name,
        password,
      })
      .then((response) => response.json())
      .then((user) => {
        if (user[0]) {
          storeDataUser(user[0]);
          setUserHasLoggedIn(true);
        }
      });
  };
  return (
    <View style={style.container}>
      <Text style={style.title2}>Hospital Menu</Text>
      <Text style={style.title}>Login</Text>
      <StatusBar style="auto" />
      <View style={style.inputView}>
        {/* Imput Name */}
        <TextInput
          style={style.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={style.inputView}>
        {/* Imput Password */}
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
