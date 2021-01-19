import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { List, RadioButton } from 'react-native-paper';
import style from '../../../StyleSheet.css.js';
import api from '../../../services/api';
import day from '../../../services/date.js';
import { getUser } from '../../../services/users';

const Evening = () => {
  let [eggdishes, setEggdishes] = useState('');
  let [servewith, setServewith] = useState('');
  let [startercourse, setStartercourse] = useState('');
  let [maincourse, setMaincourse] = useState('');
  let [dessert, setDessert] = useState('');
  let [hotdrinks, setHotdrinks] = useState('');
  const [menu, setMenu] = React.useState('');
  const [user, setUser] = useState({});

  //post method
  const handleSubmit = () => {
    api
      .POST('/menuroom', {
        evening: {
          eggdishes,
          servewith,
          startercourse,
          maincourse,
          dessert,
          hotdrinks,
        },
        userid: user.name,
        roomid: user.room,
      })
      .then((response) => response.json())
      .then((path) => {
        console.log(path);
      });
  };

  //get method
  useEffect(() => {
    api
      .GET('/menu')
      .then((response) => response.json())
      .then((json) => setMenu(json));
    getUser().then((userPromise) => setUser(userPromise));
  }, []);

  return (
    <View style={style.container}>
      <ScrollView>
        {/* Calling rout from API */}
        {menu &&
          menu
            .filter((item) => item.description.includes(day + ' Evening'))
            .map((item, key) => (
              <View key={key}>
                {/* List Accordion Egg Dishes*/}
                <List.AccordionGroup>
                  <List.Accordion
                    style={style.list}
                    titleStyle={{
                      color: '#FF3366',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                    title="Egg Dishes"
                    id={'item '}
                  >
                    {/* RadioButtonEggDishes*/}
                    <RadioButton.Group
                      onValueChange={(eggdishes) => setEggdishes(eggdishes)}
                      value={eggdishes}
                    >
                      {item.eggdishes.map((eggdishesItem, eggdishesKey) => (
                        <RadioButton.Item
                          label={eggdishesItem.name}
                          value={eggdishesItem.name}
                          key={eggdishesKey}
                          color="#FF3366"
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* List Accordion Serve with*/}
                <List.AccordionGroup>
                  <List.Accordion
                    style={style.list}
                    titleStyle={{
                      color: '#FF3366',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                    title="Serve with"
                    id={'item '}
                  >
                    {/* RadioButton Serve with*/}
                    <RadioButton.Group
                      onValueChange={(servewith) => setServewith(servewith)}
                      value={servewith}
                    >
                      {item.servewith.map((servewithItem, servewithKey) => (
                        <RadioButton.Item
                          label={servewithItem.name}
                          value={servewithItem.name}
                          key={servewithKey}
                          color="#FF3366"
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* List Accordion Starter*/}
                <List.AccordionGroup>
                  <List.Accordion
                    style={style.list}
                    titleStyle={{
                      color: '#FF3366',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                    title="Starter Course"
                    id={'item '}
                  >
                    {/* RadioButton Starter*/}
                    <RadioButton.Group
                      onValueChange={(startercourse) =>
                        setStartercourse(startercourse)
                      }
                      value={startercourse}
                    >
                      {item.startercourse.map(
                        (startercourseItem, startercourseKey) => (
                          <RadioButton.Item
                            label={startercourseItem.name}
                            value={startercourseItem.name}
                            key={startercourseKey}
                            color="#FF3366"
                          />
                        ),
                      )}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* List Accordion Main Course*/}
                <List.AccordionGroup>
                  <List.Accordion
                    style={style.list}
                    titleStyle={{
                      color: '#FF3366',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                    title="Main Course"
                    id={'item '}
                  >
                    {/* RadioButton Main Course*/}
                    <RadioButton.Group
                      onValueChange={(maincourse) => setMaincourse(maincourse)}
                      value={maincourse}
                    >
                      {item.maincourse.map((maincourseItem, maincourseKey) => (
                        <RadioButton.Item
                          label={maincourseItem.name}
                          value={maincourseItem.name}
                          key={maincourseKey}
                          color="#FF3366"
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* List Accordion Dessert*/}
                <List.AccordionGroup>
                  <List.Accordion
                    style={style.list}
                    titleStyle={{
                      color: '#FF3366',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                    title="Dessert"
                    id={'item '}
                  >
                    {/* List Accordion RadioButton Dessert*/}
                    <RadioButton.Group
                      onValueChange={(dessert) => setDessert(dessert)}
                      value={dessert}
                    >
                      {item.dessert.map((dessertItem, dessertKey) => (
                        <RadioButton.Item
                          label={dessertItem.name}
                          value={dessertItem.name}
                          key={dessertKey}
                          color="#FF3366"
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* List Accordion Hot Drinks*/}
                <List.AccordionGroup>
                  <List.Accordion
                    style={style.list}
                    titleStyle={{
                      color: '#FF3366',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                    title="Hot Drinks"
                    id={'item '}
                  >
                    {/* RadioButton Hot Drinks*/}
                    <RadioButton.Group
                      onValueChange={(hotdrinks) => setHotdrinks(hotdrinks)}
                      value={hotdrinks}
                    >
                      {item.hotdrinks.map((hotdrinksItem, hotdrinksKey) => (
                        <RadioButton.Item
                          label={hotdrinksItem.name}
                          value={hotdrinksItem.name}
                          key={hotdrinksKey}
                          color="#FF3366"
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* Button Save Submit*/}
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={style.button}
                  accessibilityLabel="button send"
                >
                  <Text style={style.textbutton}>Send</Text>
                </TouchableOpacity>
              </View>
            ))}
      </ScrollView>
    </View>
  );
};

export default Evening;
