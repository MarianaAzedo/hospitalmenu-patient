import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import style from '../../../StyleSheet.css.js';
import { removeUser } from '../../../services/users';

const Settings = () => {
  const handleLogout = () => {
    removeUser();
  };

  return (
    <View style={style.container}>
      {/* Button Logout */}
      <TouchableOpacity
        onPress={handleLogout}
        style={style.button}
        accessibilityLabel="Logout"
      >
        <Text style={style.textbutton}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
