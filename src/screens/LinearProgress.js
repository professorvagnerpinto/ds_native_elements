import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import {LinearProgress} from 'react-native-elements';

export default ({navigation}) => {
  const [progressValue, setProgressValue] = useState(0);

  setTimeout(function () {
    setProgressValue(progressValue + 0.2);
  }, 1000);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'LINEAR PROGRES',
        }}
      />

      <Text style={styles.text}>Standard (Indeterminate)</Text>
      <LinearProgress />

      <Text style={styles.text}>Indeterminate whith color</Text>
      <LinearProgress color="orange" />

      <Text style={styles.text}>Indeterminate whith color primary</Text>
      <LinearProgress color="primary" />

      <Text style={styles.text}>Indeterminate whith color secondary</Text>
      <LinearProgress color="secondary" />

      <Text style={styles.text}>Determinate</Text>
      <LinearProgress
        variant="determinate"
        color="green"
        value={progressValue}
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
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10,
  },
});
