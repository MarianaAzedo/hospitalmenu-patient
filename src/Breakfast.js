import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, Checkbox } from 'react-native-paper';

const Breakfast = () => {
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
      <View>
        {menu &&
          menu
            .filter((item) => item.description.includes('Breakfast'))
            .map((item, key) => (
              <View key={key}>
                <List.AccordionGroup>
                  <List.Accordion title="Juices" id={'item '}>
                    {item.juices.map((juiceItem, juiceKey) => (
                      <Checkbox.Item
                        label={juiceItem.name}
                        key={juiceKey}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setChecked(!checked);
                        }}
                      />
                    ))}
                  </List.Accordion>
                </List.AccordionGroup>
                <List.AccordionGroup>
                  <List.Accordion title="Fruit" id={'item '}>
                    {item.fruit.map((fruitItem, fruitKey) => (
                      <List.Item title={fruitItem.name} key={fruitKey} />
                    ))}
                  </List.Accordion>
                </List.AccordionGroup>
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
