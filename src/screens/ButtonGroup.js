/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ButtonGroup} from 'react-native-elements';

export default ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
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
      {/* <ButtonGroup
        buttons={buttons}
        onPress={() => updateIndex(selectedIndex)}
        selectedIndex={selectedIndex}
      /> */}
      <ButtonGroup
        buttons={['SIMPLE', 'BUTTON', 'GROUP']}
        selectedIndex={selectedIndex}
        onPress={value => {
          setSelectedIndex(value);
        }}
        containerStyle={{marginBottom: 20}}
      />
      <ButtonGroup
        buttons={['Multiple', 'Select', 'Button', 'Group']}
        selectMultiple
        selectedIndexes={selectedIndexes}
        onPress={value => {
          setSelectedIndexes(value);
        }}
        containerStyle={{marginBottom: 20}}
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
