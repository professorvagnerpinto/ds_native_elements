/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Header, Card, ListItem, Button, colors} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({navigation}) => {
  const users = [
    {
      name: 'Ana',
      avatar: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
    },
    {
      name: 'Rafael',
      avatar: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
    },
  ];

  return (
    <>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'CARDS',
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>With Image, Text and Button as children</Card.Title>
            <Card.Divider />
            <Card.Image source={require('../assets/images/card.png')} />
            <Text
              style={{marginBottom: 10, marginTop: 10, textAlign: 'justify'}}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              icon={<Icon name="code" color={colors.white} size={22} />}
              containerStyle={{
                width: '100%',
                margin: 0,
              }}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
              onPress={() => alert('foi')}
            />
          </Card>
          <Card>
            <Card.Title>Card with Title and Divider</Card.Title>
            <Card.Divider />
            {users.map((u, k) => {
              return (
                <View key={k} style={styles.user}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{uri: u.avatar}}
                  />
                  <Text style={styles.name}>{u.name}</Text>
                </View>
              );
            })}
          </Card>
          <Card containerStyle={{padding: 10}}>
            <Card.Title>
              Card with Title, without image, without header, using ListItem
              component
            </Card.Title>
            {users.map((u, k) => (
              <ListItem
                key={k}
                bottomDivider
                onPress={() => alert('foi')}
                containerStyle={{width: '100%'}}>
                <ListItem.Content>
                  <ListItem.Title>{u.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </Card>
        </View>
      </ScrollView>
    </>
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
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
