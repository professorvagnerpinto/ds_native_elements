/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ListItem, Button, Avatar, colors} from 'react-native-elements';

export default ({navigation}) => {
  const [data, setData] = useState([
    {
      key: '1',
      name: 'Amy Farha',
      avatar_url:
        'https://s3-sa-east-1.amazonaws.com/freelancer-br-live-user-profile-data/1baca9b7fd9814e20afea55175be01640c68610f-picture-2101ce1c6afaec2c',
      subtitle: 'Vice President',
    },
    {
      key: '2',
      name: 'Chris Jackson',
      avatar_url:
        'https://s3-sa-east-1.amazonaws.com/freelancer-br-live-user-profile-data/4f0f88b084f84d623fc621c8e45af7512a1c597b-picture-3d5927d134ce0316',
      subtitle: 'Vice Chairman',
    },
  ]);

  function excluir(item) {
    let arr = [item];
    let list = [...data];
    list = list.filter(i => !arr.includes(i));
    setData(list);
  }

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'ListItemSwipeable',
        }}
      />
      {console.log(data)}
      {data.map((item, k) => (
        <ListItem.Swipeable
          key={k}
          leftContent={
            <Button
              title="Info"
              icon={{name: 'info', color: colors.white}}
              buttonStyle={{minHeight: '100%'}}
              containerStyle={{width: '100%'}}
              onPress={() => alert(item.name + '\n' + item.subtitle)}
            />
          }
          rightContent={
            <Button
              title="Delete"
              icon={{name: 'delete', color: colors.white}}
              buttonStyle={{minHeight: '100%', backgroundColor: colors.error}}
              containerStyle={{width: '100%', height: '95%'}}
              onPress={() => excluir(item)}
            />
          }>
          <View style={styles.listItem}>
            <Avatar
              source={{uri: item.avatar_url}}
              rounded
              containerStyle={styles.avatar}
            />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
          </View>
        </ListItem.Swipeable>
      ))}
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
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 10,
  },
});
