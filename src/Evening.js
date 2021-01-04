import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, RadioButton, Button } from 'react-native-paper';
import day from './date.js';

const Evening = () => {
  let [menu, setMenu] = useState('');
  let [eggdishes, setEggdishes] = useState('');
  let [servewith, setServewith] = useState('');
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
      {menu &&
        menu
          .filter((item) => item.description.includes(day + ' Evening'))
          .map((item, key) => (
            <View key={key}>
              {/* Egg Dishes list */}
              <List.AccordionGroup>
                <List.Accordion title="Egg Dishes" id={'item '}>
                  <RadioButton.Group
                    onValueChange={(eggdishes) => setEggdishes(eggdishes)}
                    value={eggdishes}
                  >
                    {item.eggdishes.map((eggdishesItem, eggdishesKey) => (
                      <RadioButton.Item
                        label={eggdishesItem.name}
                        value={eggdishesItem.name}
                        key={eggdishesKey}
                      />
                    ))}
                  </RadioButton.Group>
                </List.Accordion>
              </List.AccordionGroup>
              {/* Serve with list */}
              <List.AccordionGroup>
                <List.Accordion title="Serve with" id={'item '}>
                  <RadioButton.Group
                    onValueChange={(servewith) => setServewith(servewith)}
                    value={servewith}
                  >
                    {item.servewith.map((servewithItem, servewithKey) => (
                      <RadioButton.Item
                        label={servewithItem.name}
                        value={servewithItem.name}
                        key={servewithKey}
                      />
                    ))}
                  </RadioButton.Group>
                </List.Accordion>
              </List.AccordionGroup>
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

export default Evening;
