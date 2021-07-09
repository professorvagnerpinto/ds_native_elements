/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';

export default () => {
  return (
    <View style={styles.container}>
      {/* <Divider orientation="horizontal" width={5} /> */}

      <Divider orientation="vertical" width={5} />

      {/* <Divider inset={true} insetType="middle" /> */}

      <Divider
        orientation="horizontal"
        subHeader="Test"
        subHeaderStyle={{color: 'blue'}}
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
