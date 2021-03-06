/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Avatar, Badge} from 'react-native-elements';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'BADGE',
        }}
      />
      {/* Standard badge */}
      <Text style={styles.text}>Standard badge</Text>
      <Badge value="99+" status="error" />
      <Badge value={<Text>5</Text>} />

      {/* Mini badge */}
      <Text style={styles.text}>Mini badge</Text>
      <Badge status="success" />
      <Badge status="error" />
      <Badge status="primary" />
      <Badge status="warning" />

      {/* Avatar with mini badge */}
      <Text style={styles.text}>Avatar with mini badge</Text>
      <View>
        <Avatar
          rounded
          source={{
            uri: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
          }}
          size="large"
        />
        <Badge
          status="success"
          containerStyle={{position: 'absolute', top: 0, right: 0}}
        />
      </View>
      <Text style={styles.text}>Avatar with mini badge</Text>
      <View>
        <Avatar
          rounded
          source={{
            uri: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
          }}
          size="large"
        />
        <Badge
          value="99+"
          status="error"
          containerStyle={{position: 'absolute', top: 0, right: 0}}
        />
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
  text: {
    fontSize: 20,
    marginTop: 10,
  },
});
