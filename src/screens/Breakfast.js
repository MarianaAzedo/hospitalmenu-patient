import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { List, RadioButton } from 'react-native-paper';
import style from '../StyleSheet.css.js';
import api from '../services/api';

const Breakfast = () => {
  let [juice, setJuice] = useState('');
  let [fruit, setFruit] = useState('');
  let [cereals, setCereals] = useState('');
  let [hotbreakfast, setHotbreakfast] = useState('');
  let [breads, setBreads] = useState('');
  let [spreads, setSpreads] = useState('');
  let [hotdrinks, setHotdrinks] = useState('');
  const [menu, setMenu] = React.useState('');

  //post method
  const handleSubmit = () => {
    api
      .POST('/menuroom', {
        breakfast: {
          juice,
          fruit,
          cereals,
          hotbreakfast,
          breads,
          spreads,
          hotdrinks,
        },
        userid: 12345,
        roomid: 305,
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
  }, []);

  return (
    <View style={style.container}>
      <ScrollView>
        {/* message */}
        <Text style={style.text}>Please, fill this prior to tomorrow.</Text>
        {/* Calling rout from API */}
        {menu &&
          menu
            .filter((item) => item.description.includes('Breakfast'))
            .map((item, key) => (
              <View key={key}>
                {/* List Accordion Juices*/}
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
                    {/* Radio Button Juices*/}
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
                {/* List Accordion Fruit*/}
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
                    {/* Radio Button fruit*/}
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
                {/* List Accordion Cereals*/}
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
                    {/* Radio Button Cereals*/}
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
                {/* List Accordion Hot Breakfast*/}
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
                    {/* Radio Button Hot Breakfast*/}
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
                {/* List Accordion Breads*/}
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
                    {/* Radio Button Breads*/}
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
                {/* List Accordion Spreads*/}
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
                    {/* Radio Button Spreads*/}
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
                    {/* Radio Button Hot Drinks*/}
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

export default Breakfast;
