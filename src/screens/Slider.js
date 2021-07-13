/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Animated, Text} from 'react-native';
import {Header, Slider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({navigation}) => {
  const [value1, setValue1] = useState(0.0);
  const [value2, setValue2] = useState(0.0);
  const [value3, setValue3] = useState(0.0);
  const [value4, setValue4] = useState(0.0);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'SLIDER',
        }}
      />
      <View style={styles.slider}>
        <Text style={styles.text}>Default</Text>
        <Slider value={value1} onValueChange={value => setValue1(value)} />
        <Text>Value: {value1}</Text>
      </View>
      <View style={styles.slider}>
        <Text style={styles.text}>Modified Scale Output</Text>
        <Slider value={value2} onValueChange={value => setValue2(value)} />
        <Text>Value: {value2 * 10}</Text>
      </View>
      <View style={styles.slider}>
        <Text style={styles.text}>Replace Thumb with custom image</Text>
        <Slider
          value={value3}
          onValueChange={value => setValue3(value)}
          thumbStyle={{height: 40, width: 40, backgroundColor: 'transparent'}}
          thumbProps={{
            Component: Animated.Image,
            source: {
              uri: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
            },
          }}
        />
        <Text>Value: {value3 * 100}</Text>
      </View>
      <View style={styles.slider}>
        <Text style={styles.text}>Set Custom Children inside thumb</Text>
        <Slider
          value={value4}
          onValueChange={value => setValue4(value)}
          maximumValue={140}
          minimumValue={40}
          step={1}
          trackStyle={{height: 2, backgroundColor: 'transparent'}}
          thumbStyle={{height: 40, width: 40, backgroundColor: 'transparent'}}
          thumbProps={{
            children: (
              <Icon
                name="heartbeat"
                type="font-awesome"
                size={40}
                reverse
                containerStyle={{bottom: 40, right: 40}}
                color="#f50"
              />
            ),
          }}
        />
        <Text>Value: {value4}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
});
