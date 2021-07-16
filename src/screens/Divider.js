import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Divider, colors} from 'react-native-elements';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'DIVIDER',
        }}
      />
      {/* <Divider orientation="horizontal" width={5} /> */}

      <Divider orientation="vertical" width={5} />

      {/* <Divider inset={true} insetType="middle" /> */}

      <Divider
        orientation="horizontal"
        subHeader="Test"
        subHeaderStyle={{color: colors.primary}}
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
