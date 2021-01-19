import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { hasUser } from './src/services/users';
import PrivateStack from './src/views/private/PrivateStack';
import PublicStack from './src/views/public/PublicStack';

export default function App() {
  const [userHasLoggedIn, setUserHasLoggedIn] = useState(false);
  useEffect(
    () => hasUser().then((userLogged) => setUserHasLoggedIn(userLogged)),
    [],
  );

  return (
    <NavigationContainer>
      {userHasLoggedIn ? PrivateStack() : PublicStack()}
    </NavigationContainer>
  );
}
