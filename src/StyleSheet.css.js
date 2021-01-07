import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 24,
    justifyContent: 'center',
  },

  title: {
    paddingVertical: 8,
    color: '#333333',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'normal',
  },
  title2: {
    paddingVertical: 8,
    color: '#FF3366',
    textAlign: 'left',
    fontSize: 25,
    alignItems: 'flex-start',
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  button: {
    flex: 0.1,
    padding: 20,
    marginTop: 20,
  },
  list: {
    flex: 0.1,
    padding: 10,
    marginTop: 10,
  },
});
