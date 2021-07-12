import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ButtonGroup} from 'react-native-elements';

export default ({navigation}) => {
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
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'BUTTON GROUP',
        }}
      />
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
  },
  text: {
    fontSize: 20,
  },
});
