import React from 'react';
import {StyleSheet, View} from 'react-native';
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

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'Map Function With Avatar',
        }}
      />
      <View style={styles.listItem}>
        {list.map((l, k) => (
          <ListItem key={k} bottomDivider>
            <Avatar source={{uri: l.avatar_url}} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
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
  listItem: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
