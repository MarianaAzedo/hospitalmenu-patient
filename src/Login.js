import { StatusBar } from 'expo-status-bar';
import React, { accessibilityLabel, useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import style from './StyleSheet.css.js';

// const [name, setName] = useState('');
// const [password, setPassword] = useState('');

const Login = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={style.title2}>Hospital Menu</Text>
      <Text style={style.title}>Login</Text>
      <StatusBar style="auto" />
      <View style={style.inputView}>
        <TextInput
          style={style.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
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
        {/* Button Save */}
        <Button
          style={style.button}
          color="#FF3366"
          mode="contained"
          accessibilityLabel="button save"
        >
          Login
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
