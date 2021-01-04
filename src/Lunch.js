import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, RadioButton, Button } from 'react-native-paper';
import day from './date.js';

const Lunch = () => {
  let [menu, setMenu] = useState('');
  let [startercourse, setStartercourse] = useState('');
  let [maincourse, setMaincourse] = useState('');
  let [dessert, setDessert] = useState('');
  let [hotdrinks, setHotdrinks] = useState('');

  useEffect(() => {
    fetch(`http://0.0.0.0:3000/menu`)
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);

  return (
    <View style={style.container}>
      <View>
        {menu &&
          menu
            .filter((item) => item.description.includes(day + ' Lunch'))
            .map((item, key) => (
              <View key={key}>
                {/* Starter list */}
                <List.AccordionGroup>
                  <List.Accordion title="Starter Course" id={'item '}>
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
                          />
                        ),
                      )}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* Main Course list */}
                <List.AccordionGroup>
                  <List.Accordion title="Main Course" id={'item '}>
                    <RadioButton.Group
                      onValueChange={(maincourse) => setMaincourse(maincourse)}
                      value={maincourse}
                    >
                      {item.maincourse.map((maincourseItem, maincourseKey) => (
                        <RadioButton.Item
                          label={maincourseItem.name}
                          value={maincourseItem.name}
                          key={maincourseKey}
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* Dessert list */}
                <List.AccordionGroup>
                  <List.Accordion title="Dessert" id={'item '}>
                    <RadioButton.Group
                      onValueChange={(dessert) => setDessert(dessert)}
                      value={dessert}
                    >
                      {item.dessert.map((dessertItem, dessertKey) => (
                        <RadioButton.Item
                          label={dessertItem.name}
                          value={dessertItem.name}
                          key={dessertKey}
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* Hot Drinks list */}
                <List.AccordionGroup>
                  <List.Accordion title="Hot Drinks" id={'item '}>
                    <RadioButton.Group
                      onValueChange={(hotdrinks) => setHotdrinks(hotdrinks)}
                      value={hotdrinks}
                    >
                      {item.hotdrinks.map((hotdrinksItem, hotdrinksKey) => (
                        <RadioButton.Item
                          label={hotdrinksItem.name}
                          value={hotdrinksItem.name}
                          key={hotdrinksKey}
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* Button Save */}
                <Button mode="contained">Save</Button>
              </View>
            ))}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Lunch;
