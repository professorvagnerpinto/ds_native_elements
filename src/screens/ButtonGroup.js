import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

export default () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttons = ['Hello', 'World', 'Buttons'];

  //TODO: ajustar a lógica (ver documentação)
  const updateIndex = index => {
    switch (index) {
      case 0: {
        setSelectedIndex(index + 1);
        break;
      }
      case 1: {
        setSelectedIndex(index + 1);
        break;
      }
      case 2: {
        setSelectedIndex(0);
        break;
      }
      default: {
        setSelectedIndex(0);
      }
    }
  };

  return (
    <View style={styles.container}>
      {console.log(selectedIndex)}
      <ButtonGroup
        buttons={buttons}
        onPress={() => updateIndex(selectedIndex)}
        selectedIndex={selectedIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 20,
  },
});
