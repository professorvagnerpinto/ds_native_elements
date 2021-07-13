import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Switch} from 'react-native-elements';

export default ({navigation}) => {
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(true);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'SWITCH',
        }}
      />
      <Switch value={state1} onValueChange={() => setState1(!state1)} />

      <Switch
        value={state2}
        color="orange"
        onValueChange={() => setState2(!state2)}
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
});
