import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="CIRCULAR SLIDER" leftPress={() => navigation.goBack()} />
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
});
