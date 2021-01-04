import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, Checkbox } from 'react-native-paper';

const Evening = () => {
  let [menu, setMenu] = useState('');
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    fetch(`http://0.0.0.0:3000/menu`)
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);
  console.log(menu);
  return (
    <View style={style.container}>
      {menu &&
        menu
          .filter((item) => item.description.includes('Evening'))
          .map((item, key) => (
            <View key={key}>
              <List.AccordionGroup>
                <List.Accordion title="Starter Course" id={'item '}>
                  {item.startercourse.map(
                    (startercourseItem, startercourseKey) => (
                      <Checkbox.Item
                        label={startercourseItem.name}
                        key={startercourseKey}
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
                <List.Accordion title="Main Course" id={'item '}>
                  {item.maincourse.map((maincourseItem, maincourseKey) => (
                    <Checkbox.Item
                      label={maincourseItem.name}
                      key={maincourseKey}
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                  ))}
                </List.Accordion>
              </List.AccordionGroup>
              <List.AccordionGroup>
                <List.Accordion title="Desert" id={'item '}>
                  {item.dessert.map((dessertItem, dessertKey) => (
                    <Checkbox.Item
                      label={dessertItem.name}
                      key={dessertKey}
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                  ))}
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
            </View>
          ))}
      <StatusBar style="auto" />
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
