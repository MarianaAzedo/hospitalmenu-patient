import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { List, RadioButton } from 'react-native-paper';
import day from '../../../services/date.js';
import api from '../../../services/api';
import style from '../../../StyleSheet.css.js';
import { getUser } from '../../../services/users';

const Lunch = () => {
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
        lunch: {
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
        {menu &&
          menu
            .filter((item) => item.description.includes(day + ' Lunch'))
            .map((item, key) => (
              <View key={key}>
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
                    {/* Radio Button Starter*/}
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
                    {/* Radio Button Main*/}
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
                {/* Dessert list */}
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
                    {/* Radio Button Dessert*/}
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
                    {/* Radio Button HotDrinks*/}
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

export default Lunch;
