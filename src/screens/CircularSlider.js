import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header} from 'react-native-elements';
//import {CircularSlider} from 'react-native-elements-universe';

export default ({navigation}) => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'CIRCULAR SLIDER',
        }}
      />
      <Text>
        Esta lib está com um bug na instalação, veja na pasta node_modules
      </Text>
      {/* <CircularSlider value={value} onChange={setValue} />
      <CircularSlider value={value} noThumb />
      <CircularSlider maxAngle={90} /> */}
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
