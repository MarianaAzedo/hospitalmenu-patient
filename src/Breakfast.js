import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, RadioButton, Button, TextInput } from 'react-native-paper';
import style from './StyleSheet.css.js';

const Breakfast = () => {
  let [menu, setMenu] = useState('');
  let [juice, setJuice] = useState('');
  let [fruit, setFruit] = useState('');
  let [cereals, setCereals] = useState('');
  let [hotbreakfast, setHotbreakfast] = useState('');
  let [breads, setBreads] = useState('');
  let [spreads, setSpreads] = useState('');
  let [hotdrinks, setHotdrinks] = useState('');
  const [text, setText] = React.useState('');
  let [comment, setComment] = useState('');

  useEffect(() => {
    fetch(`http://0.0.0.0:3000/menu`)
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);

  return (
    <View style={style.container}>
      <ScrollView>
        <Text style={style.text}>Please, fill this prior to tomorrow.</Text>
        {menu &&
          menu
            .filter((item) => item.description.includes('Breakfast'))
            .map((item, key) => (
              <View key={key}>
                {/* Juices list */}
                <List.AccordionGroup>
                  <List.Accordion
                    style={style.list}
                    titleStyle={{
                      color: '#FF3366',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                    title="Juices"
                    id={'item '}
                  >
                    <RadioButton.Group
                      onValueChange={(juice) => setJuice(juice)}
                      value={juice}
                    >
                      {item.juices.map((juiceItem, juiceKey) => (
                        <RadioButton.Item
                          label={juiceItem.name}
                          value={juiceItem.name}
                          color="#FF3366"
                          key={juiceKey}
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/*Fruit list */}
                <List.AccordionGroup>
                  <List.Accordion
                    style={style.list}
                    titleStyle={{
                      color: '#FF3366',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                    title="Fruit"
                    id={'item '}
                  >
                    <RadioButton.Group
                      onValueChange={(fruit) => setFruit(fruit)}
                      value={fruit}
                    >
                      {item.fruit.map((fruitItem, fruitKey) => (
                        <RadioButton.Item
                          label={fruitItem.name}
                          value={fruitItem.name}
                          key={fruitKey}
                          color="#FF3366"
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* Cereals list */}
                <List.AccordionGroup>
                  <List.Accordion
                    style={style.list}
                    titleStyle={{
                      color: '#FF3366',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                    title="Cereals"
                    id={'item '}
                  >
                    <RadioButton.Group
                      onValueChange={(cereals) => setCereals(cereals)}
                      value={cereals}
                    >
                      {item.cereals.map((cerealsItem, cerealsKey) => (
                        <RadioButton.Item
                          label={cerealsItem.name}
                          value={cerealsItem.name}
                          key={cerealsKey}
                          color="#FF3366"
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/*Hot Breakfast list */}
                <List.AccordionGroup>
                  <List.Accordion
                    style={style.list}
                    titleStyle={{
                      color: '#FF3366',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                    title="Hot Breakfast"
                    id={'item '}
                  >
                    <RadioButton.Group
                      onValueChange={(hotbreakfast) =>
                        setHotbreakfast(hotbreakfast)
                      }
                      value={hotbreakfast}
                    >
                      {item.hotbreakfast.map(
                        (hotbreakfastItem, hotbreakfastKey) => (
                          <RadioButton.Item
                            label={hotbreakfastItem.name}
                            value={hotbreakfastItem.name}
                            key={hotbreakfastKey}
                            color="#FF3366"
                          />
                        ),
                      )}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* Breads list */}
                <List.AccordionGroup>
                  <List.Accordion
                    style={style.list}
                    titleStyle={{
                      color: '#FF3366',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                    title="Breads"
                    id={'item '}
                  >
                    <RadioButton.Group
                      onValueChange={(breads) => setBreads(breads)}
                      value={breads}
                    >
                      {item.breads.map((breadsItem, breadsKey) => (
                        <RadioButton.Item
                          label={breadsItem.name}
                          value={breadsItem.name}
                          key={breadsKey}
                          color="#FF3366"
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* Spreads list */}
                <List.AccordionGroup>
                  <List.Accordion
                    style={style.list}
                    titleStyle={{
                      color: '#FF3366',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                    title="Spreads"
                    id={'item '}
                  >
                    <RadioButton.Group
                      onValueChange={(spreads) => setSpreads(spreads)}
                      value={spreads}
                    >
                      {item.spreads.map((spreadsItem, spreadsKey) => (
                        <RadioButton.Item
                          label={spreadsItem.name}
                          value={spreadsItem.name}
                          key={spreadsKey}
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
                  style={style.comment}
                  label="Comments"
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

export default Breakfast;
