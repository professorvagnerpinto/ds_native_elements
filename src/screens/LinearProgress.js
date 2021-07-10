import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../components/Header';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="LINEAR PROGRESS" leftPress={() => navigation.goBack()} />
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
