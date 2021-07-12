/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Header, ListItem, Avatar} from 'react-native-elements';

export default ({navigation}) => {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
      subtitle: 'Vice Chairman',
    },
  ];

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({item}) => (
    <View style={{flex: 1}}>
      <ListItem bottomDivider>
        <Avatar source={{uri: item.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron onPress={() => alert('Route to ' + item.name)} />
      </ListItem>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'RN FlatList with link and avatar',
        }}
      />
      <View style={{width: '100%'}}>
        <FlatList
          keyExtractor={keyExtractor}
          data={list}
          renderItem={renderItem}
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
});
