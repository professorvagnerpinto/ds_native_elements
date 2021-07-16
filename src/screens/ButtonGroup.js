/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ButtonGroup} from 'react-native-elements';

export default ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

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
