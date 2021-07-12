/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          type: 'material',
          color: '#fff',
          iconStyle: {color: '#fff'},
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{text: 'HEADER', style: {color: '#fff'}}}
        rightComponent={{
          icon: 'search',
          type: 'material',
          color: '#fff',
          onPress: () => alert('foi'),
        }}
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
    marginTop: 10,
  },
});
