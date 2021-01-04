import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, RadioButton, Checkbox, Button } from 'react-native-paper';

const Breakfast = () => {
  let [menu, setMenu] = useState('');
  let [juice, setJuice] = useState('');
  let [fruit, setFruit] = useState('');

  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    fetch(`http://0.0.0.0:3000/menu`)
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);
  console.log(menu);
  return (
    <View style={style.container}>
      <View>
        <Text>Please, fill this prior to tomorrow.</Text>
        {menu &&
          menu
            .filter((item) => item.description.includes('Breakfast'))
            .map((item, key) => (
              <View key={key}>
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
                <List.AccordionGroup>
                  <List.Accordion title="Cereals" id={'item '}>
                    {item.cereals.map((cerealsItem, cerealsKey) => (
                      <Checkbox.Item
                        label={cerealsItem.name}
                        key={cerealsKey}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setChecked(!checked);
                        }}
                      />
                    ))}
                  </List.Accordion>
                </List.AccordionGroup>
                <List.AccordionGroup>
                  <List.Accordion title="Hot Breakfast" id={'item '}>
                    {item.hotbreakfast.map(
                      (hotbreakfastItem, hotbreakfastKey) => (
                        <Checkbox.Item
                          label={hotbreakfastItem.name}
                          key={hotbreakfastKey}
                          status={checked ? 'checked' : 'unchecked'}
                          onPress={() => {
                            setChecked(!checked);
                          }}
                        />
                      ),
                    )}
                  </List.Accordion>
                </List.AccordionGroup>
                <List.AccordionGroup>
                  <List.Accordion title="Breads & Spreads" id={'item '}>
                    {item.breadspreads.map(
                      (breadspreadsItem, breadspreadsKey) => (
                        <Checkbox.Item
                          label={breadspreadsItem.name}
                          key={breadspreadsKey}
                          status={checked ? 'checked' : 'unchecked'}
                          onPress={() => {
                            setChecked(!checked);
                          }}
                        />
                      ),
                    )}
                  </List.Accordion>
                </List.AccordionGroup>
                <List.AccordionGroup>
                  <List.Accordion title="Hot Drinks" id={'item '}>
                    {item.hotdrinks.map((hotdrinksItem, hotdrinksKey) => (
                      <Checkbox.Item
                        label={hotdrinksItem.name}
                        key={hotdrinksKey}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setChecked(!checked);
                        }}
                      />
                    ))}
                  </List.Accordion>
                </List.AccordionGroup>
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
