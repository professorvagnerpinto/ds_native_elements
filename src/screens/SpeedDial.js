import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="SPEED DIAL" leftPress={() => navigation.goBack()} />
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
