/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-elements';

export default () => {
  return (
    <View style={styles.container}>
      <FAB
        title="Delete"
        upperCase
        icon={{
          name: 'trash',
          type: 'font-awesome',
          color: '#fff',
        }}
        containerStyle={{
          width: 120,
          height: 50,
          borderRadius: 10,
        }}
        buttonStyle={{
          width: 120,
          height: 50,
          borderRadius: 10,
        }}
        onPress={() => alert('foi')}
      />
      <FAB
        title="Create"
        containerStyle={{
          width: 120,
          height: 50,
          borderRadius: 10,
        }}
        buttonStyle={{
          width: 120,
          height: 50,
          borderRadius: 10,
        }}
        onPress={() => alert('foi')}
      />
      <FAB
        placement="right"
        icon={{
          name: 'plus',
          type: 'font-awesome',
          color: '#fff',
        }}
        onPress={() => alert('foi')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
});
