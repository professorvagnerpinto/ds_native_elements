/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Icon} from 'react-native-elements';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'ICON',
        }}
      />

      <Text style={styles.text}>Plain</Text>
      <Icon name="rowing" />

      <Text style={styles.text}>Colored Material</Text>
      <Icon name="g-translate" type="material" color="#00aced" />

      <Text style={styles.text}>Colored EvilIcon</Text>
      <Icon name="sc-telegram" type="evilicon" color="#517fa4" />

      <Text style={styles.text}>Reversed</Text>
      <Icon
        reverse
        name="ios-american-football"
        type="ionicon"
        color="#517fa4"
      />

      <Text style={styles.text}>Raised</Text>
      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color="#f50"
        onPress={() => alert('foi')}
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
    marginTop: 30,
  },
});
