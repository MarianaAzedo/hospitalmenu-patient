import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import style from '../StyleSheet.css.js';

const Settings = () => {
  return (
    <View style={style.container}>
      {/* Button Logout */}
      <Button
        style={style.button}
        color="#FF3366"
        mode="contained"
        accessibilityLabel="button save"
      >
        Logout
      </Button>
    </View>
  );
};

export default Settings;
