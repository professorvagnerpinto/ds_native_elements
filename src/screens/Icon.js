/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Icon, useTheme} from 'react-native-elements';

export default ({navigation}) => {
  const {theme} = useTheme();

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
      <Icon name="g-translate" type="material" color={theme.colors.blue2} />

      <Text style={styles.text}>Colored EvilIcon</Text>
      <Icon name="sc-telegram" type="evilicon" color={theme.colors.blue3} />

      <Text style={styles.text}>Reversed</Text>
      <Icon
        reverse
        name="ios-american-football"
        type="ionicon"
        color={theme.colors.blue3}
      />

      <Text style={styles.text}>Raised</Text>
      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color={theme.colors.orange}
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
  },
  text: {
    fontSize: 20,
    marginTop: 30,
  },
});
