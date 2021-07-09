/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Chip} from 'react-native-elements';

export default () => {
  return (
    <View style={styles.container}>
      <Chip title="Solid Chip" />

      <Chip title="Disabled Chip" disabled />

      <Chip
        title="Outlined Chip"
        type="outline"
        buttonStyle={{backgroundColor: 'transparent'}}
        titleStyle={{color: 'black'}}
      />

      <Chip
        title="Outlined & Disabled"
        type="outline"
        disabled
        buttonStyle={{backgroundColor: 'transparent'}}
      />

      <Chip
        title="Left Icon Chip"
        icon={{
          name: 'bluetooth',
          type: 'font-awesome',
          size: 20,
          color: 'white',
        }}
      />

      <Chip
        title="Right Icon Chip"
        icon={{
          name: 'close',
          type: 'font-awesome',
          size: 20,
          color: 'white',
        }}
        iconRight
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
    marginTop: 10,
  },
});
