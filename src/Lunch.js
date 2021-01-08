import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { List, RadioButton, Button, TextInput } from 'react-native-paper';
import day from './date.js';
import style from './StyleSheet.css.js';

const Lunch = () => {
  let [menu, setMenu] = useState('');
  let [startercourse, setStartercourse] = useState('');
  let [maincourse, setMaincourse] = useState('');
  let [dessert, setDessert] = useState('');
  let [hotdrinks, setHotdrinks] = useState('');
  let [comment, setComment] = useState('');
  const [text, setText] = React.useState('');

  useEffect(() => {
    fetch(`http://0.0.0.0:3000/menu`)
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);

  return (
    <View style={style.container}>
      <ScrollView>
        {menu &&
          menu
            .filter((item) => item.description.includes(day + ' Lunch'))
            .map((item, key) => (
              <View key={key}>
                {/* Starter list */}
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
                {/* Main Course list */}
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
                {/* Hot Drinks list */}
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
                {/* Comment */}
                <TextInput
                  label="Comments"
                  style={style.list}
                  value={text}
                  onChangeText={(text) => setText(text)}
                />
                {/* Button Save */}
                <Button
                  style={style.button}
                  color="#FF3366"
                  mode="contained"
                  accessibilityLabel="button save"
                >
                  Save
                </Button>
              </View>
            ))}
      </ScrollView>
    </View>
  );
};

export default Lunch;
