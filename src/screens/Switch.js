import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Switch</Text>
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
