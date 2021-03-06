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
    color: '#FF3366',
    textAlign: 'left',
    fontSize: 20,
    alignItems: 'flex-start',
    fontWeight: 'bold',
    flexDirection: 'row',
  },

  text: {
    paddingVertical: 8,
    color: '#333333',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'normal',
  },

  textbutton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  button: {
    padding: 20,
    marginTop: 10,
    borderRadius: 40,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3366',
  },

  list: {
    padding: 5,
    borderColor: '#C2C2C2',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 40,
    color: '#FF3366',
    marginBottom: 5,
    marginTop: 5,
  },

  inputView: {
    backgroundColor: '#C2C2C2',
    color: '#C2C2C2',
    padding: 20,
    marginTop: 10,
    borderRadius: 40,
  },

  TextInput: {
    width: '100%',
    padding: 5,
    marginLeft: 5,
    color: '#525252',
    fontSize: 16,
  },

  forgot_button: {
    textAlign: 'center',
    height: 30,
    marginBottom: 10,
    marginTop: 20,
    color: '#525252',
    fontSize: 16,
  },

  mymenucontainer: {
    padding: 20,
    borderWidth: 1,
    marginBottom: 10,
  },

  mymenuitem: {
    borderTopWidth: 1,
    marginTop: 10,
    borderColor: '#FF3366',
    width: '100%',
    paddingTop: 10,
  },
});
