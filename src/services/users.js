import AsyncStorage from '@react-native-async-storage/async-storage';

//1. Salvar um usuário na sessão
export const storeDataUser = async (user) => {
  const stringValue = JSON.stringify(user);
  await AsyncStorage.setItem('userdata', stringValue);
};

//2. Ver se existe um usuário logado
export const hasUser = async () => {
  const user = await AsyncStorage.getItem('userdata');
  if (user) return true;
  return false;
};

//3. Recuperar usuário logado, caso tenha um.
export const getUser = async () => {
  const user = await AsyncStorage.getItem('userdata');
  try {
    return JSON.parse(user);
  } catch (error) {
    console.error('Cannot get user', error);
  }
};

//4. Remover um usuário da sessão - Logout
export const removeUser = async () => {
  AsyncStorage.clear();
};
