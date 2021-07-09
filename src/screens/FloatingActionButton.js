/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-elements';

export default () => {
  return (
    <View style={styles.container}>
      <FAB
        title="Create"
        upperCase
        icon={{
          name: 'home',
          type: 'font-awesome',
          color: '#fff',
        }}
        onPress={() => alert('foi')}
      />
      <FAB
        title="Create"
        containerStyle={{width: '35%'}}
        onPress={() => alert('foi')}
      />
      <FAB
        placement="right"
        icon={{
          name: 'plus',
          type: 'font-awesome',
          color: '#fff',
        }}
        containerStyle={{
          width: 60,
          height: 60,
          borderRadius: 100,
        }}
        buttonStyle={{
          backgroundColor: 'orange',
          width: 60,
          height: 60,
          borderRadius: 100,
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
