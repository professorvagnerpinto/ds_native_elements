/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, colors} from 'react-native-elements';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          type: 'material',
          color: colors.white,
          iconStyle: {color: colors.white},
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{text: 'HEADER', style: {color: colors.white}}}
        rightComponent={{
          icon: 'search',
          type: 'material',
          color: colors.white,
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
