/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, FAB, colors} from 'react-native-elements';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'FLOAT ACTION BUTTON',
        }}
      />
      <FAB
        title="Delete"
        upperCase
        icon={{
          name: 'trash-o',
          type: 'font-awesome',
          color: colors.white,
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
          name: 'add',
          type: 'material',
          color: colors.white,
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
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
});
