import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, RadioButton, Button } from 'react-native-paper';

const Breakfast = () => {
  let [menu, setMenu] = useState('');
  let [juice, setJuice] = useState('');
  let [fruit, setFruit] = useState('');
  let [cereals, setCereals] = useState('');
  let [hotbreakfast, setHotbreakfast] = useState('');
  let [breads, setBreads] = useState('');
  let [spreads, setSpreads] = useState('');
  let [hotdrinks, setHotdrinks] = useState('');

  useEffect(() => {
    fetch(`http://0.0.0.0:3000/menu`)
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);

  return (
    <View style={style.container}>
      <View>
        <Text>Please, fill this prior to tomorrow.</Text>
        {menu &&
          menu
            .filter((item) => item.description.includes('Breakfast'))
            .map((item, key) => (
              <View key={key}>
                {/* Juices list */}
                <List.AccordionGroup>
                  <List.Accordion title="Juices" id={'item '}>
                    <RadioButton.Group
                      onValueChange={(juice) => setJuice(juice)}
                      value={juice}
                    >
                      {item.juices.map((juiceItem, juiceKey) => (
                        <RadioButton.Item
                          label={juiceItem.name}
                          value={juiceItem.name}
                          key={juiceKey}
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/*Fruit list */}
                <List.AccordionGroup>
                  <List.Accordion title="Fruit" id={'item '}>
                    <RadioButton.Group
                      onValueChange={(fruit) => setFruit(fruit)}
                      value={fruit}
                    >
                      {item.fruit.map((fruitItem, fruitKey) => (
                        <RadioButton.Item
                          label={fruitItem.name}
                          value={fruitItem.name}
                          key={fruitKey}
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* Cereals list */}
                <List.AccordionGroup>
                  <List.Accordion title="Cereals" id={'item '}>
                    <RadioButton.Group
                      onValueChange={(cereals) => setCereals(cereals)}
                      value={cereals}
                    >
                      {item.cereals.map((cerealsItem, cerealsKey) => (
                        <RadioButton.Item
                          label={cerealsItem.name}
                          value={cerealsItem.name}
                          key={cerealsKey}
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/*Hot Breakfast list */}
                <List.AccordionGroup>
                  <List.Accordion title="Hot Breakfast" id={'item '}>
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
                          />
                        ),
                      )}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* Breads list */}
                <List.AccordionGroup>
                  <List.Accordion title="Breads" id={'item '}>
                    <RadioButton.Group
                      onValueChange={(breads) => setBreads(breads)}
                      value={breads}
                    >
                      {item.breads.map((breadsItem, breadsKey) => (
                        <RadioButton.Item
                          label={breadsItem.name}
                          value={breadsItem.name}
                          key={breadsKey}
                        />
                      ))}
                    </RadioButton.Group>
                  </List.Accordion>
                </List.AccordionGroup>
                {/* Spreads list */}
                <List.AccordionGroup>
                  <List.Accordion title="Spreads" id={'item '}>
                    <RadioButton.Group
                      onValueChange={(spreads) => setSpreads(spreads)}
                      value={spreads}
                    >
                      {item.spreads.map((spreadsItem, spreadsKey) => (
                        <RadioButton.Item
                          label={spreadsItem.name}
                          value={spreadsItem.name}
                          key={spreadsKey}
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

export default Breakfast;
