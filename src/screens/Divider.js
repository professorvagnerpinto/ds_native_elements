/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import Header from '../components/Header';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="DIVIDER" leftPress={() => navigation.goBack()} />
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
