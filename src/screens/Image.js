/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Header, Image} from 'react-native-elements';

export default ({navigation}) => {
  const [image, setImage] = useState('https://');

  setTimeout(function () {
    setImage('https://reactnativeelements.com/img/avatar/avatar--photo.jpg');
  }, 3000);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'IMAGE',
        }}
      />

      <Text style={styles.text}>Standard Image</Text>
      <Image
        source={require('../assets/images/card.png')}
        style={{width: 200, height: 200}}
      />

      <Text style={styles.text}>
        Image with custom placeholder content and transition
      </Text>
      <Image
        source={{uri: image}}
        style={{width: 200, height: 200}}
        PlaceholderContent={<ActivityIndicator size="large" color="red" />}
        transition
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
